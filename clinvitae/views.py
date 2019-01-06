from django.shortcuts import render
from clinvitae.models import Table1
from django.shortcuts import render_to_response

def view_home_page(request):
    data = Table1.objects.all()
    gene_list = set()
    classification_list = set()
    for d in data:
        gene_list.add(d.gene)
        classification_list.add(d.reported_classification)

    args = {'table1':data, 'gene_filter':list(gene_list), 'nucleotide_filter':list(classification_list)}
    return render(request, 'index.html', args)