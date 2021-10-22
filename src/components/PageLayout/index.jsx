
import Footer from "../Footer";
import Header from "../Header";

function PageLayout({children}){

    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}
export default PageLayout