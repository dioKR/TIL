# DOM

- Document Object Model
- 브라우저가 HTML <Tag> 를 JavaScript <Node> (오브젝트) 로 변환
- 상속 관계
  - EventTarget ← Node ← Document, Element, Text...
  - Element ← HTMLElement ← HTMLInputElement, HTMLDivElement
- 브라우저가 HTML <Tag>를 읽어서 DOM Tree를 생성한다.
- DOM Tree는 메모리에 보관할 수 있는 오브젝트
- 각각의 태그들이 그에 맞는 오브젝트로 맵핑되어 DOM Tree로 표기
- EventTarget ← Node
  - 모든 Node는 EventTarget 이다.
  - EventTarget Method - addEventListnener() - removeEventListemer() -
    dispatchEvent()

<br></br>

# $0

- 브라우저 콘솔에서 $0.을 이용하면 선택된 요소를 참조할 수 있다.

<br></br>

# CSSOM

- CSS Object Model
- CSS + DOM = CSSOM
  - 브라우저가 html을 읽고난 후 DOM과 CSS파일을 병합하여 CSSOM을 만든다.
  - CSSOM에는 각 태그에 대한 CSS속성만 존재한다.
- DOM + CSSOM = Render Tree
  - 브라우저에서 DOM과 CSSOM을 합쳐서 사용자에게 보여질 요소인Render Tree를 생성
    한다.
  - CSSOM 에서 display:none이면 Render Tree에 나타나지 않는다.
  - CSSOM 에서 opcity:0, visibility:hidden이면 Render Tree에 나타난다.

<br></br>

# Critical rendering path

- 브라우저에서 URL 입력 시 동작 순서
  - requests/response : HTML file 요청/응답
  - loading : HTML file Loading
  - scripting : 한줄 한줄 읽어가며 DOM요소로 변환하는 과정
  - rendering : Render Tree 생성
  - layout : 요소의 위치 및 크기 계산
  - painting : 그린다
- Construction Part
  - HTML 페이지를 브라우저가 이해할 수 있도록 브라우저 언어로 바꾸는 부분
    - DOM - CSSOM - RenderTree
  - DOM 요소가 작거나 , CSS 규칙이 작을 수록 RenderTree 생산하는 시간이 빨라진다
- Operation
  - 브라우저가 이해할 수 있는 Render Tree를 이용해서 실제 브라우저 window에 그림
    을 그려주는 부분
    - layout - paint - composition
    - layout : 요소마다 레이아웃을 구상
    - paint : 레이어 별로 준비 → 브라우저 성능 개선을 위한 과정
    - composition: 준비된 레이어를 함께 모아서 표기
  - JavaScript or CSS로 DOM 조작시 composition만 일어나게하는 것이 베스트

<br></br>

# DOM 조작

- querySelector()
  - 해당되는 첫번째 DOM 요소를 찾아올 수 있는 API
  - CSS의 모든 선택자를 이용하여 사용가능
  ```jsx
  const image = document.querySelector("img");
  console.log(image); // img DOM 정보 출력
  ```
- querSelectorAll()
  - 해당되는 모든 요소를 가져올 수 있다.
- createElement()
  - 요소 만들기
- setAttribute()
  - 속성값 넣기
- appendChild()
  - 새로운 자식 요소를 넣는다.
  - 제일 끝 부분에 추가
- insertBefore(새로운 노드, ref노드)
  - ref 노드 이전에 새로운 노드 삽입
- innerHTML
  - 태그안의 내용을 설정

<br></br>

# innerHtml vs element

- innerHtml
  - 한 번 업데이트한 다음에 다시 변경할 일이 없을때 사용
- element
  - element의 ref를 가지면서 많은 동작을 해야한다면 createElement를 이용하여만들
    어서 사용
