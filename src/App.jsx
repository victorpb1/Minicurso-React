import Header from "./components/header"
import Content from "./components/content"
import Footer from "./components/footer"

import "./App.css"

const App = () => {
  return (
    <>

        <Header title="Qual é a Palavra?"/>
        <Content/>
        <Footer mensagem="Copyright © 2023 Victor Pereira" link="https://github.com"/>
    </>
  )
}

export default App