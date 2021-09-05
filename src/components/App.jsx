import '../style/index.scss'
import Recipes from './Recipes'
import investory from '../assets/cover.jpg'
const App = () => {
    return(
      <>
      <section className="hero"></section>
      <main>
          <section>
              <h1>Oh Hai, React</h1>
          </section>
          <img src={investory} alt="investory" width="250"/>
          <Recipes/>
      </main>
      
      </>
    )
}
export default App