import json

from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static
from django.views.decorators.http import require_GET, require_POST

def home(request):
    context = {
        'name': 'bbamsu211',
        'profile': static('images/profile.jpeg'),
        'content_images': [
            static('images/content-1.jpeg'), 
            static('images/content-2.jpeg'), 
            static('images/content-3.jpeg')
        ],
        'content': '서울숲 나들이~',
        'like': 100,
        'is_like': False,
        'comments': [
          {
            'id': 1,
            'user': 'pirogramming_official',
            'text': '농땡이 피울 시간에'
          },
          {
            'id': 2,
            'user': 'pirogramming_official',
            'text': '강의 준비나 잘 해오시지요.'
          }
        ]
    }
    return render(request, 'app/home.html', context)

@require_GET
def get_comments_api(request):
    comments = [
        {
            'id': 3,
            'user': 'bbamsu211',
            'text': '죄송합니다,,,'
        },
        {
            'id': 4,
            'user': 'bbamsu211',
            'text': '열심히 준비할게요!'
        },
        {
            'id': 5,
            'user': 'bbamsu211',
            'text': '다음에 또 불러주세요'
        }
    ]

    context = {
        'comments': comments
    }

    return HttpResponse(json.dumps(context), content_type='application/json')

def get_param(request, key, default_value=None):
    request_body = json.loads(request.body.decode('utf-8'))
    return request_body[key] if key in request_body else default_value

@require_POST
def post_comment_api(request):
    comment = get_param(request, 'comment', '')
    user = get_param(request, 'user', '')
    print(comment, user)

    context = {
      'id': 6
    }

    return HttpResponse(json.dumps(context), content_type='application/json')

@require_POST
def post_like_api(request):
    is_like = get_param(request, 'is_like', False)

    if is_like:
        likes = 101
    else:
        likes = 100

    print(is_like, likes)

    context = {
        'likes': likes
    }

    return HttpResponse(json.dumps(context), content_type='application/json')
