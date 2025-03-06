from django.shortcuts import render
from .serializers import SerializerFAQ, SerializerAsic, SerializerBrand, SerializerCoin, SerializerAlgo, SerializerNews, SerializerNewsSection, SerializerParagraph, SerializerContact
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Faq, Asic, Brand, Coin, Algo, News, NewsSection, Paragraph, Contact


class FAQView(APIView):
    def get(self, request):
        faq = Faq.objects.all()
        serializer = SerializerFAQ(faq, many=True)
        return Response(serializer.data)


class AsicView(APIView):
    def get(self, request):
        asic = Asic.objects.all()
        serializer = SerializerAsic(asic, many=True)
        return Response(serializer.data)


class AsicDetailView(APIView):
    def get(self, request, slug):
        asic = get_object_or_404(Asic, slug=slug)
        serializer = SerializerAsic(asic)
        return Response(serializer.data)


class BrandView(APIView):
    def get(self, request):
        brand = Brand.objects.all()
        serializer = SerializerBrand(brand, many=True)
        return Response(serializer.data)


class CoinView(APIView):
    def get(self, request):
        coin = Coin.objects.all()
        serializer = SerializerCoin(coin, many=True)
        return Response(serializer.data)


class AlgoView(APIView):
    def get(self, request):
        algo = Algo.objects.all()
        serializer = SerializerAlgo(algo, many=True)
        return Response(serializer.data)


class NewsView(APIView):
    def get(self, request):
        news = News.publish.all()
        serializer = SerializerNews(news, many=True)
        return Response(serializer.data)


class NewsDetailView(APIView):
    def get(self, request, slug):
        news = get_object_or_404(News, slug=slug)
        serializer = SerializerNews(news)
        return Response(serializer.data)


class ContactView(APIView):
    def get(self, request):
        contact = Contact.objects.all()
        serializer = SerializerContact(contact, many=True)
        return Response(serializer.data)


