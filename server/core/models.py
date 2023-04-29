from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class SpecialDay(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='special_days')
    title = models.CharField(max_length=100)
    description = models.TextField()
    year = models.PositiveIntegerField(default=1900)
    month = models.PositiveSmallIntegerField()
    day = models.PositiveSmallIntegerField()
    highlight_color = models.CharField(max_length=100)

    def __str__(self):
        return self.title
