import { useLoaderData } from "react-router-dom";
import Newscard from "../Components/Newscard";


const CategoryNews = () => {
    const{ data: news} = useLoaderData();
    console.log(news);
    
    return (
        <div>
            <h2 className="font-bold">Dragon News Home</h2>
            <div>
                {
                    news.map((singlenews) =>
                        <Newscard key={singlenews._id} news={singlenews}></Newscard>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;