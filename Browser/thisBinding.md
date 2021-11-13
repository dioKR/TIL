# this 바인딩

- Javascript에서 어떤 클래스안에 있는 함수를
- 다른 콜백으로 전달할 때 해당 함수의 클래스 정보가 사라진다.
- 이러한 경우 클래스의 정보와 멤버 함수를 묶는 것이 바인딩

- 작성법 3가지

  - 직접 바인딩 : 잘 사용하지 않는다.

    ```javascript
    constructor() {
        this.field = document.querySelector(".field");
        this.onClick = this.onClick.bind(this) // 직접 연결해서
        this.field.addEventListener("click", this.onClick); // 콜백함수로 넘겨준다.
    }

    onClick(event) {
        //...
    }
    ```

  - arrow function : arrow function은 this가 유지된다.

    ```javascript
    constructor() {
        this.field = document.querySelector(".field");
        this.field.addEventListener("click", (event) => this.onClick(event)); // arrow function을 콜백함수로 넘겨준다.
    }

     onClick(event) {
        //...
    }
    ```

  - 함수를 멤버 변수로 만든다.

    ```javascript
    constructor() {
        this.field = document.querySelector(".field");
        this.field.addEventListener("click", this.onClick); // 멤버 변수를 콜백함수로 넘겨준다.
    }

    onClick = (event) => {
        ...
    }
    ```
