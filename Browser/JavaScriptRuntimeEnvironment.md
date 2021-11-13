# JavaScript RunTime Environment

- 멀티 쓰레딩이란 한 프로세스 안에서 여러가지 쓰레드가 동시다발적으로 일어나는것
  을 의미한다. => 효율적으로 프로그래밍이 동작
- Java => Multi-threading 지원

<br>

- JavaScript => Single Threaded Language
- 자바스크립트에는 멀티쓰레딩을 하는 방법은 없지만 자바스크립트가 동작하는
  Browser (프로그램) 위에서는 여러가지 쓰레드가 존재
- 즉, 웹 apis 를 이용하면 멀티쓰레딩이 가능
- 또한 자바스크립트의 Runtime 환경에서는 멀티쓰레딩 같은 효과를 얻을 수 있다.
  ( + 이벤트 루프를 통해서 다양한 동작을 실행 할 수 있다.)

<br>

- 자바스크립트 엔진

  - Memory Heap
  - Call Stack
    - 함수의 호출 순서를 기억하기위해 쓰이는 자료구조

<br>

- Task Queue
  - Web APIs를 통해서 들어온 콜백함수를 저장하는 용도로 사용되는 자료구조
  - Event Loop가 해당 콜백함수를 Task Queue에 저장한다.
  - Call Stack과 Task Queue 사이에는 Event Loop가 존재
  - Call Stack이 비어있다면 Event Loop가 Task Queue에 존재하는 콜백함수를 Call
    Stack으로 전달해준다.
  - Call Stack에서 실행중인 함수는 끝날때 까지 보장된다.(중간에 다른태스크를 할
    수 없다)

<br>

- Render
  - 브라우저에서 변형된 코드가 주기적으로 업데이트 되기 위해서 주기적으로 호출
  - Request Animation Frame API 호출 시 등록한 콜백은 Request Animation Frame
    Queue에 들어온다

<br>

- Microtask Queue
  - 프로미스에 등록된 콜백함수, mutation observer에 등록된 함수들이 들어온다.

<br>

- Call Stack , Task Queue, Microtask Queue, Render 사이에 Event Loop가 돌면서 지
  켜보고 있음

- 브라우저에서는 업데이트 내용을 사용자에게 1초동안 60frames을 보여주려고 한다.
- 60fps(16.7ms)
- 사람 눈에 애니메이션이 자연스러워 보여지기 위해서는 1초당 60개의 프레임이 필요
- event loop는 렌더를 항상 업데이트하지않고 16.7ms 이내에 한번씩 업데이트 한다.
- Micorotask Queue에서는 존재하는 함수들이 모두 실행될때까지 event loop가 머물고
- Task Queue에서는 하나의 함수만 Call Stack으로 넘기면서 같이 event loop가 넘어
  간다.
