export default function Section({ children, ...props}) {
    return (
        <section id={props.id}>
            <h2>{ props.title} </h2>
            {children}
        </section>
    );
}