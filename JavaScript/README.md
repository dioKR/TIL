# JavaScript (with web) 요약 정리

<br>

## 🔥 함수

<hr>

<br>

### 👉🏻 &nbsp; 함수를 인자로 전달하기

```javascript
function hello() {
  console.log("hello");
}

function doSomething(func) {
  console.log(func);
}

/*
    함수를 인자로 전달하기 위해서는 ()를 붙이면 안된다.
    결과 값 : f hello() {
                console.log("hello");
            }
*/
doSomething(hello); // O

/*
    ()를 붙이면 해당함수가 호출된다.
    결과 값 : hello
*/
doSomething(hello()); // X
```

<br>

### 👉🏻 &nbsp; 함수 선언과 실행 순서

- 웹 브라우저가 JS를 해석할때 함수 선언을 가장 먼저하기 때문에 프로그램 흐름에영
  향을 주지 않는다.

<br>

### 👉🏻 &nbsp; var와 Hoisting

- 호이스팅
  - 변수의 선언과 할당을 분리해서 선언부를 scope의 가장 위쪽으로 끌어올린다.
  - 실제 소스코드에서 끌어올리는 것은 아니고 JS interpreter가 JS Source에서 var
    만 기억해둠으로서 선언한 것과 같은 효과를 낸다.
- var
  - 호이스팅뿐만 아니라 재선언과 재할당의 문제도 있다.

<br>

### 👉🏻 &nbsp; 매개변수(parameter)와 인수(argument)

```javascript
/*
    매개변수 : 함수 선언 시 외부에서 값을 받아 줄 변수
*/
function doSomething(매개변수) {}

/*
    인수 : 함수 호출시 함수안에 넣는 실제 값
*/
doSomething(인수);
```

<br>

## 🔥 이벤트

<hr>

<br>

### 👉🏻 &nbsp; 이벤트(event)와 이벤트 처리기(event handler)

- event : 웹 문서 영역 안에서 이루어지는 동작

  - ex ) 마우스 클릭, 키보드 누르기, 문서 로딩 ...

  <br>

- event handler : 이벤트가 발생하면 처리하는 함수
  - 기본형식 : on + 이벤트명
  - ex ) click 이벤트 -> onclick 이벤트 처리기
