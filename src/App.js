import './App.css';
import DataFetchingOne from './components/DataFetchingReducer/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingReducer/DataFetchingTwo';
import CounterOne from './components/customHookDemo/CounterOne';
import CounterTwo from './components/customHookDemo/CounterTwo';
import DocTitleOne from './components/customHookDemo/DocTitleOne';
import DocTitleTwo from './components/customHookDemo/DocTitleTwo';
import UserForm from './components/customHookDemo/UserForm';
// import DataFetching from './components/dataFetchingEffect/DataFetching';
import ReducerContextContainer from './components/reducerWithContext/ReducerContextContainer';
import FocusInput from './components/useRefDemo/FocusInput';
// import ComponentA from './components/useContextDemo/ComponentA';
// import { UserContext } from './components/useContextDemo/userContext';
// import ConditionallyRunEffect from './components/useEffectDemo/ConditionallyRunEffect';
// import HookCounterEffect from './components/useEffectDemo/HookCounterEffect';
// import HookMouseContainer from './components/useEffectDemo/HookMouseContainer';
// import RunEffectOnce from './components/useEffectDemo/RunEffectOnce';
// import CounterTwoEx from './components/useReducerDemo/CounterTwoEx';
// import HookCounterReducer from './components/useReducerDemo/HookCounterReducer';
// import HookCounter from './components/useStateDemo/HookCounter';
// import HookCounterFourArray from './components/useStateDemo/HookCounterFourArray';
// import HookCounterThreeObject from './components/useStateDemo/HookCounterThreeObject';
// import HookCounterTwo from './components/useStateDemo/HookCounterTwo';

const containerStyle = {
  marginBottom: '24px'
}

function App() {

// const abcObject = {id: '1', name: 'nikesh'};

  return (
    <div className="App">
      <div className="App" style={containerStyle}>React Hooks</div>

      {/* custom hooks */}
      <UserForm />
      {/* <CounterOne />
      <CounterTwo/> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* useRef demo */}
      {/* <FocusInput /> */}

      {/* data fetching reducer effect context */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}

      {/* reducer and context together */}
      {/* <ReducerContextContainer /> */}

      {/* useReducer example */}
      {/* <CounterTwoEx /> */}
      {/* <HookCounterReducer /> */}

      {/* useContext example */}
      {/* <UserContext.Provider value={JSON.stringify(abcObject)}>
        <ComponentA/>
      </UserContext.Provider> */}

      {/* useEffect examples */}
      {/* <DataFetching /> */}
      {/* <HookMouseContainer /> */}
      {/* <RunEffectOnce /> */}
      {/* <ConditionallyRunEffect /> */}
      {/* <HookCounterEffect /> */}

      {/* useState examples */}

      {/* <HookCounterFourArray /> */}
      {/* <HookCounterThreeObject /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
