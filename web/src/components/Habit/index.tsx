interface HabitProps {
  desempenho: number
}
export function Habit ({desempenho}: HabitProps){
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">{desempenho}</div>
  )
}