import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [cartItems, setCartItems] = useState<{[key: string]: number}>({})
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const addToCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const products = [
    {
      id: 1,
      name: 'Липовый мёд',
      price: 1200,
      image: '/img/e0abc1aa-6832-420b-9ae5-7cfa61ab96d4.jpg',
      description: 'Натуральный мёд из цветков липы, собранный в экологически чистых районах',
      weight: '500г'
    },
    {
      id: 2,
      name: 'Гречишный мёд',
      price: 1400,
      image: '/img/e0abc1aa-6832-420b-9ae5-7cfa61ab96d4.jpg',
      description: 'Тёмный мёд с богатым вкусом и высоким содержанием железа',
      weight: '500г'
    },
    {
      id: 3,
      name: 'Прополис',
      price: 800,
      image: '/img/e0abc1aa-6832-420b-9ae5-7cfa61ab96d4.jpg',
      description: 'Натуральный прополис для укрепления иммунитета',
      weight: '20г'
    },
    {
      id: 4,
      name: 'Пчелиная пыльца',
      price: 1000,
      image: '/img/e0abc1aa-6832-420b-9ae5-7cfa61ab96d4.jpg',
      description: 'Богатая витаминами и минералами пчелиная пыльца',
      weight: '100г'
    }
  ]

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Замечательный мёд! Покупаю уже третий раз. Качество превосходное, вкус настоящий. Рекомендую всем!',
      date: '2 недели назад'
    },
    {
      name: 'Сергей Иванов',
      rating: 5,
      text: 'Отличная продукция! Особенно понравился липовый мёд. Видно, что пчёлы содержатся в экологически чистых условиях.',
      date: '1 месяц назад'
    },
    {
      name: 'Мария Сидорова',
      rating: 5,
      text: 'Прополис помог укрепить иммунитет всей семьи. Очень довольны качеством и быстрой доставкой.',
      date: '3 недели назад'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Навигация */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="text-amber-600" size={32} />
              <span className="text-xl font-bold text-green-800">ЭкоПасека</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
                О ферме
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Продукция
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Контакты
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {Object.keys(cartItems).length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs">
                    {Object.values(cartItems).reduce((sum, count) => sum + count, 0)}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-green-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-amber-600 text-white mb-4">100% Экологически чистый продукт</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Натуральный мёд
                <span className="text-amber-600 block">без химикатов</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Прямо с нашей семейной пасеки. Более 20 лет опыта в экологическом пчеловодстве. 
                Получите консультацию по выбору мёда для вашего здоровья.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => scrollToSection('consultation')}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  onClick={() => scrollToSection('products')}
                >
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Посмотреть продукцию
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="/img/4db7df38-f7da-449a-b03d-c9ee383532cf.jpg"
                alt="Пчеловод с рамкой"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Award" className="text-amber-600" size={20} />
                  <span className="font-semibold text-gray-900">Сертифицированная продукция</span>
                </div>
                <p className="text-sm text-gray-600">Соответствует стандартам органического производства</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма консультации */}
      <section id="consultation" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Получить консультацию по мёду</h2>
            <p className="text-lg text-gray-600">Наш пчеловод поможет выбрать идеальный мёд для ваших потребностей</p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Бесплатная консультация</CardTitle>
              <CardDescription className="text-center">
                Расскажите о своих предпочтениях, и мы подберём лучший мёд для вас
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email (необязательно)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Расскажите о ваших потребностях</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Например: нужен мёд для укрепления иммунитета, есть аллергии..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* О ферме */}
      <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша эко-ферма</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 20 лет мы занимаемся экологическим пчеловодством в экологически чистых районах
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/img/d11a0d8a-f5dd-4fc9-a3a1-3efa53eb335c.jpg"
                alt="Эко-ферма"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Преимущества нашей фермы</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon name="Leaf" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">100% экологически чистое производство</h4>
                    <p className="text-gray-600">Никаких химикатов, антибиотиков и искусственных добавок</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Icon name="MapPin" className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Удалённость от промышленных зон</h4>
                    <p className="text-gray-600">Пасека расположена в 150 км от ближайшего города</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="Award" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Сертификаты качества</h4>
                    <p className="text-gray-600">Вся продукция имеет сертификаты органического производства</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Icon name="Heart" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Забота о пчёлах</h4>
                    <p className="text-gray-600">Обеспечиваем естественные условия жизни пчелиных семей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Продукция */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-gray-600">Натуральные продукты пчеловодства для вашего здоровья</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">ЭКО</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-amber-600">{product.price}₽</span>
                    <span className="text-sm text-gray-500">{product.weight}</span>
                  </div>
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => addToCart(product.id)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нашей продукции</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-amber-400 fill-current" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Повторная заявка */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Остались вопросы?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Свяжитесь с нами для получения подробной консультации
          </p>
          <Button 
            size="lg" 
            className="bg-white text-amber-600 hover:bg-amber-50"
            onClick={() => scrollToSection('consultation')}
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Как с нами связаться</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-amber-600" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 mb-2">+7 (800) 555-01-23</p>
                <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-green-600" size={32} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 mb-2">info@ekopaseka.ru</p>
                <p className="text-gray-600">Ответим в течение 2 часов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-blue-600" size={32} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 mb-2">Тульская область</p>
                <p className="text-gray-600">Экологически чистый район</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hexagon" className="text-amber-400" size={32} />
                <span className="text-xl font-bold">ЭкоПасека</span>
              </div>
              <p className="text-gray-400">
                Натуральные продукты пчеловодства от семейной фермы с 20-летним опытом
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Мёд натуральный</li>
                <li>Прополис</li>
                <li>Пчелиная пыльца</li>
                <li>Воск пчелиный</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О ферме</li>
                <li>Сертификаты</li>
                <li>Доставка</li>
                <li>Оплата</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 555-01-23</p>
                <p>info@ekopaseka.ru</p>
                <p>Тульская область</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЭкоПасека. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}