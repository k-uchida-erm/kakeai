# Generated by Django 5.1.6 on 2025-02-23 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_add_sample_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='amount',
            field=models.DecimalField(decimal_places=0, max_digits=10),
        ),
    ]
