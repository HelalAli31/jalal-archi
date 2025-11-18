interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 fade-in">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-luxury-gold-light flex items-center justify-center shadow-lg">
          <span className="text-3xl font-bold text-primary">{number}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};
