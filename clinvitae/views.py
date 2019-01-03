from django.shortcuts import render
from clinvitae.models import Table1
from django.shortcuts import render_to_response

def view_home_page(request):
    data = Table1.objects.all()
    print(data)
    # for d in data:
    #     print(str(d.last_updated))
    args = {'table1':data}
    return render(request, 'index.html', args)