from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add_doj', views.add_dojo),
    path('add_ninj', views.add_ninjas),
]