"""untitled URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from server import views

urlpatterns = [
    path('admin/', views.index),
    path('process/', views.getProcess),
    path('orUnpack/', views.onOrUnpack),
    path('adUnpack/', views.onAdUnpack),
    path('orJavaHook/', views.onOrJavaHook),
    path('orNativeHook/', views.onOrNativeHook),
    path('hookinfo/', views.getHookInfo),
    path('androidTrace/', views.onAndroidTrace),
    path('adJavaHook/', views.onAdJavaHook),
    path('adNativeHook/', views.onAdNativeHook),
    path('iosFuncHook/', views.onIosFuncHook),
    path('enmuModules/', views.enmuModules),
    path('findModuleByName/', views.findModuleByName),
    path('enumerateImports/', views.enumerateImports),
    path('enumerateExports/', views.enumerateExports),
    path('findExportByName/', views.findExportByName),
    path('findBaseAddress/', views.findBaseAddress),
    path('enumerateLoadedClasses/', views.enumerateLoadedClasses),
    path('enumerateClassLoaders/', views.enumerateClassLoaders)
]
