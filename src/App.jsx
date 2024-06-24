import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Closing } from './components/pages/Closing'
import { Contact } from './components/pages/Contact'
import { Cover } from './components/pages/Cover'
import { Dresscode } from './components/pages/Dresscode'
import { EntryPass } from './components/pages/EntryPass'
import { Gifts } from './components/pages/Gifts'
import { Itinerary } from './components/pages/Itinerary'

function App() {


  return (
    <>
      <Navbar />
      <Cover />
      <Itinerary />
      <EntryPass />
      <Gifts />
      <Contact />
      <Dresscode />
      <Closing />
      <Footer />
    </>
  )
}

export default App
