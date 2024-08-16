import { useGlobalContext } from './context'

const ThemeToggle = () => {
  const { greeting } = useGlobalContext()
  console.log(greeting)

  return <div>ThemeToggle</div>
}

export default ThemeToggle
