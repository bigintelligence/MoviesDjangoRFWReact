# Generated by Django 4.0.5 on 2022-06-23 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='cast',
        ),
        migrations.AddField(
            model_name='movie',
            name='cast',
            field=models.ManyToManyField(to='movies.actor'),
        ),
    ]
