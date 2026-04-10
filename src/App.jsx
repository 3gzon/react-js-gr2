import react from 'react'
import Header from "./components/Header/Header";
import StringProp from './components/StringProp';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import InputState from './components/InputState';
import RenderList from './components/list-array/RenderList';
import ObjectList from './components/list-array/ObjectList';

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
      <hr />
      <RenderList />
      <ObjectList/>
      <hr />
    </>
  )
}

export default App
