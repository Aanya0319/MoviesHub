import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Children } from 'react'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Applayout } from './Applayout/applayout'

function App() {

    const router=createBrowserRouter([
         {
          path:"/",
          element:<><Applayout></Applayout></>,
          children:[

            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"/about",
              element:<About></About>
            },
            {
              path:"/contact",
              element:<Contact></Contact>
            }
         ]
         }
    ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
