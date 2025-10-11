from django.http import HttpResponse
from django.shortcuts import render
from time import gmtime  , strftime
# Create your views here.
def index(request):
    context = {
        "time": strftime(strftime("%B %D,%Y %I:%m %p"))
    }
    return render(request,'index.html',context)
