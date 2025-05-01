
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
  availability: string;
  tags: string[];
}

const DoctorCard = ({
  id,
  name,
  specialization,
  experience,
  rating,
  image,
  availability,
  tags
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white text-primary hover:bg-white">
            ⭐ {rating.toFixed(1)}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <Link to={`/doctors/${id}`}>
          <h3 className="font-semibold text-lg hover:text-primary transition-colors">
            Dr. {name}
          </h3>
        </Link>
        
        <div className="text-sm text-muted-foreground mb-2">
          {specialization} • {experience} Years Experience
        </div>
        
        <div className="flex flex-wrap gap-2 my-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="bg-muted/40 rounded-md p-2 text-xs mt-3 flex items-center justify-between">
          <span className="font-medium">Next Available:</span>
          <span className="text-green-600">{availability}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3 pt-0">
        <Button variant="outline" size="sm" className="flex-1">
          View Profile
        </Button>
        <Button size="sm" className="flex-1">
          Book Consultation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
