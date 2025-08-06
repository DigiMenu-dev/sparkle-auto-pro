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
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ImageSlider />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[var(--gradient-glass)] backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-[var(--shadow-card)] border border-border/50">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent leading-tight">
              AutoLavado Premium
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              El mejor cuidado para tu vehículo
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {vehicleTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => navigate(`/servicios/${type.id}`)}
                  className="group relative h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-[var(--gradient-card)] backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-[var(--gradient-primary)] transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-primary)] hover:scale-105 transform"
                >
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <div className="text-center px-2">
                    <div className="font-semibold text-sm sm:text-base text-foreground group-hover:text-white transition-colors">
                      {type.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-white/90 transition-colors">
                      {type.description}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-[var(--gradient-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
