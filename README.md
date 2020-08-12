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

## Chapter3
### git pull한 react 프로젝트 환경 구축하기
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
