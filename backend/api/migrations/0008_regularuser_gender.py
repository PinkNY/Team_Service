# Generated by Django 5.1.2 on 2024-10-16 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_regularuser_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='regularuser',
            name='gender',
            field=models.CharField(choices=[('M', '남성'), ('F', '여성')], default='M', max_length=1),
        ),
    ]