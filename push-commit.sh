#!/bin/bash

# 사용자로부터 커밋 메시지와 브랜치 이름 입력 받기
read -p "Enter lecture number: " lecture_number

# 변경 사항 추가, 커밋, 푸시
git checkout -b "lecture$lecture_number" && git add . && git commit -m "$lecture_number" && git push -u origin "lecture$lecture_number"
