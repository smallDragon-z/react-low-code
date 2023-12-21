import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

// Or use plain objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default router
