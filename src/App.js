import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App bg-gray-800">
            <Home />
            <About />
            <Projects />
            <Contact />
            <div className="w-full fixed sm:bottom-12 bottom-6 flex justify-center">
                <Navbar />
            </div>
        </div>
    );
}

export default App;
