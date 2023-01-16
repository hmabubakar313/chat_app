from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('',views.chat,name='chat'),
    path('room/<str:room_name>/',views.room,name='room')
    
]
