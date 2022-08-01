from django.db import models


class Actor(models.Model):

    class Gender(models.TextChoices):
        MALE = 'male'
        FEMALE = 'female'
    name = models.CharField(max_length=255, primary_key=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=6, choices=Gender.choices)


class Movie(models.Model):
    title = models.CharField(max_length=255, primary_key=True)
    category = models.CharField(max_length=255)
    cast = models.ManyToManyField(Actor)

