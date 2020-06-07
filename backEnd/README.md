## Backend 디렉토리

- config

  aws, mysql, outlook, session-store 등에 대한 key나 password 정보가 담긴 디렉토리

- lib

  routes에서 받은 get, post 요청에 대해 적절한 처리를 해주는 메소드가 담긴 디렉토리

- models

  database와 관련된 정보가 담긴 디렉토리, sequlize.js에 의해 실행됨

- node_moduls

  backend module이 모여있는 디렉토리

- routes

  get, post 요청을 받고 이에 대한 lib 내 메소드를 실행하는 디렉토리

- server setup

  uitda 서버 내 nginx conf 파일 설정 내용

- .gitignore

  github에 업로드 되지 말아야 하는 파일들에 대한 처리