from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    User Model

    This model represents a user in the system, extending the Django AbstractUser model.
    It includes an additional field for CPF (Cadastro de Pessoas Físicas), which is a unique identifier used in Brazil.

    Attributes:
        cpf (str): A unique string field representing the user's CPF. It has a maximum length of 11 characters.
    """
    cpf = models.CharField(max_length=11, unique=True)
