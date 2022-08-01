import pytest


@pytest.fixture(scope="class")
def actor_mocker(request):
    request.cls.mock_actor = [
        {
            "name": "act",
            "age": 30,
            "gender": "male"
        },
        {
            "name": "act1",
            "age": 20,
            "gender": "female"
        },
        {
            "name": "act2",
            "age": 10,
            "gender": "female"
        }
    ]


@pytest.fixture(scope="class")
def movie_mocker(request):
    request.cls.mock_movie = [
        {
            "title": "mov",
            "category": "scify",
            "cast": ["act"]
        },
        {
            "title": "mov1",
            "category": "scify",
            "cast": ["act1", "act2"]
        },
        {
            "title": "mov2",
            "category": "scify",
            "cast": ["act", "act2"]
        }
    ]

