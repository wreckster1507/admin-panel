import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Events from "./components/Events";
import EditClub from "./components/EditClub";
import Club from "./components/Club";
import EventCreate from "./components/EventCreate";
import CreateClub from "./components/CreateClub";
import Participants from "./components/Participants";
import EditEvent from "./components/EditEvent";
import DeleteEvent from "./components/DeleteEvent";
import DeleteClub from "./components/DeleteClub";
import DeleteParticipant from "./components/DeleteParticipant";


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/create-event" element={<EventCreate />} />


            <Route path="/clubs" element={<Club />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
            <Route path="/create-club" element={<CreateClub />} />
            <Route path="/edit-club/:id" element={<EditClub />} />
            <Route path="/delete-event/:id" element={<DeleteEvent />} />
            <Route path="/delete-club/:id" element={<DeleteClub />} />
            <Route path="/delete-participant/:id" element={<DeleteParticipant />} />

          </Routes>



        </div>
      </BrowserRouter>
    </>
  );
}

export default App;