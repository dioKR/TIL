# Array.reduce

- 배열을 기본 타입의 값이나 다른 객체로 변환
- reduce와 reduceRigh 함수를 사용하면 객체를 수, 문자열, 불린, 객체, 함수 값으로
  변환할 수 있다.

- 최대 값 구하기

  ```javascript
  const ages = [21,18,42,40,64,63,34];
  const max =ages.reduce((max,value)=> (value > max : value : max) ,0)
  ```
