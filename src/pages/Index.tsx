import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([])
  
  const addToCart = (product: {id: number, name: string, price: number}) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        )
      }
      return [...prev, {...product, quantity: 1}]
    })
  }

  const products = [
    {id: 1, name: 'Липовый мёд', price: 800, description: 'Натуральный мёд с липовых деревьев'},
    {id: 2, name: 'Гречишный мёд', price: 900, description: 'Тёмный мёд с гречишных полей'},
    {id: 3, name: 'Цветочный мёд', price: 750, description: 'Разнотравье луговых цветов'},
    {id: 4, name: 'Пчелиная пыльца', price: 1200, description: 'Суперфуд для здоровья'},
    {id: 5, name: 'Прополис', price: 1500, description: 'Природный антибиотик'},
    {id: 6, name: 'Соты с мёдом', price: 1000, description: 'Натуральные восковые соты'}
  ]

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Покупаю мёд уже 2 года. Качество превосходное! Дети едят с удовольствием, а я спокойна за их здоровье.',
      rating: 5
    },
    {
      name: 'Михаил Иванов', 
      text: 'Заказывал липовый мёд для всей семьи. Вкус настоящий, деревенский. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      text: 'Отличная ферма! Видно, что люди работают с душой. Мёд густой, ароматный, без примесей.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Hexagon" className="text-orange-500" size={32} />
            <span className="text-2xl font-bold text-amber-900">ЭКОМЁД</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-orange-500 transition-colors">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">О ферме</a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors">Продукция</a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Icon name="ShoppingCart" className="text-gray-700" size={24} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
                Натуральный
                <span className="text-orange-500 block">ЭКО-МЁД</span>
                прямо с пасеки
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                100% натуральный мёд без химикатов и добавок. 
                Собрано с любовью на экологически чистой пасеке в Подмосковье.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span className="text-gray-700">Без химикатов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span className="text-gray-700">Эко-сертификат</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span className="text-gray-700">Прямо с пасеки</span>
                </div>
              </div>
              
              {/* Contact Form */}
              <Card className="mt-8 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-600">Получить консультацию</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Textarea placeholder="Вопрос о продукции..." />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src="/img/5509aef8-85bb-4cc3-b455-8676d27ff67d.jpg" 
                alt="Пчеловод с сотами"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">15+ лет опыта</p>
                    <p className="text-sm text-gray-600">в пчеловодстве</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Farm Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Преимущества нашей фермы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы следуем принципам экологического пчеловодства и заботимся о здоровье наших пчёл
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Leaf" className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">100% ЭКО</h3>
                <p className="text-gray-600">Никаких химикатов и искусственных добавок</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="MapPin" className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Чистая природа</h3>
                <p className="text-gray-600">Пасека расположена вдали от дорог и заводов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Heart" className="text-red-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">С заботой</h3>
                <p className="text-gray-600">Бережное отношение к пчёлам и их здоровью</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Truck" className="text-orange-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Доставляем свежий мёд по всей России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-gray-600">Выберите натуральные продукты пчеловодства</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-t-lg flex items-center justify-center">
                  <Icon name="Hexagon" className="text-orange-500" size={64} />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{product.price}₽</span>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <img 
              src="/img/e57c489c-de86-4705-bdd8-3e3e08244a95.jpg" 
              alt="Продукция пчеловодства"
              className="rounded-2xl shadow-lg max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нашем мёде</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" className="text-orange-500" size={20} />
                    </div>
                    <span className="font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы попробовать натуральный мёд?</h2>
          <p className="text-xl mb-8 opacity-90">Оставьте заявку и получите скидку 10% на первый заказ</p>
          
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Получить скидку 10%
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Как нас найти</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" className="text-orange-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Адрес пасеки</h3>
                  <p className="text-gray-600">Московская область, Серпуховский район</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Phone" className="text-orange-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Mail" className="text-orange-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@ecohoney.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Clock" className="text-orange-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно с 9:00 до 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="text-orange-500 mx-auto mb-4" size={64} />
                <p className="text-gray-600">Карта будет здесь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hexagon" className="text-orange-500" size={24} />
                <span className="text-xl font-bold">ЭКОМЁД</span>
              </div>
              <p className="text-amber-200">Натуральные продукты пчеловодства с заботой о природе</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Липовый мёд</li>
                <li>Гречишный мёд</li>
                <li>Цветочный мёд</li>
                <li>Пчелиная пыльца</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-amber-200">
                <li>О ферме</li>
                <li>Доставка</li>
                <li>Гарантии качества</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-amber-200">
                <p>+7 (999) 123-45-67</p>
                <p>info@ecohoney.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Instagram" size={20} />
                  <Icon name="Facebook" size={20} />
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 ЭКОМЁД. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}