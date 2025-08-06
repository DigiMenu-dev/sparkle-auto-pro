export interface Service {
  id: string;
  name: string;
  price?: string;
  description: string;
  features: string[];
  vehicleType: 'automoviles' | 'camionetas' | 'motocicletas' | 'mototaxis';
}

export const services: Service[] = [
  // Automóviles
  {
    id: 'auto-diamante',
    name: 'Paquete Diamante',
    price: '$600.00',
    description: 'Nuestro servicio más completo y premium para tu automóvil',
    features: [
      'Tratamiento de sanitización y desinfección con ozono',
      'Aplicación de sellador premium sobre la pintura',
      'Hidratación de plásticos interiores',
      'Lavado de carrocerías y tolvas',
      'Aspirado interior y cajuela',
      'Descontaminado de rines',
      'Eliminación de sarro en emblemas',
      'Descontaminado de pintura',
      'Brillo en llantas y molduras exteriores'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-bronce',
    name: 'Paquete Bronce',
    price: 'Chico: $140 | Mediano: $160 | Grande: $170 | Extra: $270',
    description: 'Servicio básico pero completo para mantener tu automóvil limpio',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida',
      'Aroma'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-plata',
    name: 'Paquete Plata',
    price: 'Chico: $290 | Mediano: $310 | Grande: $320 | Extra: $430',
    description: 'Servicio intermedio con lavado de motor incluido',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida',
      'Lavado de motor',
      'Aroma'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-oro',
    name: 'Paquete Oro',
    price: 'Chico: $380 | Mediano: $420 | Grande: $470 | Extra: $650',
    description: 'Servicio premium con encerado en pasta',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Encerado en pasta',
      'Aroma'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-sanitizacion',
    name: 'Tratamiento de Sanitización',
    price: '$250.00',
    description: 'Elimina virus, hongos, bacterias y malos olores',
    features: [
      'Sanitización y desinfección con ozono',
      'Elimina virus, hongos, bacterias',
      'Elimina malos olores',
      'Incluye lavado y aspirado'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-pulido',
    name: 'Servicio de Pulido/Encerado',
    price: 'Según vehículo',
    description: 'Servicio especializado de pulido y encerado',
    features: [
      'Lavado de carrocería',
      'Aspirado de alfombra y cajuela',
      'Limpieza de plásticos de puertas',
      'Lavado de rines',
      'Descontaminado de carrocería',
      'Pulido de carrocería',
      'Aplicación de cera selladora'
    ],
    vehicleType: 'automoviles'
  },
  {
    id: 'auto-completo',
    name: 'Servicio Completo',
    price: 'Según vehículo',
    description: 'El servicio más completo disponible',
    features: [
      'Lavado de asientos',
      'Lavado de techo',
      'Lavado de área de cajuela',
      'Lavado de tapetes',
      'Aspirado profundo de alfombra',
      'Descontaminado e hidratación de puertas',
      'Limpieza a detalle de tablero y consola central',
      'Limpieza de postes',
      'Lavado de motor',
      'Unidad se entrega lavada'
    ],
    vehicleType: 'automoviles'
  },

  // Camionetas (mismos servicios, precios diferentes)
  {
    id: 'camioneta-diamante',
    name: 'Paquete Diamante',
    price: '$700.00',
    description: 'Nuestro servicio más completo y premium para tu camioneta',
    features: [
      'Tratamiento de sanitización y desinfección con ozono',
      'Aplicación de sellador premium sobre la pintura',
      'Hidratación de plásticos interiores',
      'Lavado de carrocerías y tolvas',
      'Aspirado interior y cajuela',
      'Descontaminado de rines',
      'Eliminación de sarro en emblemas',
      'Descontaminado de pintura',
      'Brillo en llantas y molduras exteriores'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-bronce',
    name: 'Paquete Bronce',
    price: 'Chico: $140 | Mediano: $160 | Grande: $170 | Extra: $270',
    description: 'Servicio básico pero completo para mantener tu camioneta limpia',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida',
      'Aroma'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-plata',
    name: 'Paquete Plata',
    price: 'Chico: $290 | Mediano: $310 | Grande: $320 | Extra: $430',
    description: 'Servicio intermedio con lavado de motor incluido',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida',
      'Lavado de motor',
      'Aroma'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-oro',
    name: 'Paquete Oro',
    price: 'Chico: $380 | Mediano: $420 | Grande: $470 | Extra: $650',
    description: 'Servicio premium con encerado en pasta',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado interior y cajuela',
      'Hidratación de plásticos interiores',
      'Brillo en llantas y molduras exteriores',
      'Encerado en pasta',
      'Aroma'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-sanitizacion',
    name: 'Tratamiento de Sanitización',
    price: '$300.00',
    description: 'Elimina virus, hongos, bacterias y malos olores',
    features: [
      'Sanitización y desinfección con ozono',
      'Elimina virus, hongos, bacterias',
      'Elimina malos olores',
      'Incluye lavado y aspirado'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-pulido',
    name: 'Servicio de Pulido/Encerado',
    price: 'Según vehículo',
    description: 'Servicio especializado de pulido y encerado',
    features: [
      'Lavado de carrocería',
      'Aspirado de alfombra y cajuela',
      'Limpieza de plásticos de puertas',
      'Lavado de rines',
      'Descontaminado de carrocería',
      'Pulido de carrocería',
      'Aplicación de cera selladora'
    ],
    vehicleType: 'camionetas'
  },
  {
    id: 'camioneta-completo',
    name: 'Servicio Completo',
    price: 'Según vehículo',
    description: 'El servicio más completo disponible',
    features: [
      'Lavado de asientos',
      'Lavado de techo',
      'Lavado de área de cajuela',
      'Lavado de tapetes',
      'Aspirado profundo de alfombra',
      'Descontaminado e hidratación de puertas',
      'Limpieza a detalle de tablero y consola central',
      'Limpieza de postes',
      'Lavado de motor',
      'Unidad se entrega lavada'
    ],
    vehicleType: 'camionetas'
  },

  // Motocicletas
  {
    id: 'moto-basico',
    name: 'Lavado Básico',
    price: 'Consultar precio',
    description: 'Servicio básico para mantener tu motocicleta en perfecto estado',
    features: [
      'Lavado de carrocería y tolvas',
      'Hidratación de plásticos',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida'
    ],
    vehicleType: 'motocicletas'
  },
  {
    id: 'moto-premium',
    name: 'Lavado Premium',
    price: 'Consultar precio',
    description: 'Servicio completo con pulido y descontaminado',
    features: [
      'Lavado de carrocería y tolvas',
      'Hidratación de plásticos',
      'Brillo en llantas y molduras exteriores',
      'Encerado en pasta',
      'Pulido de carrocería',
      'Descontaminado de pintura y piezas'
    ],
    vehicleType: 'motocicletas'
  },

  // Mototaxis
  {
    id: 'mototaxi-basico',
    name: 'Lavado Básico',
    price: 'Consultar precio',
    description: 'Servicio básico para mantener tu mototaxi limpia y presentable',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado de áreas internas',
      'Hidratación de plásticos',
      'Brillo en llantas y molduras exteriores',
      'Aplicación de cera líquida'
    ],
    vehicleType: 'mototaxis'
  },
  {
    id: 'mototaxi-premium',
    name: 'Lavado Premium',
    price: 'Consultar precio',
    description: 'Servicio completo con pulido y descontaminado',
    features: [
      'Lavado de carrocería y tolvas',
      'Aspirado de áreas internas',
      'Hidratación de plásticos',
      'Brillo en llantas y molduras exteriores',
      'Encerado en pasta',
      'Pulido y descontaminado de carrocería'
    ],
    vehicleType: 'mototaxis'
  }
];

export const getServicesByVehicleType = (vehicleType: string) => {
  return services.filter(service => service.vehicleType === vehicleType);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};