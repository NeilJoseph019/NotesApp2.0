from django.urls import path
from . import views

urlpatterns = [
    path("main", views.mainPage, name="main-notesList"),
    path("note/create", views.createNote, name="create-note"),
    path("note/<int:pk>/update", views.updateNote, name="update-note"),
    path("note/<int:pk>/delete", views.deleteNote, name="delete-note"),
    path("note/<int:pk>", views.individualNote, name="individual-note"),
]