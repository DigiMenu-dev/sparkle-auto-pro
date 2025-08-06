import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Service } from '@/data/services';
import { Check, MessageCircle } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');

  if (!service) return null;

  const handleWhatsAppContact = () => {
    const vehicleTypeMap = {
      automoviles: 'Automóvil',
      camionetas: 'Camioneta',
      motocicletas: 'Motocicleta',
      mototaxis: 'Mototaxi'
    };
    
    const vehicleTypeName = vehicleTypeMap[service.vehicleType];
    const message = `¡Hola! Me interesa el ${service.name} para mi ${vehicleTypeName}.

📋 *Mis datos:*
• Nombre: ${name}
• Vehículo: ${vehicle}
• Servicio: ${service.name}
• Precio: ${service.price}

¿Podrían ayudarme a agendar una cita?`;

    const whatsappUrl = `https://wa.me/529711135744?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const isFormValid = name.trim() && vehicle.trim();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--gradient-card)] border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            {service.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border/30">
            <p className="text-lg sm:text-xl font-semibold text-primary mb-2">{service.price}</p>
            <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm sm:text-base">Servicios incluidos:</h4>
            <div className="grid gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-4 sm:pt-6">
            <h4 className="font-semibold mb-4 text-foreground text-sm sm:text-base">Solicita tu cita ahora</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">Tu nombre</Label>
                <Input
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 bg-input border-border/50 focus:border-primary text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="vehicle" className="text-foreground text-sm">
                  Detalles de tu vehículo
                </Label>
                <Input
                  id="vehicle"
                  placeholder="Ej: Honda Civic 2020 Sedán, color blanco"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="mt-1 bg-input border-border/50 focus:border-primary text-sm sm:text-base"
                />
              </div>
              
              <Button
                onClick={handleWhatsAppContact}
                disabled={!isFormValid}
                className="w-full bg-[var(--gradient-primary)] hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)] text-sm sm:text-lg py-4 sm:py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                ¡Lo quiero! - Contactar por WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al hacer click serás redirigido a WhatsApp para completar tu solicitud
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};