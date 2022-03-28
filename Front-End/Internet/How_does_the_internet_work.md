# 주제 : 인터넷은 어떻게 동작하는가?

## 1. 인터넷이란?

### 1-1. 인터넷의 정의

인터넷은 컴퓨터로 연결하여 TCP/IP라는 통신 프로토콜을 이용해 정보를 주고받는 컴퓨터 네트워크이다.

컴퓨터의 데이터 교환 -> 보조기억장치(플로피디스크, CD) -> 정보 손실, 속도 저하 -> 컴퓨터와 컴퓨터의 선을 이어서 데이터를 전달한 것이 인터넷의 시초

### 1-2. 네트워크란?

#### 단순한 네트워크

<img src="./internet-schema-1.png"/>

두 개의 컴퓨터가 통신을 위해서 물리적으로 또는 무선으로 연결된 것

<img src="./internet-schema-2.png"/>

네트워크는 두 대의 컴퓨터로 제한되지 않는다. 원하는 만큼 컴퓨터를 연결할 수 있다. 하지만 연결이 많아질 수록 복잡해진다. 또한 케이블이 매우 많이 필요해진다.

<img src="./internet-schema-3.png"/>

선이 많아지고 복잡해지는 문제를 해결하기 위해 네트워크의 각 컴퓨터는 라우터라고 하는 특수한 소형 컴퓨터에 연결

#### 네트워크 속의 네트워크

<img src="./internet-schema-4.png"/>

라우터의 경우도 컴퓨터이기 때문에 두 대의 라우터를 연결할 수 있다.

<img src="./internet-schema-5.png" />

컴퓨터를 라우터에 연결하고, 라우터에서 라우터로, 무한히 확장할 수 있다.

- 탈중앙화, 수천 개의 서로 다른 조직이 네트워크를 운영하고 자발적인 상호 연결
  Lan (Local area network) : 가까운 지역의 통신망
  Wan (Wide area network) : 넓은 지역의 통신망
  Internet (International area network) : 국제적인 지역의 통신망

- 웹 != 인터넷, 웹은 인터넷 응용프로그램 중 하나일 뿐

- 인터넷은 컴퓨터의 글로벌 네트워크이기 때문에 인터넷에 연결된 각 컴퓨터에는 고유한 주소가 있어야 한다.
- 인터넷 주소는 nnn.nnn.nnn.nnn 형식이다.
- 여기서 nnn은 0~255사이의 숫자다.
- 이를 IP주소라고 한다.

# What's an IP address?

- IP주소는 컴퓨터가 인터넷에서 서로를 식별할 때 사용하는 숫자.

# What is IPv6?

- 현재 인터넷 표준으로 알려진 IPv4는 약 40억개의 IP주소만을 허용 -> 오늘날 IPv4 주소 공급이 거의 소진 -> IPv6라는 새로운 표준 개발 : 많은 고유 주소 제공 (39 digits long)

# What is a packet?

- 패킷은 인터넷을 통해 전송되는 정보의 기본 단위
- 패킷은 헤더와 데이터로 구성
- 헤더 : 패킷의 길이, 소스 및 대상, 체크섬값, 최대 64킬로바이트의 데이터 포함가능 = 일반 텍스트의 약 20페이지

# What is the World Wide Web?

- 인터넷에 연결된 컴퓨터를 이용해 사람들과 정보를 공유할 수 있는 공간

# What is web browser?

- HTML문서나 파일을 출력하는 GUI기반의 응용 소프트웨어

# What is ths Domain Name System?

- DNS는 216.146.4.10과 같이 기억하기 어려운 숫자 주소 대신 사용하는 이름.

# References

- https://developer.mozilla.org/ko/docs/Learn/Common_questions/How_does_the_Internet_work
- https://www.vox.com/2014/6/16/18076282/the-internet
- http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm
