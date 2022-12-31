import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NodeList from './pages/NotesList'
import NewNote from './pages/NewNote'
import IndividualNote from './pages/IndividualNote'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<NodeList/>}/> 
          <Route path='/note/new' element={<NewNote/>}/>
          <Route path='/note/:id' element={<IndividualNote/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
