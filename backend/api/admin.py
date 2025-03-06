from django.contrib import admin
from .models import Faq, Asic, Brand, Coin, Algo, News, NewsSection, Paragraph, Contact, TelegramManagers

class AsicAdmin(admin.ModelAdmin):
    list_display = ('title', )
    prepopulated_fields = {'slug': ('full_title',)}


class BrandAdmin(admin.ModelAdmin):
    list_display = ('title', )
    prepopulated_fields = {'slug': ('title',)}


class CoinAdmin(admin.ModelAdmin):
    list_display = ('title', )
    prepopulated_fields = {'slug': ('api_title',)}


class AlgoAdmin(admin.ModelAdmin):
    list_display = ('title', )
    prepopulated_fields = {'slug': ('title',)}


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', )
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Faq)
admin.site.register(NewsSection)
admin.site.register(Paragraph)
admin.site.register(Contact)
admin.site.register(TelegramManagers)
admin.site.register(Asic, AsicAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Coin, CoinAdmin)
admin.site.register(Algo, AlgoAdmin)
admin.site.register(News, NewsAdmin)

