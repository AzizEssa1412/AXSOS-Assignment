from django.db import models

# Create your models here.

class Show(models.Model):
    title = models.CharField(max_length=30)
    netwark = models.CharField(max_length=30)
    date = models.DateTimeField()
    desc = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    delet_at = models.DateTimeField(auto_now=True)
    

def create_show(postdata):
    return Show.objects.create(title =postdata['title'],netwark= postdata['Netwerk'],date=postdata["Date"],desc=postdata['Descripction'])


def all_shows():
    return Show.objects.all()