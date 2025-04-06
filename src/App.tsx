import { ToastContainer } from 'react-toastify'
import useRouteElements from './hooks/useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return (
    <div>
      {routeElements} <ToastContainer />
    </div>
  )
}

export default App
