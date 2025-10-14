from django.shortcuts import render , redirect
from . import models

# Create your views here.

def index(request):
    dojos = models.get_all_dojos()
    context = {
        'dojos': dojos
    }
    return render(request,"index.html",context)



def add_dojo(request):
    
    temp = models.add_dojo(request.POST)
    return redirect('/')


def add_ninjas(request):
    first_name = request.POST['fname']
    last_name = request.POST['lname']
    dojo_id = request.POST['dojo_select']
    dojo = models.get_dojo(dojo_id)
    models.create_ninjas(first_name,last_name,dojo)
    return redirect('/')


