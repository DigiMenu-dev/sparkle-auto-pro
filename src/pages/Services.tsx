import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceModal } from '@/components/ServiceModal';
import { getServicesByVehicleType, Service } from '@/data/services';
import { ArrowLeft, Car, Truck, Bike, Zap } from 'lucide-react';

const Services = () => {
  const { vehicleType } = useParams<{ vehicleType: string }>();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!vehicleType) {
    navigate('/');
    return null;
  }

  const services = getServicesByVehicleType(vehicleType);
  
  const vehicleTypeMap = {
    automoviles: { name: 'Automóviles', icon: Car },
    camionetas: { name: 'Camionetas', icon: Truck },
    motocicletas: { name: 'Motocicletas', icon: Bike },
    mototaxis: { name: 'Mototaxis', icon: Zap }
  };

  const currentVehicle = vehicleTypeMap[vehicleType as keyof typeof vehicleTypeMap];
  
  if (!currentVehicle) {
    navigate('/');
    return null;
  }

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const IconComponent = currentVehicle.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-[var(--gradient-card)] border-border/50 hover:border-primary/50 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver al inicio</span>
            <span className="sm:hidden">Volver</span>
          </Button>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <IconComponent className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              {currentVehicle.name}
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Selecciona el servicio perfecto para tu {currentVehicle.name.toLowerCase()}
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-[var(--gradient-card)] rounded-2xl p-8 border border-border/50 max-w-md mx-auto">
              <p className="text-lg text-muted-foreground">
                No hay servicios disponibles para este tipo de vehículo.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
              />
            ))}
          </div>
        )}

        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Services;