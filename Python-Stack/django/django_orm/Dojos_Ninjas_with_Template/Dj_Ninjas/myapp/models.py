from django.db import models

# Create your models here.


class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



    # def __str__(self):
    #     return f"dojo name: {Dojo.name}, city: {Dojo.city}, state: {Dojo.state}"


class Ninja(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    dojo = models.ForeignKey(Dojo, related_name="ninjas", on_delete=models.CASCADE)


def add_dojo(context):
   return Dojo.objects.create(name=context['name'], city=context['city'], state=context['state'])

def get_all_dojos():
   return Dojo.objects.all()

# def add_ninja(ninja):
#     Ninja.objects.create(first_name = ninja['fname'], last_name = ninja['lname'], dojo = ninja['dojo'])
def delete_dojo(dojo_id):
    Dojo.objects.get(dojo_id)