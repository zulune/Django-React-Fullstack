from django.db import models
from django.utils.translation import gettext as _
# Create your models here.


class Article(models.Model):
    title = models.CharField(_("Title"), max_length=150)
    content = models.TextField(_("Content"))

    def __str__(self):
        return self.title
    