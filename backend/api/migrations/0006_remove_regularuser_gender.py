# Generated by Django 5.1.2 on 2024-10-16 06:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_businessuser_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='regularuser',
            name='gender',
        ),
    ]