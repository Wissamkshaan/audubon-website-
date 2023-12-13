import { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Addbird from './components/Addbird';
import BirdsType from  './components/Homepage';
import Showpage from './components/Showpage';




function App(){
  const [birds, setBirds] = useState([
    {
      name: "Acadian Flycatcher",
      genus: "Empidonax virescens",
      conservationStatus:
        "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
      image:
      "https://media.audubon.org/nas_birdapi/4492_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
    },
    {
      name: "Acorn Woodpecker",
      genus: "Melanerpes formicivorus",
      conservationStatus:
        "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
      image:
      "https://media.audubon.org/nas_birdapi/2420_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
    },
    {
      name: "American Black Duck",
      genus: "Anas rubripes",
      conservationStatus:
        'Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.',
      image:
      "https://media.audubon.org/nas_birdapi/783_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
    },
    {
      name: "American Flamingo",
      genus: "Phoenicopterus ruber",
      conservationStatus: "",
      image:
      "https://media.audubon.org/nas_birdapi/601_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
    },
    {
      name: "American White Pelican",
      genus: "Pelecanus erythrorhynchos",
      conservationStatus:
        "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
      image:
      "https://media.audubon.org/nas_birdapi/267_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
    },
    {
      name: "Aplomado Falcon",
      genus: "Falco femoralis",
      conservationStatus: "",
      image:
      "https://media.audubon.org/nas_birdapi/990_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
    },
    {
      name: "Atlantic Puffin",
      genus: "Fratercula arctica",
      conservationStatus:
        "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
      image:
      "https://media.audubon.org/nas_birdapi/2514_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
    },
    {
      name: "Aztec Thrush",
      genus: "Ridgwayia pinicola",
      conservationStatus: "",
      image:
      "https://media.audubon.org/nas_birdapi/3556_Sibl_9780307957900_art_r1.jpg",
      homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
    }
  ]);
  const [newBird, setNewBird] = useState();
  return(
    <Router>
      <div className="main-page">
        <div className="header">
          <nav>
            <h1 className='title'>Audubon Society</h1>
            <Link to="/">
         
            </Link>
            <Link to="/add" className="add-button">
             
            </Link>
          </nav>
        </div>
        <main className="show-page">
        <Routes>
  <Route path="/" element={<BirdsType birdData={birds} />} />
  <Route path="/bird/:name" element={<Showpage birdData={birds} />} />
  <Route path="/create" element={<Addbird birdData={birds} setBirdData={setBirds} />} />
 <Route path="*" element={<Navigate to="/" />} />
</Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;