from rest_framework import serializers
from core.models import Category, SpecialDay


class SpecialDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialDay
        fields = ('title', 'description', 'month', 'day', 'highlight_color')


class CategorySerializer(serializers.ModelSerializer):
    special_days = SpecialDaySerializer(many=True)

    class Meta:
        model = Category
        fields = ('name', 'special_days')
