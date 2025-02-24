from django.http import JsonResponse
from .models import Transaction

def get_transactions(request):
    data = list(Transaction.objects.values())  # トランザクションデータをリスト化
    return JsonResponse({"transactions": data})
