# 주제 : 인터넷은 어떻게 동작하는가?

## 인터넷이란?

### 인터넷의 정의

컴퓨터로 연결하여 TCP/IP라는 통신 프로토콜을 이용해 정보를 주고받는 컴퓨터 네트워크이다.

컴퓨터의 데이터 교환 -> 보조기억장치(플로피디스크, CD) -> 정보 손실, 속도 저하 -> 컴퓨터와 컴퓨터의 선을 이어서 데이터를 전달한 것이 인터넷의 시초

### 네트워크란?

#### 단순한 네트워크

<img src="./How_does_the_internet_work/internet-schema-1.png"/>

- 두 개의 컴퓨터가 통신을 위해서 물리적으로 또는 무선으로 연결된 것

<img src="./How_does_the_internet_work/internet-schema-2.png"/>

- 네트워크는 두 대의 컴퓨터로 제한되지 않는다.
- 원하는 만큼 컴퓨터를 연결할 수 있다.
- 하지만 연결이 많아질 수록 복잡해지고 케이블이 많이 필요해진다.

<img src="./How_does_the_internet_work/internet-schema-3.png"/>

- 선이 많아지고 복잡해지는 문제를 해결하기 위해
- 네트워크의 각 컴퓨터는 라우터라고 하는 특수한 소형 컴퓨터에 연결

#### 네트워크 속의 네트워크

<img src="./How_does_the_internet_work/internet-schema-4.png"/>

- 라우터의 경우도 컴퓨터이기 때문에 두 대의 라우터를 연결할 수 있다.

<img src="./How_does_the_internet_work/internet-schema-5.png" />

- 컴퓨터를 라우터에 연결하고, 라우터에서 라우터로, 무한히 확장할 수 있다.
- 하지만 이러한 케이블 연결에는 거리의 한계가 있다.
- 아주 먼 곳에 있는 네트워크와 연결을 하는 방법은 무엇일까?

<img src="./How_does_the_internet_work/internet-schema-6.png" />

- 전화기 기반의 시설은 서계 어느 곳과 연결이 되어 있다.
- 모뎀을 이용한 네트워크와 전화 시설을 연결
- 모뎀은 네트워크의 정보를 전화 시설에서 처리 할 수 있는 정보로 바꾸며 전화 시설의 정보를 네트워크 정보로 바꾸는 기능을 담당

<img src="./How_does_the_internet_work/internet-schema-7.png" />

- 모뎀을 통해서 전화 시설에 연결되고,
- 네트워크에서 다른 네트워크로 메시지를 보내기 위해서
- 인터넷 서비스 제공 업체 (Internet Service Provider, ISP)에 연결
- ISP는 특수한 라우터를 관리하며 다른 ISP의 라우터에도 액세스 할 수 있는 회사
- 네트워크의 메시지는 ISP 네트워크를 통해서 전달 된다.
- 인터넷은 이러한 전체 네트워크 인프라로 구성된다.

#### ISP

- 웹 사이트 또는 응용 프로그램에 액세스 할 때는 반드시 인터넷에 접근해야 한다.
- 인터넷에 접속하려면 인터넷 서비스 공급자가 필요하다.
- ISP란 집이나 사업장에 유로로 인터넷을 제공하는 공급자를 뜻한다.
- ISP는 3개의 계층을 갖는다.

<img src="./How_does_the_internet_work/1tier.png" />

1. 1티어 ISP

- 1티어 ISP는 다른 1티어 ISP와 인터넷 트래픽을 교환하는 인터넷 제공 업체
- 백본 인터넷 공급자라고도 부른다.
- 대서양 인터넷 해저 케이블과 같은 인프라를 구축
- 최종 사용자가 아닌 다른 모든 인터넷 공급자에게 트래픽을 제공
- 1티어 인터넷 공급자가 없으면 대륙과 국가간에 인터넷 트래픽을 교환 할 수 없다.

2. 2티어 ISP

- 2티어 ISP는 1티어와 3티어 인터넷 서비스 공급자를 연결하는 서비스 공급자
- 2티어 제공 업체는 인터넷 전송을 구매할 뿐만 아니라 피어링 계약을 통해 인터넷 트래픽 교환

3. 3티어 ISP

- 3티어 ISP는 인터넷 전송을 구매하는 제공 업체
- 즉 우리가 흔히 사용하는 인터넷을 제공해주는 ISP이며 접속 ISP라고도 한다.

<img src="./How_does_the_internet_work/isp.png" />

- 인터넷을 사용하는 사용자들은 Tier-3 ISP를 통해 연결
- Tier-3 ISP는 Tier-2 ISP를 통해 Tier-1과 연결

#### IP와 DNS

<img src="./How_does_the_internet_work/dns-ip.png" />
- 컴퓨터에 메시지를 보내려면 메시지를 받을 특정 컴퓨터를 지정해야 한다.
- 따라서 네트워크에 연결된 모든 컴퓨터에는 IP주소라는 고유한 주소가 존재
- 인터넷 주소는 nnn.nnn.nnn.nnn 형식이다.
- 여기서 nnn은 0~255사이의 숫자다.

- 사람은 IP주소를 기억하기 어렵다.
- 따라서 도메인 이름 이라고하는
- 사람이 읽을 수 있는 IP 주소의 이름을 지정할 수 있다.

#### 인터넷과 웹

- 웹 브라우저를 이용하여 도메인 이름을 사용하여 웹 사이트에 접속
- 인터넷은 수십억 대의 컴퓨터를 모두 연결하는 기술 인프라
- 이러한 컴퓨터들 중에 일부는 "웹 서버"로서 웹 브라우저가 이해할 수 있는 서비스를 제공
- 즉, 인터넷은 인프라이며 웹은 인프라 기반 위에 구축된 서비스이다.

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
- https://wogh8732.tistory.com/16
