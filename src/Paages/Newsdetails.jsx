import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/Layouts-components/RightNavbar";
import DetailsCompo from "../Components/DetailsCompo";

const Newsdetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <h2 className="font-bold text-xl">Dragon news</h2>
                <main className="grid grid-cols-12 gap-5">
                    <section className="col-span-9">
                        <DetailsCompo news={news}></DetailsCompo>
                    </section>
                    <section className="col-span-3">
                        <RightNavbar></RightNavbar>
                    </section>
                </main>
            </header>
        </div>
    );
};

export default Newsdetails;