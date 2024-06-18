
import Product from "./Product";
import "./prebook.css";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Prebook= () => {
  const { category } = useParams();
  console.log(category);
  const { data, loading, error} = useFetch(`/api/prebook/category?category=${category}`);
  
 
  if (error) {
    console.log(error);
    return <p>Error loading products.</p>;
  }

  // Group products by type
  const productsByType = data.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});

  return (
    <div className="product">
      <h1 className="PreBookCategory">{category}</h1>
      <div className="product-list">
        {loading ? (
          <Loading></Loading>
        ) : (
          Object.keys(productsByType).map((type, index) => (
            <div key={index} className="product-type-section">
              <h2 className="product-type-heading">{type}</h2>
              <div className="product-items">
                {productsByType[type].map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Prebook;