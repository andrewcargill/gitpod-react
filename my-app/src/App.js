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

function App() {
  return (
    <div className="App">
      <br />
      <h1>Search Bar</h1>
      <SearchBar />
      <br />
      <h1>Forms - uncontrolled forms</h1>
      <h3>Dom controls some elements alongside React</h3>
      <UncontrolledForm />
      <br />
      <h1>Forms - controlled forms</h1>
      <h3>React controls everything</h3>
      <ControlledForm />
      <h1>Life Cycle CWU - ComponentWillUnmount</h1>
      <LifeCycleCWU />
      <h1>Life Cycle CDU - Component Did Update</h1>
      <LifeCyleCDU />
      <br />
      <h1>Life Cycle Component Did Mount</h1>
      <LifeCycleCDM />
      <br />
      <StatefulGreetingWithPrevState greeting="I am happy" name="dave" />
      <EventsFunctional />
      <EventsClass />
      <br />
      <EventBinding greeting="What a lovely day!" name="Dave"/>
      <br />
      {/* <ConditionalRenderingClass /> */}
      <br />
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      <br />
      <NestingComponents />
      <br />
      <h1>This is the one!</h1>
      <MethodsAsPropsParent />
      <br />
      <h1>Rendering Lists</h1>
      <RenderingLists />
    </div>
  );
}

export default App;
