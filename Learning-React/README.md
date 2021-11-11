# Learning React Study

## 1. Hooks

1. useState

   - 함수형 컴포넌트에서 상태를 관리하기위해 사용

<br>

2. useEffect

   - 컴포넌트가 렌더링될 때마다 특정 작업을 수행하기위해 사용 (기본적으로 렌더링
     되고 난 직후 실행)
   - 클래스 컴포넌트의 componentDidMount + componentDidUpdate 형태로 볼 수 있다.

   ```javascript
   // ========= 1. 맨 처음 렌더링될 때만 실행
   useEffect(() => {
     console.log("마운트 될때만 실행");
   }, []); // 두번째인자로 빈 배열 입력

   // ========= 2. 특정 값이 변경될 때만 실행
   useEffect(() => {
     console.log(name);
   }, [name]); // 두번째인자로 배열안에 검사하고 싶은 값을 입력

   // ========= 3. 언마운트되기 전이나 업데이트되기 전
   useEffect(() => {
     return () => {
       // 뒷정리 함수
       console.log("clean up");
     };
   }, []); // 빈배열 입력 시 언마운트 될때만 뒷정리 함수 호출
   ```

<br>

3. useCallback
   - 렌더링 성능 최적화시 사용
   - 함수를 리액트 내부 메모리에 저장
   - 첫번째 파라미터는 함수, 두번째 파라미터는 배열
   - 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야하는지 명시

<br>

4. useRef
   - 함수형 컴포넌트에서 ref 사용
   - ref : DOM을 직접 건드려야 할 때 사용
