import React from 'react';
import axios from 'axios';
import cover from '../../assets/images/covers/pxfuel.jpg';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //functions
  const fetchProducts = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        if(res.status === 200) {
          setProducts(res.data);
        }
      }).catch(err => console.log(err));
  };

  const viewProduct = id => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className='container-fluid cover'>
        <div className='row'>
          <div className='cover-sidebar'>
            Advertisement 1
          </div>
          <div className='cover-carousel'>
            <img src={cover} alt='Background cover' className='bg-cover' />
          </div>
          <div className='cover-sidebar'>
            Advertisement 2
          </div>
        </div>
        <div className='row'>
          <h1 className='title-text'>Shop</h1>
        </div>
        <div className='row align-items-center mb-3 px-5'>
          <div className='col-6'>
            <h6 className='result-counter'>
            Showing all {products.length} results
            </h6>
          </div>
          <div className='col-6'>
            <select className='sort-select' defaultValue='default'
              name='orderby' aria-label='Shop orderby'>
              <option value='default'>
              Default Sorting
              </option>
              <option value='popularity'>
              Sort by poppularity
              </option>
              <option value='latest'>
              Sort by latest
              </option>
              <option value='h2l'>
              Sort by price: high to low
              </option>
              <option value='l2h'>
              Sort by price: low to high
              </option>
            </select>
          </div>
        </div>
        <div className='row shop-body'>
          {products.length > 0 && products.map(product => (
            <div key={product.id} 
              className='col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3'>
              <div onClick={() => viewProduct(product.id)} 
                className="card product-list-container">
                <span className='wishlist-toggle'>
                  {/* <i className="fa-solid fa-heart"></i> */}
                  <i className="fa-regular fa-heart"></i>
                  <p className='sale-tag'>Sale</p>
                  <i className="fa-solid fa-arrow-right-arrow-left" 
                    style={{marginLeft: '5px'}}></i>
                </span>
                <img src={product.image} 
                  className="card-img-top product-list-img" alt="..."/>
                <div className='add-cart'>
                  Add to cart
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title product-list-title">
                    {product.title}
                  </h5>
                  <p className="card-text product-list-pricetag">
                    {product.price} TK-
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{/* <div className='col-xs-12 col-sm-6 col-md-4 col-xl-3'>
  <div className="card product-container">
    <span className='wishlist-toggle'>
      {/* <i className="fa-solid fa-heart"></i> 
      <i className="fa-regular fa-heart"></i>
      <p className='sale-tag'>Sale</p>
      <i className="fa-solid fa-arrow-right-arrow-left" 
        style={{marginLeft: '5px'}}></i>
    </span>
    <img src={cover} 
      className="card-img-top product-list-img" alt="..."/>
    <div className='add-cart'>
                  Add to cart
    </div>
    <div className="card-body text-center">
      <h5 className="card-title product-list-title">Card title</h5>
      <p className="card-text product-list-pricetag">Price</p>
    </div>
  </div>
</div>; */}