# Frontend common

### 언어

```text
가장 자신있는 언어가 무엇인가요?
```

<details>
<summary>꼬리질문</summary>

#### JavaScript가 아닌 경우

```text
프론트엔드 개발자를 희망하는데 자신있는 언어가 JS가 아닌 이유는 무엇인가요?
```

</details>

### 학습

```text
프론트엔드는 변화가 빨라서 지속적으로 학습해야합니다.
어떤 기술을 어떤식으로 학습하고 있나요?
```

# JavaScript

### JS 변수 선언 방식

```text
JavaScript의 변수 선언 방식에는 어떤것이 있으며 차이점은 무엇인가요?
```

<details>
<summary>답변</summary>

#### var

- 중복 선언 가능
- 재선언, 재할당 가능으로 인해 문제 변수 위치 파악이 힘들다는 단점이 있음.
- 해결을 위해 ES6부터 let, const 도입

#### let

- 중복 선언 불가, 재할당 가능

#### const

- 불변(immutable)
- 재선언, 재할당 불가

</details>

# JavaScript Framework

```text
React, Vue와 같은 Framework를 사용하는 이유가 무엇이라고 생각하나요?
```

<details>
<summary>Framework 사용할 때 좋은 코드</summary>

```text
해당 기술을 사용할 때 만들 수 있는 좋은 코드란 무엇이라고 생각하나요?
```

```text
방금 말한 내용을 본인의 프로젝트에 어떤식으로 적용하였나요?
```

</details>

<details>
<summary>state management</summary>

#### state management

```text
상태관리 라이브러리를 사용하는 이유는 무엇인가요?
```

```text
어떤 기술을 사용하여 (어떤 방식으로) state를 관리해보셨나요?
```

</details>



### 성능 최적화

```text
JavaScript 성능 최적화를 위해 어떤 방법을 사용해보셨나요?
```

# TypeScript

```text
타입스크립트 사용 경험이 있나요? 언어의 타입 시스템에 대해 알고 있나요? 
```

```text
타입스크립트를 사용하는 이유가 무엇이라고 생각하나요?
```


# Browser

```text
브라우저 저장소에는 어떤 종류가 있으며 그들의 차이점은 무엇인가요?
```

<details>
<summary>답변</summary>

### LocalStorage

- 로컬 스토리지는 저장한 데이터를 지우지 않는 이상 영구적으로 보관이 가능합니다. 도메인마다 별도로 로컬 스토리지가 생성됩니다.
- 최대 크기: 5MB
- 사용 예시: 아이디 저장, 다크모드 저장

### SessionStorage

- 세션 종료 시 클라이언트에 대한 정보가 삭제됩니다.
- 최대 크기: 5MB
- 사용 예시: 입력 폼 정보, 비로그인 장바구니

### 쿠키(Cookie)

- 웹 사이트에서 쿠키를 설정하면, 모든 웹 요청에는 쿠키 정보가 포함됩니다. => 서버 부담 증가
- 최대 크기: 4KB
- 사용 예시: 로그인 토큰, 회원 정보

</details>