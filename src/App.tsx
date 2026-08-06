import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import { GlobalCss } from "./styles"
import ProductsList from "./components/ProductsList"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ProductsList />
      </>
    )
  }
])

function App() {

  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
