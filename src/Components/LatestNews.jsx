import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex bg-gray-200 p-2">
            <span className=" bg-[#d72050] p-2 text-white">Latest</span>
            <Marquee pauseOnHover={true} className="space-x-2">
                <Link to='news'>WASHINGTON: President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraines independence day, six months after Russia invaded the country. The package aims to fortify Ukraines military over the coming two years by committing the production and... read full story</Link>
                <Link to='news'>Fox Newss top-rated host, Tucker Carlson, claimed on Monday night that Russian President Vladimir Putin is in fact winning the war in Ukraine, and President Joe Bidens insistence that Putin surrenders his campaign to take over Ukraine is actually evidence Biden ultimate goal is to destroy the West. Carlson arrived at his bizarre claim after railing against European and American military aid to Ukraine. Italys Ukraine funding is a lot, but its not quite as much as France. France has sent more than $2 billion U.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;