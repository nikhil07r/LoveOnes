import React from 'react'
import Lenis from 'lenis'
import Home from './pages/Home';
import SnowflakeCursor from './components/All Cursors/SnowFlakeCursor';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Navbar from './components/others/Navbar';
import MeetUs from './pages/MeetUs';
import Gratitude from './pages/Gratitude';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Memories from './pages/Memories';




function App() {




const router = createBrowserRouter([
  {path:'/',
    element:<> <Home /> </>
  },
  {path:'/meet-us',
    element:<> <MeetUs/> </> 
  },
  {path:'/gallery',
    element:<> <Gallery/>  </> 
  },
  {path:'/game',
    element:<> <Gratitude/>  </> 
  },
  {path:'/memories',
    element:<> <Memories/>  </> 
  },
  {path:'/about',
    element:<> <About/> </> 
  },
])







  // Initialize Lenis
  const lenis = new Lenis({
    lerp:22,
    duration:4.6
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
<>

      {/* <SnowflakeCursor/> */}
<RouterProvider router={router}>

  <div className="w-full h-full bg-[#fefae0] overflow-x-hidden">
       
      <Home  />
    </div>


</RouterProvider>

  
</>
  )
}

export default App