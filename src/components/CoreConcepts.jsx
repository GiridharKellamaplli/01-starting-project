import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts!</h2>
            <ul>
                {CORE_CONCEPTS.map((concept, index) => <CoreConcept {...concept}/>)}
                {/*<CoreConcept title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description}/>*/}
                {/*<CoreConcept {...CORE_CONCEPTS[1]}/>*/}
                {/*<CoreConcept {...CORE_CONCEPTS[2]}/>*/}
                {/*<CoreConcept {...CORE_CONCEPTS[3]}/>*/}
            </ul>
        </section>
    );
}