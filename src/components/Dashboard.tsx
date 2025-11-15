import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Dashboard() {
  const stats = [
    {
      title: 'Всего пациентов',
      value: '1,247',
      change: '+12%',
      icon: 'Users',
      color: 'bg-blue-500',
    },
    {
      title: 'Приемов сегодня',
      value: '23',
      change: '+5%',
      icon: 'Calendar',
      color: 'bg-green-500',
    },
    {
      title: 'В ожидании',
      value: '8',
      change: '-2%',
      icon: 'Clock',
      color: 'bg-yellow-500',
    },
    {
      title: 'Завершено',
      value: '15',
      change: '+8%',
      icon: 'CheckCircle',
      color: 'bg-primary',
    },
  ];

  const recentPatients = [
    { id: 1, name: 'Петров Иван Сергеевич', age: 45, lastVisit: '2024-11-14', diagnosis: 'Гипертония' },
    { id: 2, name: 'Сидорова Анна Петровна', age: 32, lastVisit: '2024-11-14', diagnosis: 'Профилактический осмотр' },
    { id: 3, name: 'Козлов Дмитрий Александрович', age: 28, lastVisit: '2024-11-13', diagnosis: 'ОРВИ' },
    { id: 4, name: 'Морозова Елена Викторовна', age: 51, lastVisit: '2024-11-13', diagnosis: 'Диабет 2 типа' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Дашборд</h2>
        <p className="text-muted-foreground">Обзор медицинской системы</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`${stat.color} p-2 rounded-lg`}>
                <Icon name={stat.icon} className="text-white" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> от прошлого месяца
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Недавние пациенты</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">Возраст: {patient.age} лет</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{patient.diagnosis}</p>
                  <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
