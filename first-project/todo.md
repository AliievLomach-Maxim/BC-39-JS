# Module 1 > Less 2

- Children

- devTools

- styled
  - inLine style
  - vanilla css
  - module css
    - composition class
    - Classnames || clsx
  - CSS in JS
    - styled-components
      - вкладеність

# Module 2 > Less 1

- Class Component

- Events

  - Event delegation
  - inLine clb Function
  - clb function with context
    - public values
    - constructor && prototype
    - SyntheticEvent Object vs Async

- State

  - react flow
  - update state with setState(update)
  - prevState
  - upper state

- Kahoot

- Modal

# Module 2 > Less 2

- onChange vs control form
- onSubmit
- class Form
- form reset
- radio
  - checked
  - value
- checkBox
- Register form

# Module 3 > Less 1

- Mounting
- Updating
- Unmounting
- componentDidMount
- componentDidUpdate(prevProps, prevState)
- componentDidUnmount

- close modal by ESC
- set data to localStorage

- shouldComponentUpdate vs PureComponent
- refactoring

# Module 3 > Less 2

- http how to use
- architecture
  - search -> app -> content
  - validation search with react-hot-toast
  - componentDidUpdate in content
  - fetch in content
  - loading in content
  - destructuring state
- http errors
- pattern stateMachine with status['idle','pending','rejected','resolved']
- refactor -> separation of components
- refactor fetch to new file

# Module 4 > Less 1

- useState
  - nothing save state
  - one State = one useState
  - convert class to hooks
- useEffect
  - lazy load
  - custom Huks

# Module 4 > Less 2

- useEffect first render <Modal/>
- useEffect every render <LoginForm/>
- useEffect clear after render <Modal/>

- useEffect first render <Users/>
- useEffect update on any change users <Users/>
- useEffect update on change users.length with useRef <Users/>
- optional chain <Users/>
- refactor with toast <Users/>

- edit class to huk <ContentInfo/>
- if return <ContentInfo/>
- batching in React 18

- kahoot

- useReducer <Counter/>
- action.type
- action.payload
- dispatch

- useMemo <TestUseMemo/>
- complexCompute <TestUseMemo/>
- useEffect vs useMemo <TestUseMemo/>

- useCallback <TestUseMemo/>

- Profiler

- useContext
- Provider
- toggleState
- useAlert

# Module 5 > Less 1

- BrowserRouter <Index.js/>
- Routes & Route <App.js/>
- Link to <Header/>
- Outlet & nested routes <HomePage/>
- add <Layout/>
- use index
- add Context
- global save search result <Context/>
- PageDetails for news & users
- useParams

# Module 5 > Less 2

- useSearchParams <Users/>
- objectFromEntries
- BackBtn with useLocation <UserDetails/>
- location.state
- lazy & suspense
- loginPage
- PrivateRoute

# Module 6 > Less 1

- how it works
- install redux

- function createStore
- function reducer
- reducer default value
- getState
- dispatch
- switch

- redux connect to react
- install react-redux
- Provider

- useSelector
- useDispatch
- set step
- ...state

- reducer.js
- actions.js
- types.js

- initialState
- combineReducer

# Module 6 > Less 2

- redux-devtools
- redux-toolkit
- createAction
- createReducer
  - action.toString()
- combineReducer not use at the top level

- selectors
- redux persist
  - combineReducer
  - serializableCheck
  - create persist for one state
  - persist back object
  - whitelist
