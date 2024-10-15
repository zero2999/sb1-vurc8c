import React from 'react';
import { Link, DollarSign, FileText, Activity, Users, Folder, GraduationCap, Grid } from 'lucide-react';

const IconGrid = () => {
  const icons = [
    { Icon: Link, label: 'Enlace de...', color: 'bg-blue-500' },
    { Icon: DollarSign, label: 'Detalles d...', color: 'bg-pink-500' },
    { Icon: FileText, label: 'Detalles d...', color: 'bg-green-500' },
    { Icon: Activity, label: 'Activo', color: 'bg-orange-500' },
    { Icon: Users, label: 'Invitar a u...', color: 'bg-yellow-500' },
    { Icon: Folder, label: 'Guía del u...', color: 'bg-red-500' },
    { Icon: GraduationCap, label: 'Mentor', color: 'bg-purple-500' },
    { Icon: Grid, label: 'Más', color: 'bg-green-500' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 my-4 md:grid-cols-2 lg:grid-cols-4">
      {icons.map(({ Icon, label, color }, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={`${color} p-3 rounded-full`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs mt-1 text-center">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;