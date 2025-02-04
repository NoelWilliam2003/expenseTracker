from rest_framework import serializers
from .models import Expense

class ExpenseSerializer(serializers.ModelSerializer):
    shared_with = serializers.SerializerMethodField()

    class Meta:
        model = Expense
        fields = ['id', 'amount', 'category', 'date', 'shared_with']

    def get_shared_with(self, obj):
        return [user.email for user in obj.shared_with.all()]