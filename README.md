# 바닐라 자바스크립트로 인스타그램 좋아요 댓글 기능 구현하기

장고와 바닐라 자바스크립트를 활용해 인스타그램의 일부 기능을 구현합니다.

- 이미지 스와이프
- 댓글 더 보기
- 댓글 달기
- 좋아요 기능

---

## Quick Start

```bash
git clone https://github.com/choibumsu/piro15_js.git
cd piro15_js

//activate your python virtualenv

//optional
python manage.py migrate

python manage.py runserver
```

http://127.0.0.1:8000 에 접속합니다.

---

## 실습 목표

### 1. 장고와 바닐라 자바스크립트를 효과적으로 섞기

장고 없이 순수하게 바닐라 자바스크립트만으로 작성하는 애플리케이션은 html 코드를 직접 사용하지 않고, 컴포넌트 기반으로 자바스크립트 파일 내에 작성할 수 있습니다.

그러나 장고를 사용하는데 모든 html를 자바스크립트에 넣는 것은 너무 비효율적입니다. 장고 템플릿 태그 사용에도 문제가 생깁니다.

따라서 html 코드는 장고 템플릿을 활용하여 구축해놓고, 바닐라 자바스크립트에서는 이미 구축된 DOM을 가져다 사용하도록 합니다.

### 2. 프론트엔드에 집중하기

3시간 실습에서 백엔드, 모델단까지 다루기에는 시간이 너무 촉박합니다. 따라서, 백엔드 API는 모델을 작성하지 않고 하드코딩된 딕셔너리형태의 리스폰스를 반환하도록 했습니다.

백엔드단에서 처리는 성공한다는 가정하에 프론트엔드에서 API를 호출하는 방법에 집중하도록 합니다.

---

## 실습 자료

Notion : https://www.notion.so/bumsu/15-a48c33eb4f9e4b788e716ae2cc4432d0

DEMO : https://choiteemo.pythonanywhere.com/
