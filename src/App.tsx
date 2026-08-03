import Header from "./components/Header"
import { Container, GlobalCss } from "./styles"

function App() {

  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        hello world
      </Container>
    </>
  )
}

export default App
