import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


export const PageTemplate = ({children}) => {
    return(
        <>
          <Header></Header>
          <main>
             {children}
             <Footer></Footer>
          </main>
          
        </>
    )
}