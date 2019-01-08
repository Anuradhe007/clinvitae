from django.shortcuts import render
from clinvitae.models import Table1


def view_home_page(request):
    data = Table1.objects.all()

    args = {'table1': data}
    return render(request, 'index.html', args)
