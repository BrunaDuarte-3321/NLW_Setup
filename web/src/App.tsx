import { Habit } from "./components/Habit";
import './styles/global.css'

export function App() {

  return (
    <>
      <Habit desempenho={3}/>
      <Habit desempenho={10}/>
      <Habit desempenho={20}/>
      <Habit desempenho={30}/>
    </>
  )
}

