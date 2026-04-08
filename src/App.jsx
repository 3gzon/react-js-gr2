import react from 'react'
import Header from "./components/Header/Header";
import StringProp from './components/StringProp';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import InputState from './components/InputState';

function App() {
  const firstName = "egzon";
  const lastName = "uka";
  return (
    <>
      <Header />
      <StringProp firstName={firstName} lastName={lastName} />
      <NumberState />
      <StringState />
      <BooleanState />
      <InputState />
    </>
  )
}

export default App
