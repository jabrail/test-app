import './App.css'
import useMockAdapter from './api/useMockAdapter'
import { Main } from './view/Main'

function App() {

  useMockAdapter();

  return (
    <>
      <Main></Main>
    </>
  )
}

export default App
