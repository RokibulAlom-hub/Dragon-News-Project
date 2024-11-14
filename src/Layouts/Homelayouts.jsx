import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layouts-components/LeftNavbar";
import Navbar from "../Components/Navbar";


const Homelayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                 <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 px-2 gap-2">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="main col-span-6">main part</section>
                <aside className="right col-span-3">right side</aside>
            </main>
        </div>
    );
};

export default Homelayouts;