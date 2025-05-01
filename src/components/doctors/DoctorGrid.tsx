
import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

type Doctor = {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
  availability: string;
  tags: string[];
};

const DoctorGrid = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for doctors
  const dummyDoctors: Doctor[] = [
    {
      id: "doctor-1",
      name: "Sarah Johnson",
      specialization: "Orthodontist",
      experience: 12,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      availability: "Today, 3:00 PM",
      tags: ["Braces", "Aligners", "Pediatric"]
    },
    {
      id: "doctor-2",
      name: "Michael Thompson",
      specialization: "Cosmetic Dentist",
      experience: 15,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      availability: "Tomorrow, 10:00 AM",
      tags: ["Veneers", "Whitening", "Smile Design"]
    },
    {
      id: "doctor-3",
      name: "Emily Chen",
      specialization: "Periodontist",
      experience: 10,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
      availability: "Friday, 2:30 PM",
      tags: ["Gum Treatment", "Implants"]
    },
    {
      id: "doctor-4",
      name: "David Wilson",
      specialization: "Orthodontist",
      experience: 8,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
      availability: "Today, 5:15 PM",
      tags: ["Aligners", "Retainers", "Braces"]
    },
  ];

  useEffect(() => {
    // Simulate API call to fetch doctors
    setTimeout(() => {
      setDoctors(dummyDoctors);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Input
            type="search"
            placeholder="Search doctors by name, specialty, or treatment..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-2 py-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-10 w-full" />
                <div className="flex gap-3 pt-2">
                  <Skeleton className="h-10 w-1/2" />
                  <Skeleton className="h-10 w-1/2" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-medium">No doctors found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
              {searchQuery && (
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery("")}
                  className="mt-2"
                >
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map(doctor => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DoctorGrid;
