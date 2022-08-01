# Generated by Django 4.0.5 on 2022-06-23 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('name', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=6)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('title', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=255)),
                ('cast', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='movies.actor')),
            ],
        ),
    ]