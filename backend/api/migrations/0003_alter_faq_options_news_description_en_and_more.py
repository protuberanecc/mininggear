# Generated by Django 5.1.6 on 2025-03-06 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_faq_description_en_faq_description_uk_faq_title_en_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='faq',
            options={'ordering': ['-pk']},
        ),
        migrations.AddField(
            model_name='news',
            name='description_en',
            field=models.TextField(blank=True, verbose_name='Предисловие (небольшое) на EN'),
        ),
        migrations.AddField(
            model_name='news',
            name='description_uk',
            field=models.TextField(blank=True, verbose_name='Предисловие (небольшое) на UK'),
        ),
        migrations.AddField(
            model_name='news',
            name='img_en',
            field=models.ImageField(blank=True, upload_to='news/en/', verbose_name='Основное фото на EN'),
        ),
        migrations.AddField(
            model_name='news',
            name='img_uk',
            field=models.ImageField(blank=True, upload_to='news/ru/', verbose_name='Основное фото на UK'),
        ),
        migrations.AddField(
            model_name='news',
            name='title_en',
            field=models.CharField(blank=True, max_length=250, verbose_name='Заголовок новости на EN'),
        ),
        migrations.AddField(
            model_name='news',
            name='title_uk',
            field=models.CharField(blank=True, max_length=250, verbose_name='Заголовок новости на UK'),
        ),
        migrations.AddField(
            model_name='newssection',
            name='title_en',
            field=models.CharField(blank=True, max_length=250, verbose_name='Заголовок параграфа на EN'),
        ),
        migrations.AddField(
            model_name='newssection',
            name='title_uk',
            field=models.CharField(blank=True, max_length=250, verbose_name='Заголовок параграфа на UK'),
        ),
        migrations.AddField(
            model_name='paragraph',
            name='text_en',
            field=models.TextField(blank=True, verbose_name='Текст на EN'),
        ),
        migrations.AddField(
            model_name='paragraph',
            name='text_uk',
            field=models.TextField(blank=True, verbose_name='Текст на UK'),
        ),
        migrations.AlterField(
            model_name='paragraph',
            name='text',
            field=models.TextField(verbose_name='Текст'),
        ),
    ]
