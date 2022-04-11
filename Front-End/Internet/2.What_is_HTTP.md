# 주제 : HTTP란 무엇인가?

## HTTP란?

- Hypertext Transfer Protocol은 World Wide Web의 기초
- 하이퍼텍스트 링크를 사용하여 웹 페이지를 로드하는데 사용되는 프로토콜
- 네트워크간의 정보를 전송하도록 설계된 응용프로그램 계층 프로토콜

<img src="./What_is_HTTP/http-layers.png">

- TCP/IP 위에서 전송되는 응용 프로그램 계층 프로토콜

- 클라이언트 - 서버 프로토콜

## HTTP Request

- 웹사이트를 로드하는데 필요한 정보를 요청하는 방식
- 일반적으로 아래와 같은 정보를 포함
  1. HTTP 버전 유형
  2. URL
  3. HTTP method
  4. HTTP request headers
  5. Optional HTTP body

## HTTP method

- HTTP verb라고도 불린다.
- 예상 작업을 나타낸다.
- GET, POST, PUT, DELETE
  1. GET : 존재하는 자원에 대한 요청
  2. POST : 새로운 자원을 생성
  3. PUT : 존재하는 자원에 대한 변경
  4. DELETE : 존재하는 자원에 대한 삭제

## HTTP request headers

<img src="./What_is_HTTP/http-request-headers.webp" />

- key : value 쌍으로 저장된 텍스트 정보가 포함 되어있다.
- 헤더에는 클라이언트가 어떤 브라우저를 사용하고 있는지, 어떤 데이터가 요청되고 있는지와 같은 핵심정보를 전달한다.

## HTTP request body

- 전송하는 정보의 본문
- 사용자 이름 및 암호 또는 양식에 입력된 기타 데이터와 같이 웹 서버에 제출되는 모든 정보 포함

## HTTP response

- 웹 클라이언트가 HTTP 요청에 대한 응답으로 서버에서 받는 것
- 요청된 내용을 기반으로 중요한 정보를 전달
- 다음과 같은 정보가 포함된다.
  1. HTTP 상태코드
  2. HTTP response headers
  3. Optional HTTP body

## HTTP 상태 코드

- HTTP 요청이 성공적으로 완료 되었는지 여부를 나태내는 3자리 코드
- 서버에서 설정해주는 응답 정보
- 상태 코드는 다음 5개 블록으로 나뉜다.
  1. 1xx : Informational
  2. 2xx : Success
  3. 3xx : Redirection
  4. 4xx : Client Error
  5. 5xx : Server Error

### 2xx - 성공

- 200 : GET 요청에 대한 성공
- 204 : 성공했으나 응답 본문에 데이터가 없음
- 205 : 성공했으나 클라이언트의 화면을 새로 고침하도록 권고
- 206 : 성공했으나 일부 범위의 데이터만 반환

### 3xx - 리다이렉션

300번대의 상태 코드는 대부분 클라이언트가 이전 주소로 데이터를 요청하여 서버에서 새 URL로 리다이렉트를 유도하는 경우

- 301 : 요청한 자원이 새 URL에 존재
- 303 : 요청한 자원이 임시 주소에 존재
- 304 : 요청한 자원이 변경되지 않았으므로 클라이언트에서 캐싱된 자원을 사용하도록 권고

### 4xx - 클라이언트 에러

- 400 : 잘못된 요청
- 401 : 권한 없이 요청 -> Authorization 헤더 참고
- 403 : 서버에서 해당 자원에 대해 접근 금지
- 405 : 허용되지 않은 요청 메서드
- 409 : 최신 자원이 아닌데 업데이트 하는 경우

### 5xx - 서버 에러

- 501 : 요청한 동작에 대해 서버가 수행할 수 없는 경우
- 503 : 서버가 과부하 또는 유지 보수로 내려간 경우

## HTTP response headers

<img src="./What_is_HTTP/http-response-headers.webp"/>

- HTTP response는 body에서 전송되는 데이터의 언어 및 형식과 같은 중요한 정보를 전달하는 헤더와 함께 제공

## HTTP response body

- "GET" 요청에 대한 성공적인 HTTP response에는 일반적으로 요청된 정보가 포함된 body가 존재

## HTTP/1.0

## HTTP/1.1

## HTTP/2

<img src="What_is_HTTP/http_2.webp" />

- 바이너리 프레이밍 계층을 사용해 요청과 응답의 멀티플렉싱을 지원
- HTTP 메시지를 바이너리 형태의 프레임으로 나누고 이를 전송 후 받은 쪽에서 다시 조립
- 요청과 응답이 동시에 이루어지니 하나의 연결에 여러 요청과 응답이 뒤섞임
- 프레이밍 작업은 서버와 클라이언트에서 진행
- 요청 우선순위 지정 가능
- 헤더를 압축하여 오버헤드를 줄이고 클라이언트가 명시적 요청을 하지 않아도 필요한 리소스를 미리 푸시하여 응답시간을 줄이는 서버 푸시 기능 추가

## HTTPS

- HyperText Transfer Protocol Secure
-

# References

- https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

- https://kamranahmed.info/blog/2016/08/13/http-in-depth/

- https://joshua1988.github.io/web-development/http-part1/

- https://www.whatap.io/ko/blog/38/
