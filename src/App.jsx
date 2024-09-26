import './App.css'
import LandingPages from './Stores/pages/LandingPages'
import { Routes , Route } from 'react-router-dom'
import MobilePages from './Stores/pages/MobilePages'
import WatchePages from './Stores/pages/WatchePages'
import BookPages from './Stores/pages/BookPages'
import MensPages from './Stores/pages/MensPages'
import FridgePages from './Stores/pages/FridgePages'
import FurniturePages from './Stores/pages/FurniturePages'
import ComputersPages from './Stores/pages/ComputersPages'
import SpeakerPages from './Stores/pages/SpeakerPages'
import AcPages from './Stores/pages/AcPages'
import KitchenPages from './Stores/pages/KitchenPages'
import TvPages from './Stores/pages/TvPages'
import WomanPages from './Stores/pages/WomanPages'
import MobileSingle from './SinglesPages/MobileSingle'
import UserCart from './Stores/singles/UserCart'
import WatchSingle from './SinglesPages/WacthSingle'
import WomanSingle from './SinglesPages/WomanSingle'
import BooksSingle from './SinglesPages/BooksSingle'
import MensSingle from './SinglesPages/MensSingle'
import FridgeSingle from './SinglesPages/FridgeSingle'

import ComputerSingle from './SinglesPages/ComputerSingle'
import SpeakersSingle from './SinglesPages/SpeakersSingle'
import AcSingles from './SinglesPages/AcSingles'
import FurnitureSingle from './SinglesPages/furnitureSingle'
import KitchenSingles from './SinglesPages/KitchenSingles'
import TvSingles from './SinglesPages/TvSingles'

const App = () => {
  return (
    <div>
      
 
      <Routes>
        <Route exact path='/' element= {<LandingPages/>}/>
        <Route  path='/mobiles' element= {<MobilePages/>}/>
        <Route path='/watchs' element= {<WatchePages/>}/>
        <Route path='/books' element= {<BookPages/>}/>
        <Route path='/mens' element= {<MensPages/>}/>
        <Route path='/fridges' element= {<FridgePages/>}/>
        <Route path='/furnitures' element= {<FurniturePages/>}/>
        <Route path='/computers' element= {<ComputersPages/>}/>
        <Route path='/speakers' element= {<SpeakerPages/>}/>
        <Route path='/ac' element= {<AcPages/>}/>
        <Route path='/kitchen' element= {<KitchenPages/>}/>
        <Route path='/tv' element= {<TvPages/>}/>
        <Route path='/womans' element= {<WomanPages/>}/>
        <Route path='/mobiles/:id' element={<MobileSingle/>} />
        <Route path='/watch/:id' element={<WatchSingle/>} />
        <Route path='/womanswear/:id' element={<WomanSingle/>} />
        <Route path='/bookscoll/:id' element={<BooksSingle/>} />
        <Route path='/menswear/:id' element={<MensSingle/>} />
        <Route path='/fridgess/:id' element={<FridgeSingle/>} />
        <Route path='/furniturss/:id' element={<FurnitureSingle/>} />
        <Route path='/computersss/:id' element={<ComputerSingle/>} />
        <Route path='/speakersss/:id' element={<SpeakersSingle/>} />
        <Route path='/accollections/:id' element={<AcSingles/>} />
        <Route path='/kitchensss/:id' element={<KitchenSingles/>} />
        <Route path='/tvsss/:id' element={<TvSingles/>} />
        
 
        
        <Route path='/cart' element = {<UserCart/>} />
     </Routes>

    </div>
  )
}

export default App