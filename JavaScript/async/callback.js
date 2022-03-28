"use strict";
// 자바스크립트는 동기적이다.
// 코드가 호이스팅된 이후부터 작성한 순서대로 하나하나 작동한다.
// 호이스팅 : var, function 선언이 제일 위로 올라가는 것

// 동기 : 정해진 순서대로 코드가 실행되는 것
console.log("1");
console.log("2");
console.log("3");

// 콜백의 경우
// Synchronous callback : 즉각적으로 실행하는 동기적 콜백
// 함수의 선언은 호이스팅된다.
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// Asynchronous callback : 언제실행되는지 예측할수 없는 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

//  비동기 : 언제 코드가 실행될지 예측할 수 없는것
// setTimeout : 브라우저 API
setTimeout(function () {
  console.log("5");
}, 1000);

// Arrow function
setTimeout(() => console.log("8"), 1000);

// 콜백 지옥 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "oyh0470" && password === "yes") ||
        (id === "oyh0471" && password === "yes")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "yehwan") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
