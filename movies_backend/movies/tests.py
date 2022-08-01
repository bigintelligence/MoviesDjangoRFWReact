import pytest
from rest_framework.test import APITestCase
from rest_framework import status


URL_MOVIES = '/movies/'
URL_ACTORS = '/actors/'
URL_COMMUN_ACTORS_MOVIES = '/common_actors/?movies='


@pytest.mark.usefixtures("actor_mocker", "movie_mocker")
class TestMovies(APITestCase):
    """Testing the movies endpoints"""
    def setUp(self):
        # create actor
        self.client.post(URL_ACTORS, self.mock_actor[0], format='json')
        self.client.post(URL_ACTORS, self.mock_actor[1], format='json')
        self.client.post(URL_ACTORS, self.mock_actor[2], format='json')
        # create movie
        self.client.post(URL_MOVIES, self.mock_movie[0], format='json')

    def test_create_movie(self):
        response = self.client.post(URL_MOVIES, self.mock_movie[1], format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_movies(self):
        response = self.client.get(URL_MOVIES, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


@pytest.mark.usefixtures("actor_mocker")
class TestActors(APITestCase):
    """Testing the Actors endpoints"""
    def setUp(self):
        #create actor for test
        self.client.post(URL_ACTORS, self.mock_actor[0], format='json')

    def test_create_actor(self):
        response = self.client.post(URL_ACTORS, self.mock_actor[1],  format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_actors(self):
        response = self.client.get(URL_ACTORS, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


@pytest.mark.usefixtures("actor_mocker", "movie_mocker")
class TestCommonActors(APITestCase):
    """Testing the common actors endpoint"""
    def setUp(self):
        # create actors
        self.client.post(URL_ACTORS, self.mock_actor[0], format='json')
        self.client.post(URL_ACTORS, self.mock_actor[1], format='json')
        self.client.post(URL_ACTORS, self.mock_actor[2], format='json')
        # create movies
        self.client.post(URL_MOVIES, self.mock_movie[0], format='json')
        self.client.post(URL_MOVIES, self.mock_movie[2], format='json')

    def test_list_common_actors(self):
        movies_list = [self.mock_movie[0]['title'], self.mock_movie[2]['title']]
        url = URL_COMMUN_ACTORS_MOVIES + ','.join(movies_list)
        print(url)
        list_mov = self.client.get(URL_MOVIES, format='json')
        list_act = self.client.get(URL_ACTORS, format='json')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0], self.mock_actor[0])
        self.assertEqual(response.data[1], self.mock_actor[2])

