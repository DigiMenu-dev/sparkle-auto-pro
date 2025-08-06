import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/data/services';
import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  const isPremium = service.name.includes('Diamante') || service.name.includes('Oro');
  
  return (
    <Card className="group relative overflow-hidden hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)] cursor-pointer bg-[var(--gradient-card)] backdrop-blur-lg border-border/50 hover:border-primary/50">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
            {service.name}
          </h3>
          {isPremium && (
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs font-medium text-primary">Premium</span>
            </div>
          )}
        </div>
        
        <div className="mb-3 sm:mb-4">
          <p className="text-xl sm:text-2xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            {service.price}
          </p>
        </div>
        
        <p className="text-muted-foreground mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
          {service.description}
        </p>
        
        <div className="mb-4 sm:mb-6">
          <p className="text-sm font-medium text-foreground mb-2">Incluye:</p>
          <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary text-xs mt-1">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-primary text-xs sm:text-sm font-medium">
                +{service.features.length - 3} servicios más...
              </li>
            )}
          </ul>
        </div>
        
        <Button 
          onClick={() => onSelect(service)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-primary)] border-0 transition-[var(--transition-smooth)] text-sm sm:text-base py-2 sm:py-3"
        >
          Ver detalles y solicitar
        </Button>
      </div>
    </Card>
  );
};