import logo from "../assets/logo.png"
function Navbar(){
    return(
        <header>
            <nav>
                <img src={logo} alt="Logo" />
            </nav>
        </header>
    );
}
export default Navbar;