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
  },
  {
    path: "/sushi",
    element: (
      <>
        <div>!! Hioki Sushi !!</div>
      </>
    )
  },
  {
    path: "/macarrao",
    element: (
      <>
        <div>!! La Dolce Vita Trattoria !!</div>
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
