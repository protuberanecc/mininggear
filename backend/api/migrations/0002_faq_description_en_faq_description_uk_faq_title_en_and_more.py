# Generated by Django 5.1.6 on 2025-03-05 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='faq',
            name='description_en',
            field=models.TextField(blank=True, verbose_name='Описание вопроса на EN'),
        ),
        migrations.AddField(
            model_name='faq',
            name='description_uk',
            field=models.TextField(blank=True, verbose_name='Описание вопроса на UK'),
        ),
        migrations.AddField(
            model_name='faq',
            name='title_en',
            field=models.CharField(blank=True, max_length=250, verbose_name='Вопрос на EN'),
        ),
        migrations.AddField(
            model_name='faq',
            name='title_uk',
            field=models.CharField(blank=True, max_length=250, verbose_name='Вопрос на UK'),
        ),
    ]
