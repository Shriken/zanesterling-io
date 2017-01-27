from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

# Create your views here.
def index(request):
    context = {}
    return render(request, 'info_page/index.html', context)
