from rest_framework.generics import (
    ListAPIView, 
    RetrieveAPIView,
    CreateAPIView
)

from .serializers import ArticleSerializer
from articles.models import Article

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleCreateView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer