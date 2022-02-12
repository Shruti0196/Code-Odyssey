from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.decorators import api_view
# Create your views here.
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response

from .models import Patient
from .serializers import PatientSerliazer




# class Patientlist(generics.GenericAPIView):

#     def get(self,request):
@api_view(['GET'])
def list(request):
        patient=Patient.objects.all()
        serializer=PatientSerliazer(patient,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)

# class Patientcreate(generics.GenericAPIView):
#     def create(self,request):
@api_view(['POST'])
def create(request):
        try:
            serializer=PatientSerliazer(data=request.data,context={"request":request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={"error":False,"message":"Patient Data Saved Successfully"}
        except:
            dict_response={"error":True,"message":"Error During Saving Patient Data"}
        return Response(dict_response)

# class Patientretrieve(generics.GenericAPIView):
#     def get(self, request, pk=None):
@api_view(['GET'])
def retrieve(request,pk=None):
        queryset = Patient.objects.all()
        patient= get_object_or_404(queryset, name=pk)
        serializer = PatientSerliazer(patient, context={"request": request})

        serializer_data = serializer.data
        # Accessing All the Medicine Details of Current Medicine ID
        # company_bank_details = CompanyBank.objects.filter(company_id=serializer_data["id"])
        # companybank_details_serializers = CompanyBankSerializer(company_bank_details, many=True)
        # serializer_data["company_bank"] = companybank_details_serializers.data

        return Response({"data": serializer_data})

@api_view(['GET','PUT'])
def update(request, pk):
    try:
        model = Patient.objects.get(pk=pk)
    except:
        return Response('Not Found')
    if request.method == 'PUT':
        serializer = PatientSerliazer(model, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response ("Updated")
        else:
            return Response ("Failed")
    # if request.method == 'GET':
    #     serializer=PatientSerliazer (models)
    #     return Response (serializer.data)
# class Patientupdate(generics.GenericAPIView):
#     def update(self,request,pk=None):
# @api_view(['PUT'])
# def update(request,pk=None):
#         try:
#             queryset=Patient.objects.all()
#             patient=get_object_or_404(queryset,pk=pk)
#             serializer=PatientSerliazer(patient,data=request.data,context={"request":request})
#             serializer.is_valid(raise_exception=True)
#             serializer.save()
#             dict_response={"error":False,"message":"Successfully Updated Patient Data"}
#         except:
#             dict_response={"error":True,"message":"Error During Updating Patient Data"}

#         return Response(dict_response)
@api_view(['DELETE'])
def delete(request, pk):
    item = Patient.objects.get(pk=pk)
    item.delete()
    return Response("Deleted")