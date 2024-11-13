import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import { Link } from "@mui/material";

function ListProduct({ items, title = "", path = "" }) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-20 py-5">
      <p className="text-3xl text-black font-sans font-bold my-4">{title}</p>
      <div className="grid grid-cols-5 gap-4">
        {items.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
      {path && (
        <Link
          href={path}
          underline="always"
          color="textPrimary"
          className="mt-4"
        >
          <p className="text-base text-black font-semibold">
            Còn nhiều lắm , xem thêm
          </p>
        </Link>
      )}
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
  title: PropTypes.string,
  path: PropTypes.string,
};

export default ListProduct;
