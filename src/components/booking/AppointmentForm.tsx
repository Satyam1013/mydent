
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

interface AppointmentFormProps {
  doctorId?: string;
  doctorName?: string;
}

const AppointmentForm = ({ doctorId, doctorName }: AppointmentFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();

  const handleBookAppointment = () => {
    if (!date || !selectedTimeSlot) {
      toast({
        title: "Missing information",
        description: "Please select a date and time slot.",
        variant: "destructive"
      });
      return;
    }

    setIsBooking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: "Appointment booked!",
        description: `Your appointment is scheduled for ${format(date, "MMMM dd, yyyy")} at ${selectedTimeSlot}.`,
      });
      
      // Reset form
      setDate(undefined);
      setSelectedTimeSlot(null);
    }, 1500);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          {doctorName 
            ? `Schedule an appointment with Dr. ${doctorName}` 
            : "Schedule a Consultation"}
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "MMMM dd, yyyy") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                    date > new Date(new Date().setDate(new Date().getDate() + 30))
                  }
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Select Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTimeSlot(time)}
                  className={cn(
                    "text-sm py-2 px-3 rounded-md border transition-colors",
                    selectedTimeSlot === time
                      ? "bg-primary text-primary-foreground border-primary"
                      : "hover:bg-muted"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleBookAppointment}
            className="w-full button-shine"
            disabled={isBooking || !date || !selectedTimeSlot}
          >
            {isBooking ? "Booking..." : "Book Appointment"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
