from django.shortcuts import render,redirect,HttpResponse
from .models import *
# Create your views here.

def index(request):
    context = {
        'books': get_all_books()
    }
    return render(request, 'book.html',context)

def books(request,book_id):
    now_book = get_book_by_id(book_id)
    context = {
        'now_book': now_book,
        'authors': get_all_authors(),
    }
    return render(request, 'view_book.html',context)

def batata(request):
    return HttpResponse ("welcome to batata")

def add_book(request):
    if request.method=="POST":

        title = request.POST['title']  
        desc = request.POST['description']  
        create_book(title,desc)
        return redirect('/')
    return redirect('/batata')

def add_author_book(request):
    bok_id = request.POST['book_id']
    now_book = get_book_by_id(request.POST['book_id'])
    now_author = get_author_by_id(request.POST['author'])
    connect_book(now_author,now_book)
    return redirect(f'/books/{bok_id}')


def authors(request):
    context = {
        'authors': get_all_authors()
    }
    return render(request, 'authors.html', context)

def author_details(request,author_id):
    now_author = get_author_by_id(author_id)
    context = {
        'now_author': now_author,
        'books': get_all_books()
    }
    return render(request, 'author_details.html', context)

def add_an_author(request):
    first_name = request.POST['fname']
    last_name = request.POST['lname']
    notes = request.POST['notes']
    create_author(first_name,last_name,notes)
    return redirect('/author')

def add_book_to_author(request):
    auth_id = request.POST['author_id']
    now_book = get_book_by_id(request.POST['book'])
    now_author = get_author_by_id(auth_id)
    connect_author(now_author,now_book)
    return redirect(f'/authors/{auth_id}')