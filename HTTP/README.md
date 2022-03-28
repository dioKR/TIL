# HTTP 정리

## HTTP 역사

### HTTP vs HTTPs

Hypertext Transfer Protocol
(HyperMedia)
요청(request)과 반응(responese) 으로 이루어진 프로토콜
1989년 개발
1994년 HTTPS Hypertext Transfer Protocol Secure
TLS/SSL 방법으로 주고받음 보안관계 형성된 클라이언트 & 서버

http v1 : text-based, big size, one file at a time -> 비효율적
http v2 : binary based protocol -> efficient / secure 보안 성능 개선
http v3 : TCP -> UDP

## Status Code

100 : Information 정보
100 Continue
102 Processing

200 : Successful 성공
200 OK
201 Created
204 No Content

300 : Redirection 클라이언트가 요청한 URL이 다른곳으로 옮겨갔을때 알려준다
301 Moved Permanently
302 Found
303 See Other (get)
307 Temporary Redirect
308 Permanent Redirect

400 : Client error 클라이언트가 잘못된 방식으로 요청했을 때
400 Bad Request
401 Unauthorized : 로그인 하지않은 사용자
403 Forbidden : 권한 없음
404 Not Found
405 Method Not Allowed : 허용 X
409 Conflict : 이미 존재하여 충돌

500 : Server error 서버에서의 예상치못한 에러
500 : 서버내부문제
502 : 중간서버 문제
503 : 서버 준비 X

## Request Method

URL : Uniform Resource Locator
리소스가 어디있는지 고유한 값을 나타내는 주소 같은 친구...

https://www.server.com/index.html
프로토콜//호스트네임/(어떤포트)/경로(+쿼리)

Request
get : 가져오고싶다
post : 만들고싶다
put : 업데이트
delete : 삭제
patch: 부분업데이트
head : 헤드만 받고싶다
options: 해당 URL의 모든 request 옵션을 알고싶을때
trace : 서버반응확인

서버에 있는 데이터를 "읽는 요청" vs "변경하는 요청"
변경 요청 : Post, put, delete, patch
읽는 요청 : get, head

## Headers
