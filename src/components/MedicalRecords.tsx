import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MedicalRecord {
  id: number;
  patientName: string;
  patientId: number;
  date: string;
  diagnosis: string;
  doctor: string;
  notes: string;
  medications: string[];
  status: 'completed' | 'in-progress' | 'scheduled';
}

export default function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');

  const records: MedicalRecord[] = [
    {
      id: 1,
      patientName: 'Петров Иван Сергеевич',
      patientId: 1,
      date: '2024-11-14',
      diagnosis: 'Гипертоническая болезнь II стадии',
      doctor: 'Иванов П.С.',
      notes: 'Пациент жалуется на головные боли, повышенное давление 160/100. Назначена корректировка терапии.',
      medications: ['Эналаприл 10мг 2р/день', 'Амлодипин 5мг 1р/день'],
      status: 'completed',
    },
    {
      id: 2,
      patientName: 'Сидорова Анна Петровна',
      patientId: 2,
      date: '2024-11-14',
      diagnosis: 'Профилактический осмотр',
      doctor: 'Иванов П.С.',
      notes: 'Плановый профилактический осмотр. Жалоб нет. Общее состояние удовлетворительное.',
      medications: [],
      status: 'completed',
    },
    {
      id: 3,
      patientName: 'Козлов Дмитрий Александрович',
      patientId: 3,
      date: '2024-11-13',
      diagnosis: 'ОРВИ, легкое течение',
      doctor: 'Иванов П.С.',
      notes: 'Температура 37.8, насморк, боль в горле. Рекомендовано обильное питье, постельный режим.',
      medications: ['Парацетамол 500мг при температуре', 'Назальный спрей'],
      status: 'in-progress',
    },
    {
      id: 4,
      patientName: 'Морозова Елена Викторовна',
      patientId: 4,
      date: '2024-11-13',
      diagnosis: 'Сахарный диабет 2 типа, компенсированный',
      doctor: 'Иванов П.С.',
      notes: 'Контрольный прием. Уровень глюкозы в норме. Пациентка соблюдает диету и режим приема препаратов.',
      medications: ['Метформин 850мг 2р/день', 'Глибенкламид 5мг 1р/день'],
      status: 'completed',
    },
  ];

  const filteredRecords = records.filter(
    (record) =>
      record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive'; label: string }> = {
      completed: { variant: 'default', label: 'Завершено' },
      'in-progress': { variant: 'secondary', label: 'В процессе' },
      scheduled: { variant: 'destructive', label: 'Запланировано' },
    };
    const config = variants[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Медицинские карты</h2>
          <p className="text-muted-foreground">История приемов и диагнозов</p>
        </div>
        <Button className="gap-2">
          <Icon name="Plus" size={20} />
          Новая запись
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Поиск по пациентам или диагнозам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <Card key={record.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="FileText" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{record.patientName}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {record.date} • Врач: {record.doctor}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(record.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="diagnosis" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="diagnosis">Диагноз</TabsTrigger>
                      <TabsTrigger value="notes">Заметки</TabsTrigger>
                      <TabsTrigger value="medications">Препараты</TabsTrigger>
                    </TabsList>
                    <TabsContent value="diagnosis" className="space-y-2 pt-4">
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="font-medium text-primary">{record.diagnosis}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="notes" className="space-y-2 pt-4">
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <p className="text-sm">{record.notes}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="medications" className="space-y-2 pt-4">
                      {record.medications.length > 0 ? (
                        <div className="space-y-2">
                          {record.medications.map((med, index) => (
                            <div key={index} className="bg-secondary/50 p-3 rounded-lg flex items-center gap-2">
                              <Icon name="Pill" className="text-primary" size={18} />
                              <p className="text-sm">{med}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-secondary/50 p-4 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground">Препараты не назначены</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
