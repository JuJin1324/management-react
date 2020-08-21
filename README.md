# management-react
React와 Node.js를 활용한 고객 관리 시스템 개발 강의 구현 프로젝트: [React와 Node.js를 활용한 고객 관리 시스템 개발 강의 - 동빈나](https://www.youtube.com/watch?v=_yEH9mczm3g&list=PLRx0vPvlEmdD1pSqKZiTihy5rplxecNpz&index=1)

## Chapter1
React 개발환경 구축 실습

### macOS
1. nodejs 설치: `brew install nodejs`
2. workspace 생성 및 이동: `mkdir ~/workspace-git-react; cd ~/workspace-git-react`
3. create-react-app 패키지 설치: `npm install -g create-react-app`
4. react 프로젝트 생성 및 이동: `create-react-app management-react; cd management-react`
5. react 실행: `yarn start`

## Chapter2
vscode 를 통한 React 소스코드 edit 하는 과정 -> Intellij idea 사용함으로서 이부분 건너뜀.

### IntelliJ 제품군을 통한 React 실행 방법
1. Command(윈도우에선 Ctrl) + Shift + a 에서 `run...` 타이핑 후 앤터
2. 좌측 상단 `+` 버튼 클릭 -> npm 
3. Command 항목에는 `run`, Scripts 항목에는 `start` 입력 후 Apply 버튼을 눌러 저장
4. 실행  

## Chapter3
### git clone한 react 프로젝트 환경 구축하기
커맨드 실행: `yarn install`

## Chapter4
### 고객 컴포넌트 만들기
* class 생성 후 외부 파일에서 해당 클래스를 사용하기 위해서는 마지막에 `export default 클래스이름` 구문을 넣어주어야함.
* 외부에서 Class로 넘겨주는 Parameter를 props 라고 부르며 클래스 내부에서는 외부에서 받은 값을 `this.props.변수이름` 으로 사용 가능.

## Chapter5
### 이미지
랜덤으로 이미지를 받을 수 있는 사이트: https://placeimg.com
* 예시: 64x64 이미지를 랜덤으로 요청: https://placeimg.com/64/64/any

### Syntax
* React 는 JSX 문법을 따르며 JSX 문법에 따르면 render() 함수안에서 return 시에 두줄 이상이 되면 <div> 태그로 감싸주어야한다.   
예시
``` jsx
// 정상
render() {
        return (
            <img src={this.props.image} alt="profile"/>
        )
}

// 비정상 오류
render() {
        return (
            <img src={this.props.image} alt="profile"/>
            <h2>{this.props.name}({this.props.id})</h2>
        )
}

// 정상
render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
}
```

* map 함수 사용시 콜백에 클래스 생성시 key에 unique한 값을 주어야하며 key를 받은 클래스 내부에서는 key를 this.props로 사용할 수 없다.
(key는 props 가 아니라는 에러를 보게될 것이다.)

## Chapter6
### Material UI
설치: `npm install @material-ui/core`

### Syntax
`function App()` vs `class App extends Component`
* function App() 의 경우 props 사용시 this.props가 아닌 선언시에 function App(props) 이렇게 파라미터로 props 를 기술한다.   
* 참조사이트: [[React.JS] 강좌: 함수형 컴포넌트 (Functional Component)](https://velopert.com/2994)

## Chapter7
* nodemon 설치: `npm install -g nodemon`
* nodemon 설치한다고 프로젝트에 node_modules 생성 안됨. `yarn install` 을 통해서 package.json 에 기술한 모듈들 설치.

## Chapter8
### Server & Client 동시 실행
프로젝트 루트 디렉터리에서 `yarn dev` 명령어 실행

### HTTPie 를 이용한 API 확인
* HTTPie 가 설치되어 있지 않은 경우 설치: `brew install httpie`
* HTTPie 가 설치되어 있는 경우 API 확인: `http -v localhost:5000/api/customers`


### Syntax
* props : 변경되지 않는 상수
* state : 변경 가능한 변수

## Chapter9
### React Life Cycle
React 시작시: constructor() -> componentWillMount() -> render() -> componentDidMount()
props 혹은 state 변경 시: shouldComponentUpdate() -> render()

### Syntax
React map 함수 사용: 배열의 각 요소를 변환시켜주는 함수   
ex) [1, 2, 3, 4, 5] 인 배열에서 각 요소에 +5를 해준 배열로 변경하고 싶다.
```javascript
let arr = [ 1, 2, 3, 4, 5 ];
console.log(arr);     // [ 1, 2, 3, 4, 5 ]
let plus_5_arr = arr.map(c => c+5);
console.log(plus_5_arr);  // [6, 7, 8, 9, 10 ]
```™

`const {completed} = this.state;` 구문에 관한 참조 사이트: [누구든지 하는 리액트 4편: props 와 state](https://velopert.com/3629)

* fetch(): 