import Footer from "./Footer";
import Header from "./Header";

//Uses config set global components for the layout

export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    const layout = config.content.layout
    const  header = config.content.layout[0]
    const footer = config.content.layout[1]
    console.log("layout",layout);
    return (
        <>
            <Header blok ={header}/>
            <main>{children}</main>
            <Footer blok ={footer}/>
        </>
    );
}