from django.urls import include, path, re_path
from rest_framework import routers
from .views import ActorViewSet, MovieViewSet, MoviesCommonActors, ActorsCommonMovies


router = routers.DefaultRouter()
router.register('actors', ActorViewSet)
router.register('movies', MovieViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path('^common_actors(?P<movies>.+)', MoviesCommonActors.as_view()),
    re_path('^performances(?P<actors>.+)', ActorsCommonMovies.as_view()),
]

