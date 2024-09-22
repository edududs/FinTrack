from django.contrib import admin
from user import models

# Register your models here.
@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'email', 'is_active', 'is_staff')
    list_display_links = ("username",)
    search_fields = ('username', 'email')
    list_filter = ('is_active', 'is_staff')