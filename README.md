# 2048 Games

## 2048 Games 구현

- 기간 : 2020.12.11.
- 참조 사이트 : Inflearn 강의
- `react-hooks`

---

## 1. 개요

> `React`를 통한 개발을 하다가, 클래스형 컴포넌트 외 함수형 컴포넌트 + `Hooks`를 통해서 컴포넌트를 만들어 봐야겠다는 생각을 했다. 컴포넌트를 만들기 전, 예제 프로젝트를 해보면 좋겠다고 생각했고, 예제 프로젝트를 따라하면서 React hook에 대한 개념을 익혔다.

### 개발 내역

1. 각 Cell들의 상태 관리, 키보드 핸들러, 현재 score, bestscore에 대한 상태관리를 Hooks를 사용해서 관리함.

2. css는 실제 사이트에 있는 style을 가져와ㅏ서, `index.css`에 저장

3.

## 2. 상세 내용 (Component, js 설명)

### Component

0. App.js : 상위 Component이므로, 여기서 score, bestScore에 대한 hooks를 선언해줌.

   ``` javascript
   const [score, setScore] = useState(0);
   const [bestScore, setBestScore] = useLocalStorageNumber("bestScore", 0);
   ```

   `score`가 `bestScore`보다 클 경우에만 setter함수를 호출할 수 있도록 함.

1. AboveGame.js : 상단에 위치한 Component. 게임에 대한 설명

2. Game.js : 프로젝트의 주가 되는 코드.

   - keyboardHandler는 별도로 정의한 hook에서 불러옴 (useMoveTile)
   - tileList에 대한 hooks 선언. 초기값을 불러옴. 초기값은 random하게 생성해주는 getInitialtileList함수를 통해 설정. (tile.js)
   - `map()` 메서드 : 배열 내의 모든 요소 각각에 대한 주어진 함수 호출 및 호출한 결과를 모아 새로운 배열을 반환
     ``` javascript
     titleList.map((item) => (<Tile key={item.id} {...item}>))
     ```
   - lodash 함수 내의 `times` : 콜백함수 조건에 맞게 반복횟수만큼의 데이터를 배열로 반환. 초기화 시킬 때 유용함.

   ``` javascript
   times(3, _.constant(0)); // => [0,0,0]
   times(MAX_POS, (index2) => (
       <div key={index2} className="grid=cell">
   )) // => MAX_POS 만큼 생성
   ```

3. Header.js : 점수 나오는 컴포넌트
4. Tile.js : `Tile` 컴포넌트를 `Game` 컴포넌트에서 별도로 분리함. className에 classnames를 불러와서 삼항 연산자 대신 사용. 조건에 따라 className 부여가 가능함.

### Hooks

1. useLocalStorage.js : LocalStorage에 있는 bestScore값을 불러옴.

   (1) useEffect를 통해서, key(bestScore)값이 변하는 경우에 hook이 불러오도록 함수를 작성함.

   ``` javascript
   useEffect(() => {
       const valueStr = window.localStorage.getItem(key); //문자열이 저장되므로
       if (valueStr) {
       setValue(Number(valueStr));
       }
   }, [key]); //key가 변경될 때만 하면 됨

   ```

   (2) 키 값을 전에 `localStorage`에 설정된 값이랑, 현재 값이랑 비교해서, 변화가 있을 경우에 set하도록 설정

   ``` javascript
   useEffect(() => {
       const prev = window.localStorage.getItem(key);
       const next = String(value);
       if (prev !== next) {
       window.localStorage.setItem(key, next);
       }
   }, [key, value]);
   return [value, setValue]; //componentwillunmount랑 같은 역할을 한다고 생각
   ```

2. useMoveTile.js : 타일을 움직이기 위함. keyboard에 대한 이벤트 핸들러와, 그에 따른 타일 움직일 때의 hooks 정의. 그 외에 reducer. reducer는 현재 score을 타일의 `isMerged`상태에 따라 더하거나, 그대로 두게 설정함. `setScore`을 통해서 현재 score 관리.

### Helper

1. keyboard.js : `hotkeys-js` 라이브러리 사용. 키보드에 조작 핸들러 및 callback함수 호출
2. number.js : Random하게 Integer을 뽑아주는 함수
3. tile.js : Tile과 관련된 함수들
   - moveTile 함수 : 코드파일을 참조함
   - checkCollision 함수 : 위치 검사 함수. 타일이 존재하는지, tilelist가 있는지 충돌 검사.
   - makeTile 함수 : 새로운 타일 생성 함수
4. constant.js : `MAX_POS` 상수 선언
