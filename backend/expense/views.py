from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Expense
from .serializers import ExpenseSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all() #for drf basename
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        request.data["user"] = request.user.id  # Attach user
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success", "data": serializer.data, "message": "Expense added successfully.", "status_code": 201, "additional_message": []},
                status=status.HTTP_201_CREATED
            )
        return Response(
            {"status": "error", "message": "Invalid data", "errors": serializer.errors, "status_code": 400},
            status=status.HTTP_400_BAD_REQUEST
        )

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(
            {"status": "success", "data": serializer.data, "message": "Expenses fetched successfully.", "status_code": 200, "additional_message": []},
            status=status.HTTP_200_OK
        )
