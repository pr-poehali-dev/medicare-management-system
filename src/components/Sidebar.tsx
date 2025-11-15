import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'patients', label: 'Пациенты', icon: 'Users' },
    { id: 'records', label: 'Медкарты', icon: 'FileText' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-border min-h-screen p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Heart" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">MedSystem</h1>
            <p className="text-xs text-muted-foreground">Электронные карты</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className="w-full justify-start gap-3"
            onClick={() => onTabChange(item.id)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-secondary p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="User" className="text-primary" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Доктор Иванов</p>
              <p className="text-xs text-muted-foreground">Терапевт</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
