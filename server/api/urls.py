from django.urls import path
from api.views import CategoryList

urlpatterns = [
    path('special_days/', CategoryList.as_view(), name='category-list'),
]
