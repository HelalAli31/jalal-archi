import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
}

export const ProjectCard = ({ image, title }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift cursor-pointer group border-border">
      <div className="hover-zoom aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <h3 className="text-luxury-cream text-xl font-semibold">{title}</h3>
      </div>
    </Card>
  );
};
