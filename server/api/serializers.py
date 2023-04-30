from rest_framework import serializers
from core.models import Category, SpecialDay


class SpecialDaySerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['month'] = instance.month - 1
        return representation

    class Meta:
        model = SpecialDay
        fields = ('title', 'description', 'month',
                  'day', 'year', 'highlight_color')


class CategorySerializer(serializers.ModelSerializer):
    special_days = SpecialDaySerializer(many=True)

    class Meta:
        model = Category
        fields = ('name', 'special_days')
