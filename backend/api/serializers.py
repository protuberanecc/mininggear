from rest_framework import serializers
from .models import Faq, Brand, Coin, Asic, Algo, News, NewsSection, Paragraph, Contact


class SerializerFAQ(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = '__all__'


class SerializerBrand(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('title', 'slug', 'pk')


class SerializerCoin(serializers.ModelSerializer):
    class Meta:
        model = Coin
        fields = ('title', 'slug', 'pk', 'api_title')


class SerializerAlgo(serializers.ModelSerializer):
    class Meta:
        model = Algo
        fields = ('title', 'slug', 'pk')


class SerializerAsic(serializers.ModelSerializer):
    class Meta:
        model = Asic
        fields = '__all__'


class SerializerNews(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        depth = 2


class SerializerNewsSection(serializers.ModelSerializer):
    class Meta:
        model = NewsSection
        fields = ('title', 'paragraph', 'pk')


class SerializerParagraph(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = ('text', 'img', 'pk')


class SerializerContact(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        depth = 2