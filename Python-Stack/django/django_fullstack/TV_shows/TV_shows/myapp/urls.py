from django.urls import path , include
from . import views

urlpatterns = [
    path('',views.index),
    path('showe/new',views.showe),
    path('new_show',views.add_showe),
]
