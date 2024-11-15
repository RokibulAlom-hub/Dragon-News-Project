import { Link } from "react-router-dom";


const DetailsCompo = ({ news }) => {
    const{details,
        image_url,
        title,
        category_id
        } = news;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full my-3 shadow-xl">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/category/${news?.category_id}`} className="btn btn-primary">All news in this category</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCompo;