from django.db import models

class Table1(models.Model):
    gene = models.CharField(max_length = 50)
    nucleotide_change = models.CharField(max_length = 1000, null=True)
    protein_change = models.CharField(max_length = 1000, null=True)
    alias = models.CharField(max_length = 1000, null=True)
    region = models.CharField(max_length = 1000, null=True)
    reported_classification = models.CharField(max_length = 1000, null=True)
    last_evaluated = models.DateTimeField(null=True)
    last_updated = models.DateTimeField(null=True)
    more_info = models.CharField(max_length=1000, null=True)

class Table2(models.Model):
    table1 = models.ForeignKey(Table1, on_delete=models.CASCADE)
    sub_nucleotide_change = models.CharField(max_length = 1000, null=True)