import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I am happy" name="dave" />
      <EventsFunctional />
      <EventsClass />
      <br />
      <EventBinding greeting="What a lovely day!" name="Dave"/>
      <br />
      <ConditionalRenderingClass />
      <br />
      <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;
