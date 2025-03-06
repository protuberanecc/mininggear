from django.db import models


class NewsManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(published=True)


class Faq(models.Model):
    title = models.CharField('Вопрос', max_length=250)
    description = models.TextField('Описание вопроса')
    title_en = models.CharField('Вопрос на EN', max_length=250, blank=True)
    description_en = models.TextField('Описание вопроса на EN', blank=True)
    title_uk = models.CharField('Вопрос на UK', max_length=250, blank=True)
    description_uk = models.TextField('Описание вопроса на UK', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-pk']


class Brand(models.Model):
    title = models.CharField('Название бренда', max_length=250)
    slug = models.SlugField('URL', unique=True)

    def __str__(self):
        return self.title


class Coin(models.Model):
    title = models.CharField('Название монеты', max_length=250)
    api_title= models.CharField('Например bitcoin', max_length=250, blank=True)
    slug = models.SlugField('URL', unique=True)

    def __str__(self):
        return self.title


class Algo(models.Model):
    title = models.CharField('Название алгоритма', max_length=250)
    slug = models.SlugField('URL', unique=True)

    def __str__(self):
        return self.title


class Asic(models.Model):
    full_title = models.CharField('Полное название', max_length=250)
    title = models.CharField('Краткое название', max_length=250)
    hash = models.IntegerField('Хэшрейт')

    CHOICE_HASH = [
        ('Th', 'Th/s'),
        ('Gh', 'Gh/s'),
        ('Mh', 'Mh/s')
    ]

    hash_title = models.CharField('Единица хеша', choices=CHOICE_HASH, max_length=2)
    power = models.IntegerField('Потребление')
    price_usdt = models.DecimalField('Стоимость в usdt', max_digits=10, decimal_places=0)
    algo = models.CharField('Алгоритм', max_length=250)
    algo_key = models.ForeignKey(Algo, on_delete=models.CASCADE, verbose_name='АЛГОРИТМ', default=1)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, verbose_name='Бренд')
    coin = models.ForeignKey(Coin, on_delete=models.CASCADE, verbose_name='Монета')
    hash_unit = models.CharField('Написать что то одно: TH/s | GH/s | MH/s', max_length=4, blank=True)
    multiplier = models.FloatField('Множитель', default=1.0, blank=True)
    hot = models.BooleanField('Горячее предложение', default=False)
    btc = models.BooleanField('Асик на биткоин?', default=True)
    popular = models.BooleanField('Популярный асик', default=False)
    home_mining = models.BooleanField('Домашний асик', default=False)
    classic = models.BooleanField('Проверенная классика', default=False)
    profitable = models.BooleanField('Наибольшая доходность', default=False)
    image = models.ImageField('Фото', upload_to='asics_main_photo/', blank=True)
    slug = models.SlugField('URL', unique=True)



    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-pk']






class Paragraph(models.Model):
    text = models.TextField('Текст')
    text_en = models.TextField('Текст на EN', blank=True)
    text_uk = models.TextField('Текст на UK', blank=True)
    img = models.ImageField('Фото в кoHце параграфа', upload_to='news/news_detail/', blank=True)

    def __str__(self):
        return 'Параграф'


class NewsSection(models.Model):
    title = models.CharField('Заголовок параграфа', max_length=250)
    title_en = models.CharField('Заголовок параграфа на EN', max_length=250, blank=True)
    title_uk = models.CharField('Заголовок параграфа на UK', max_length=250, blank=True)
    paragraph = models.ManyToManyField(Paragraph, verbose_name='Параграфы')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Параграф для новоти'
        verbose_name_plural = 'Параграфы для новости'
        ordering = ['pk']


class News(models.Model):
    title = models.CharField('Заголовок новости', max_length=250)
    title_en = models.CharField('Заголовок новости на EN', max_length=250, blank=True)
    title_uk = models.CharField('Заголовок новости на UK', max_length=250, blank=True)
    description = models.TextField('Предисловие (небольшое)', blank=True)
    description_en = models.TextField('Предисловие (небольшое) на EN', blank=True)
    description_uk = models.TextField('Предисловие (небольшое) на UK', blank=True)
    img = models.ImageField('Основное фото', upload_to='news/')
    img_en = models.ImageField('Основное фото на EN', upload_to='news/en/', blank=True)
    img_uk = models.ImageField('Основное фото на UK', upload_to='news/ru/', blank=True)
    sections = models.ManyToManyField(NewsSection, verbose_name='Секции с параграфами')
    date = models.DateTimeField('Дата публикации', auto_now_add=True)
    published = models.BooleanField('Опубликованна?', default=True)
    slug = models.SlugField('URL', unique=True)

    objects = models.Manager()
    publish = NewsManager()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-pk']


class TelegramManagers(models.Model):
    title = models.CharField('Ник в тг (@nickname)', max_length=200)
    link = models.CharField('Ссылка на аккаунт менеджера', max_length=200)

    def __str__(self):
        return self.title


class Contact(models.Model):
    facebook = models.CharField('Ссылка на Facebook', max_length=200)
    instagram = models.CharField('Ссылка на Instagram', max_length=200)
    telegram = models.CharField('Ссылка на Telegram', max_length=200)
    olx = models.CharField('Ссылка на OLX', max_length=200, blank=True)
    price_list = models.CharField('Ссылка на прайс лист (google table)', max_length=250, blank=True)
    mail = models.CharField('Почта', max_length=200)
    managers = models.ManyToManyField(TelegramManagers, verbose_name='Менеджеры')
    phone = models.CharField('Телефон', max_length=50)
    address = models.CharField('Адрес', max_length=200)
    img = models.ImageField('Фото с гугл карт(или других карт)', upload_to='contacts/')

    def __str__(self):
        return 'Контактная информация'

    class Meta:
        verbose_name = 'Контакты'
        verbose_name_plural = 'Контакты'



