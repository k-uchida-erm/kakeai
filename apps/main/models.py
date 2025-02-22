from django.db import models
from django.contrib.auth.models import User  # Djangoのユーザーモデルを利用

class Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # ユーザーごとのカテゴリ
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=0)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(blank=True)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount}円"

class AnalysisResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    summary = models.TextField()
    suggestions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Analysis for {self.user.username} at {self.created_at}"
