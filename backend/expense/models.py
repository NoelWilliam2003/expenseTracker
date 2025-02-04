from django.db import models
from django.contrib.auth.models import User

class Expense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link expense to a user
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    date = models.DateField()
    shared_with = models.ManyToManyField(User, related_name="shared_expenses", blank=True)

    def __str__(self):
        return f"{self.category} - {self.amount}"
