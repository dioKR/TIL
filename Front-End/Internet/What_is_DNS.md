# 주제 : DNS란 무엇인가?

## Domain Name System

- 사람이 읽을 수 있는 도메인 이름을 기계가 읽을 수 있는 IP주소로 변환
- 인터넷 전화번호부
- 인간은 도메인 이름을 통해 정보에 접근
- 웹 브라우저는 인터넷 프로토콜(IP) 주소를 통해 상호 작용
- DNS는 브라우저가 인터넷 리소스를 로드할 수 있도록 도메인 이름을 IP주소로 변환

## DNS 작동 방법

<img src="./What_is_DNS/how-route-53-routes-traffic.png" />

1. 사용자가 웹 브라우저를 열어 주소 표시줄에 www.example.com 을 입력하고 엔터를 누른다.

2. www.example.com에 대한 요청은 일반적으로 케이블 인터넷 공급업체, DSL 광대역 공급업체 또는 기업 네트워크 같은 인터넷 서비스 제공업체(ISP)가 관리하는 DNS 해석기로 라우팅된다.

3. ISP의 DNS 해석기는 www.example.com에 대한 요청을 DNS 루트 이름 서버에 전달

4. ISP의 DNS 해석기는 www.example.com에 대한 요청을 이번에는 .com 도메인의 TLD 이름 서버 중 하나에 다시 전달 .com 도메인의 이름 서버는 example.com 도메인과 연관된 4개의 Amazon Route 53 이름의 서버의 이름을 사용하여 요청에 응답

5. ISP의 DNS 해섟기는 Amazon Route 53 이름 서버 하나를 선택해 www.example.com에 대한 요청을 해당 이름 서버에 전달

6. Amazon Route 53 이름 서버는 example.com 호스팅 영역에서 www.example.com 레코드를 찾아 웹서버의 IP 주소를 DNS 해석기로 반환

7. ISP의 DNS 해석기가 사용자에게 필요한 IP주소 확보. 해석기는 이값을 웹 브라우저로 반환 또한, DNS해석기는 다음에 누군가 example.com을 탐색할 때 좀 더 빠르게 응답하도록 일정기간 example.com의 IP주로를 캐싱

8. 웹 브라우저는 DNS 해석기로부터 얻은 IP주소로 www.example.com에 대한 요청을 전송

## DNS 서버 종류

<img src="./What_is_DNS/210111_03.jpeg" />

- Root DNS Server : ICANN이 직접 관리, TLD DNS 서버 IP들을 저장하고 안내하는 역할
- TLD(최상위 도메인) DNS Server : 도메인 등록 기관이 관리하는 서버, Authoritative DNS 서버 주소를 저장해두고 안내하는 역할
- Authoritative DNS Server : 실제 개인 도메인과 IP주소의 관계가 기록/저장/변경 되는 서버 그렇기 때문에 권한의 의미가 붙음. 일반적으로 도메인/호스팅 업체의 "네임서버"를 말하지만, 개인 DNS 서버 구축을 한 경우 이에 해당
- Recursive DNS Server : 인터넷 사용자가 가장 먼저 접근하는 DNS 서버, 위 3개의 서버를 거친다면 효일이 좋지않기 떄문에 한 번 거친 IP주소는 일정 기간 동안 캐시라는 형태로 저장해두는 서버. 직접 도메인과 IP주소의 관계를 기록/저장/변경하지는 않고 캐시 정보만 보관하기에 Recursive 명칭이 붙음 대표적으로 KT/LG/SK 같은 ISP DNS 서버가 존재

<img src="./What_is_DNS/210111_03_2.jpeg" />

# References

- https://aws.amazon.com/ko/route53/what-is-dns/
- https://gentlysallim.com/dns%EB%9E%80-%EB%AD%90%EA%B3%A0-%EB%84%A4%EC%9E%84%EC%84%9C%EB%B2%84%EB%9E%80-%EB%AD%94%EC%A7%80-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC/
