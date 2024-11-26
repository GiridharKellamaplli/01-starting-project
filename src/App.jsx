import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts";
import TabContent from "./components/TabContent";


function App() {

    return (
        <div>
            <Header/>
            <main>
                <CoreConcepts/>
                <TabContent/>
            </main>
        </div>
    );
}

export default App;