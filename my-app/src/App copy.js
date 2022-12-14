import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropParent';
import RenderingLists from './components/RenderingLists';
import LifeCycleCDM from './components/LifeCycleCDM';
import LifeCyleCDU from './components/LifeCyleCDU';
import LifeCycleCWU from './components/LifeCycleCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHook from './components/ControlledFormHook';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterOnlyOnce from './components/UseEffectCounterOnlyOnce';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className="App">

      <div style={{border: '5px solid blue'}}>
        <h1>Hooks - Clean up functions</h1>
        <h3>any function executed before a component unmounts</h3>
        <h4>so the browser or the DOM don't have unused event listeners, timers, hung network requests</h4>
        <p>UseEffectCounterOnlyOnce.js</p>
        
        <UseEffectCounterContainer />
        <br />
      </div>
      <div style={{border: '5px solid blue'}}>
        <h1>Running effects on once - eg. when a component mounts</h1>
        <p>UseEffectCounterOnlyOnce.js</p>
        {/* <UseEffectCounterOnlyOnce /> */}
        <br />
      </div>
      <div style={{border: '5px solid blue'}}>
        <h1>using hook 'useEffect' to update elements after every render</h1>
        <p>UseEffectCounter.js</p>
        <UseEffectCounter />
        <br />
      </div>
      <div style={{border: '5px solid red'}}>
        <h1>Use Hooks with Objects - pt1</h1>
        <p>UseStateWithObjects.js</p>
        <br />
        <UseStateWithObjects />
      </div>
      <div style={{border: '5px solid red'}}>
        <br />
        <h1>UseStateWithArrays - hooks</h1>
        <p>UseStateWithArrays.js</p>
        <UseStateWithArrays />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <br />
      <h1>Forms - Using Hooks</h1>
      <p>ControlledFromHook.js</p>
      <ControlledFormHook />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Forms - uncontrolled forms</h1>
      <h3>Dom controls some elements alongside React</h3>
      <UncontrolledForm />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Forms - controlled forms</h1>
      <h3>React controls everything</h3>
      <ControlledForm />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Life Cycle CWU - ComponentWillUnmount</h1>
      <LifeCycleCWU />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Life Cycle CDU - Component Did Update</h1>
      <LifeCyleCDU />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Life Cycle Component Did Mount</h1>
      <LifeCycleCDM />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Functional and Class events</h1>
      <StatefulGreetingWithPrevState greeting="I am happy" name="dave" />
      <EventsFunctional />
      <EventsClass />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <EventBinding greeting="What a lovely day!" name="Dave"/>
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      {/* <ConditionalRenderingClass /> */}
      <br />
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <NestingComponents />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>This is the one!</h1>
      <MethodsAsPropsParent />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Rendering Lists</h1>
      <RenderingLists />
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <h1>Search Bar</h1>
      </div>
      <br />
      <div style={{border: '5px solid red'}}>
      <SearchBar />
      </div>
      </div>
  );
}

export default App;
