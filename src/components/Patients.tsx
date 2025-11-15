import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  lastVisit: string;
  status: 'active' | 'inactive';
}

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const patients: Patient[] = [
    {
      id: 1,
      name: 'Петров Иван Сергеевич',
      age: 45,
      gender: 'М',
      phone: '+7 (999) 123-45-67',
      email: 'petrov@example.com',
      lastVisit: '2024-11-14',
      status: 'active',
    },
    {
      id: 2,
      name: 'Сидорова Анна Петровна',
      age: 32,
      gender: 'Ж',
      phone: '+7 (999) 234-56-78',
      email: 'sidorova@example.com',
      lastVisit: '2024-11-14',
      status: 'active',
    },
    {
      id: 3,
      name: 'Козлов Дмитрий Александрович',
      age: 28,
      gender: 'М',
      phone: '+7 (999) 345-67-89',
      email: 'kozlov@example.com',
      lastVisit: '2024-11-13',
      status: 'active',
    },
    {
      id: 4,
      name: 'Морозова Елена Викторовна',
      age: 51,
      gender: 'Ж',
      phone: '+7 (999) 456-78-90',
      email: 'morozova@example.com',
      lastVisit: '2024-11-13',
      status: 'active',
    },
    {
      id: 5,
      name: 'Волков Алексей Игоревич',
      age: 38,
      gender: 'М',
      phone: '+7 (999) 567-89-01',
      email: 'volkov@example.com',
      lastVisit: '2024-11-10',
      status: 'inactive',
    },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Пациенты</h2>
          <p className="text-muted-foreground">Управление базой пациентов</p>
        </div>
        <Button className="gap-2">
          <Icon name="Plus" size={20} />
          Новый пациент
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Поиск пациентов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPatients.map((patient) => (
              <Dialog key={patient.id}>
                <DialogTrigger asChild>
                  <div
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-primary" size={28} />
                      </div>
                      <div>
                        <p className="font-medium text-lg">{patient.name}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{patient.age} лет</span>
                          <span>•</span>
                          <span>{patient.gender}</span>
                          <span>•</span>
                          <span>{patient.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={patient.status === 'active' ? 'default' : 'secondary'}>
                        {patient.status === 'active' ? 'Активен' : 'Неактивен'}
                      </Badge>
                      <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Карточка пациента</DialogTitle>
                    <DialogDescription>Подробная информация о пациенте</DialogDescription>
                  </DialogHeader>
                  {selectedPatient && (
                    <div className="space-y-6 pt-4">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" className="text-primary" size={40} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{selectedPatient.name}</h3>
                          <p className="text-muted-foreground">ID: {selectedPatient.id}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Возраст</p>
                          <p className="font-medium">{selectedPatient.age} лет</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Пол</p>
                          <p className="font-medium">
                            {selectedPatient.gender === 'М' ? 'Мужской' : 'Женский'}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Телефон</p>
                          <p className="font-medium">{selectedPatient.phone}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{selectedPatient.email}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Последний визит</p>
                          <p className="font-medium">{selectedPatient.lastVisit}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Статус</p>
                          <Badge variant={selectedPatient.status === 'active' ? 'default' : 'secondary'}>
                            {selectedPatient.status === 'active' ? 'Активен' : 'Неактивен'}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1">
                          <Icon name="FileText" size={20} className="mr-2" />
                          Открыть медкарту
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Edit" size={20} className="mr-2" />
                          Редактировать
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
