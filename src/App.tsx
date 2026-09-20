import AttractionList from './components/AttractionList'
import { attractions } from './data/attractions'

function App() {
  return (
    <div className="app">
      <h1>Khám phá Huế</h1>

      <AttractionList attractions={attractions} />
    </div>
  )
}

export default App