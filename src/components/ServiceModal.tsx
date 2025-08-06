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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            {service.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-lg font-semibold text-primary mb-2">{service.price}</p>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Servicios incluidos:</h4>
            <div className="grid gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4 text-foreground">Solicita tu cita ahora</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Tu nombre</Label>
                <Input
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="vehicle" className="text-foreground">
                  Detalles de tu vehículo
                </Label>
                <Input
                  id="vehicle"
                  placeholder="Ej: Honda Civic 2020 Sedán, color blanco"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <Button
                onClick={handleWhatsAppContact}
                disabled={!isFormValid}
                className="w-full bg-[var(--gradient-primary)] hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)] text-lg py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
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