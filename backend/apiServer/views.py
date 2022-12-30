from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def mainPage(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def individualNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createNote(request):
    data = request.data 
    note = Note.objects.create(
        title = data['title'],
        body = data['body'],
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request,pk):
    data = request.data 
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data )
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note deletion successful.")
