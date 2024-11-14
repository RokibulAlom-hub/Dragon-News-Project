
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Newscard = (props = {}) => {
    const { news } = props || {};
    return (
        <div className="card bg-base-100 shadow-lg rounded-lg p-4 mb-4">
            {/* Author Section */}
            <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center">
                    <img src={news?.author?.img} alt={news?.author?.name || "Author"} className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <h4 className="font-bold">{news?.author?.name || "Unknown Author"}</h4>
                        <p className="text-sm text-gray-500">{news?.author?.published_date}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>

            {/* Title */}
            <h3 className="mt-4 font-bold text-lg">{news?.title}</h3>

            {/* Image */}
            <img src={news?.image_url || news?.thumbnail_url} alt={news?.title} className="w-full h-48 object-cover my-4 rounded-lg" />

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
                {news?.details?.length > 100 ? `${news.details.substring(0, 100)}...` : news?.details}
                <span className="text-primary cursor-pointer"> Read More</span>
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center">
                    <AiFillStar className="text-yellow-500 mr-1" />
                    <span className="font-bold">{news?.rating?.number || "0"}</span>
                </div>
                <div className="flex items-center">
                    <FaRegEye className="mr-1" />
                    <span>{news?.total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default Newscard;
