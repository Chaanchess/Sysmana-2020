# Generated by Django 2.0 on 2020-01-21 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('potions', '0006_auto_20200121_1011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chest',
            name='potions',
            field=models.ManyToManyField(blank=True, to='potions.Potion'),
        ),
    ]