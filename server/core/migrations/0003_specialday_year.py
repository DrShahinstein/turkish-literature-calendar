# Generated by Django 4.2 on 2023-04-29 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_specialday_delete_day'),
    ]

    operations = [
        migrations.AddField(
            model_name='specialday',
            name='year',
            field=models.PositiveIntegerField(default=1900),
        ),
    ]