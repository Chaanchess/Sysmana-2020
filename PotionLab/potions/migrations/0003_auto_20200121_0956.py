# Generated by Django 2.0 on 2020-01-21 09:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('potions', '0002_potion_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='potion',
            name='user',
        ),
        migrations.AddField(
            model_name='potion',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='owner', to=settings.AUTH_USER_MODEL),
        ),
    ]
