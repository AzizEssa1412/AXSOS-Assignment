from django.shortcuts import render,redirect
from . import models
# Create your views here.

def index(request):
    context={
        "shows":models.all_shows()
    }
    return render(request,'index.html',context)

def showe(request):
    return render(request,'show.html')

def add_showe(request):
    if request.method=="POST":
        # title=request.POST['title']
        # network=request.POST['Network']
        # date=request.POST['date']
        # desc=request.POST['Descripction']
        show =models.create_show(request.POST)
        return redirect('/')
        



class Solution(object):
    def numberGame(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums.sort()  
        arr = []
        for i in range(0, len(nums), 2):
            alice_removed = nums[i]
            bob_removed = nums[i+1]
        
            arr.append(bob_removed)
            arr.append(alice_removed)
        return arr



