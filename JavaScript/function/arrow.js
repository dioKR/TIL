// 1. fetch는 URL을 통해서 데이터를 받아온다. return 값은 Promise 객체
// 2. Promise 객체는 자바스크립트 비동기 처리에 사용된다.

// Promise는 자바스크립트에서 비동기적인 동작을 잘 처리할 수 있게 해준다.
// 즉, Promise는 자바스크립트 비동기 처리에 사용되는 객체
// 자바스크립트의 비동기 처리란 '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성'을 의미
console.log(
  fetch("https://api.randomuser.me/?nat=US&results=1")
    .then((res) => res.json())
    .then((json) => json.results)
    .then(console.log)
    .catch(console.error)
);

// async는 해당함수를 비동기함수로 만든다.
// async키워드를 쓴 함수 내부에서만 await을 사용할 수있다.
// await은 비동기함수를 동기적으로 만들어준다.
const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = await res.json();
  console.log(results);
};
// res객체의 json() 함수 역시 Promise를 반환
// 따라서 비동기 처리임으로 await이 필요

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

getFakePerson();

const getPeople = (count) =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });

getPeople(5)
  .then((members) => console.log(members))
  .catch((error) => console.log(error.message));
