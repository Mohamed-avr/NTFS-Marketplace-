import Navbar from "./navbar";

const Layout = ({children}) => {
    return ( <div className="bg-ground " > 
    <Navbar/>
    { children}

    </div> );
}
 
export default Layout;