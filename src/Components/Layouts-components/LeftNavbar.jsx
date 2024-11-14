import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const[categories,setCategories]=useState([]);
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(d => setCategories(d.data.news_category)
        )
    },[])
    return (
        <div className="">
            <h2 className="text-xl font-bold">All Categories{categories.length}</h2>
            <div className="flex flex-col gap-2 my-2">
                {
                    categories.map((category) => 
                        (<button className="btn"  key={category.category_id}>
                            {category.category_name}</button>)
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;