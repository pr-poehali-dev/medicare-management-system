import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Настройки</h2>
        <p className="text-muted-foreground">Управление системой и профилем</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Профиль врача</CardTitle>
            <CardDescription>Обновите личную информацию</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя</Label>
                <Input id="firstName" placeholder="Петр" defaultValue="Петр" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия</Label>
                <Input id="lastName" placeholder="Иванов" defaultValue="Иванов" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Специальность</Label>
              <Input id="specialty" placeholder="Терапевт" defaultValue="Терапевт" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="doctor@hospital.ru" defaultValue="doctor@hospital.ru" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" defaultValue="+7 (999) 123-45-67" />
              </div>
            </div>
            <Button className="w-full">
              <Icon name="Save" size={20} className="mr-2" />
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
            <CardDescription>Настройте предпочтения уведомлений</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email уведомления</Label>
                <p className="text-sm text-muted-foreground">Получать уведомления о новых пациентах</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Напоминания о приемах</Label>
                <p className="text-sm text-muted-foreground">Уведомления за 15 минут до приема</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Экстренные случаи</Label>
                <p className="text-sm text-muted-foreground">Немедленные уведомления о срочных пациентах</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Система</CardTitle>
            <CardDescription>Общие настройки системы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Темная тема</Label>
                <p className="text-sm text-muted-foreground">Использовать темную цветовую схему</p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Автосохранение</Label>
                <p className="text-sm text-muted-foreground">Автоматически сохранять изменения в картах</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Язык системы</Label>
              <Input defaultValue="Русский" disabled />
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Опасная зона</CardTitle>
            <CardDescription>Необратимые действия с данными</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Экспорт данных</Label>
              <p className="text-sm text-muted-foreground mb-2">Экспортировать все медицинские записи в PDF</p>
              <Button variant="outline" className="w-full">
                <Icon name="Download" size={20} className="mr-2" />
                Экспортировать данные
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label className="text-destructive">Архивирование старых записей</Label>
              <p className="text-sm text-muted-foreground mb-2">Архивировать записи старше 5 лет</p>
              <Button variant="destructive" className="w-full">
                <Icon name="Archive" size={20} className="mr-2" />
                Архивировать
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
