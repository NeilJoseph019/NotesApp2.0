from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    body_contd = models.CharField(max_length=50, null=True, blank=True)
    updated_time = models.DateTimeField(auto_now=True)
    created_time = models.DateTimeField(auto_now_add=True)

    def save(self,*args, **kwargs):
        if len(self.body)>45:
            self.body_contd = f"{self.body[:45]}..."
        else:
            self.body_contd = self.body
        return super(Note, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} - {self.body_contd}"
