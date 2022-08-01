from rest_framework import viewsets, generics
from .models import Actor, Movie
from .serializers import ActorSerializer, MovieSerializer


class ActorViewSet(viewsets.ModelViewSet):
    """
    API endpoint of CRUD actors
    """
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint of CRUD movies
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class MoviesCommonActors(generics.ListAPIView):
    """
    API endpoint of movies filtered by actors who where in it
    """
    serializer_class = ActorSerializer

    def get_queryset(self):
        query_movies = self.request.query_params['movies']
        movies_list = query_movies.split(',')
        queryset = Actor.objects.filter(movie__in=movies_list).distinct()
        return queryset


class ActorsCommonMovies(generics.ListAPIView):
    """
    API endpoint of movies filtered by actors who where in it
    """
    serializer_class = MovieSerializer

    def get_queryset(self):
        query_movies = self.request.query_params['actors']
        actors_list = query_movies.split(',')
        queryset = Movie.objects.filter(cast__in=actors_list).distinct()
        return queryset