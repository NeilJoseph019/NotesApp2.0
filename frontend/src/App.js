import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import NotesList from './pages/NotesList'
import NewNote from './pages/NewNote'
import UpdateNote from './pages/UpdateNote'
import IndividualNote from './pages/IndividualNote'


function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<NotesList/>}/> 
          <Route path='/note/update' element={<UpdateNote/>}/>
          <Route path='/note/new' element={<NewNote/>}/>
          <Route path='/note/:id' element={<IndividualNote/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
export default App;
