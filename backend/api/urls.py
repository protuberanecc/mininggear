from django.urls import path
from . import views

urlpatterns = [
    path('faq/', views.FAQView.as_view()),
    path('asics/', views.AsicView.as_view()),
    path('asics/<slug:slug>/', views.AsicDetailView.as_view()),
    path('brands/', views.BrandView.as_view()),
    path('coins/', views.CoinView.as_view()),
    path('algos/', views.AlgoView.as_view()),
    path('blog/', views.NewsView.as_view()),
    path('blog/<slug:slug>/', views.NewsDetailView.as_view()),
    path('contact/', views.ContactView.as_view())
]