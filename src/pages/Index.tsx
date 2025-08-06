import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageSlider } from '@/components/ImageSlider';
import { Car, Truck, Bike, Zap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const vehicleTypes = [
    {
      id: 'automoviles',
      name: 'Automóviles',
      icon: Car,
      description: 'Servicios especializados para autos'
    },
    {
      id: 'camionetas', 
      name: 'Camionetas',
      icon: Truck,
      description: 'Lavado premium para camionetas'
    },
    {
      id: 'motocicletas',
      name: 'Motocicletas', 
      icon: Bike,
      description: 'Cuidado especial para motos'
    },
    {
      id: 'mototaxis',
      name: 'Mototaxis',
      icon: Zap,
      description: 'Servicio para mototaxis'
    }
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <ImageSlider />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            AutoLavado Premium
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            El mejor cuidado para tu vehículo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Button
                  key={type.id}
                  onClick={() => navigate(`/servicios/${type.id}`)}
                  variant="outline"
                  className="h-32 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-sm border-2 border-primary/20 hover:border-primary hover:bg-[var(--gradient-primary)] hover:text-white group transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-primary)]"
                >
                  <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-semibold text-base">{type.name}</div>
                    <div className="text-sm opacity-80">{type.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
