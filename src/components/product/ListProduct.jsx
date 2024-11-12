import { HeartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListProduct({ items }) {
  return (
    <div className="w-full flex justify-center px-20 py-5">
      <div className="grid grid-cols-5 gap-4">
        {items.map((item) => {
          const [currentImage, setCurrentImage] = useState(item.image);
          const [isHeart, setIsHeart] = useState(false);
          return (
            <div key={item.id} className="relative h-full w-full border-1">
              <Link
                className="w-full h-fit p-0 m-0 flex flex-col items-start relative "
                to="/ListProduct/productItem"
              >
                <div className="relative z-20">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsHeart((prev) => !prev);
                    }}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl z-20" // Tăng z-index
                  >
                    <HeartOutlined
                      style={{ color: isHeart ? "red" : "grey" }}
                      className="z-20"
                    />
                  </button>

                  <div className="absolute bg-green-500 text-white px-2 rounded-lg top-3 left-2">
                    Mới
                  </div>
                  <img
                    src={currentImage}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onMouseEnter={() => setCurrentImage(item.hoverImage)}
                    onMouseLeave={() => setCurrentImage(item.image)}
                  />
                </div>

                <div className="h-full w-full flex flex-col p-1.5">
                  <div className="flex justify-between w-full">
                    <p className="font-medium font-mono">
                      {item.sizes.length} Size
                    </p>
                    <p className="font-medium font-mono">
                      {item.colors.length} Màu sắc
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="font-medium font-mono">{item.name}</p>
                    <p className="font-medium font-mono">{item.price} VND</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ListProduct.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sizes: PropTypes.array.isRequired,
      colors: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListProduct;
