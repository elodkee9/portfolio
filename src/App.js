import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'Mihaly Elod',
      headerLinks: [
        { title: 'Home', path: '/portfolio' },
        { title: 'About', path: '/portfolio/about' },
        { title: 'Contact', path: '/portfolio/contact' }
      ],
      home: {
        title: 'Welcome',
        subtitle: 'This is my web page',
        text: 'Ez a szoveg helye...'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
 
          <Navbar className="border-bottom" bg="transparent" expand="lg">

            <Navbar.Brand>Előd Mihály`s website</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toogle"/>
            <Navbar.Collapse id="navbar-toogle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio">Home</Link>
                <Link className="nav-link" to="/portfolio/about">About</Link>
                <Link className="nav-link" to="/portfolio/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/portfolio/about" exact render={() => <AboutPage title={this.state.about.title}  />} />
          <Route path="/portfolio/contact" exact render={() => <ContactPage title={this.state.contact.title}  />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
