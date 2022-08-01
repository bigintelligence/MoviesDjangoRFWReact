FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /movies_backend
WORKDIR /movies_backend
COPY requirements.txt /movies_backend/
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . /movies_backend/