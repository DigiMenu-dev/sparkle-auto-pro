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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <IconComponent className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              {currentVehicle.name}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Selecciona el servicio perfecto para tu {currentVehicle.name.toLowerCase()}
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No hay servicios disponibles para este tipo de vehículo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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