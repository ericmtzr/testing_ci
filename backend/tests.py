
import pytest
from django.urls import reverse
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_status_endpoint():
    client = APIClient()
    r = client.get('/api/status/')
    assert r.status_code == 200
    assert r.json().get('status') == 'ok'
