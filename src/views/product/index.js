/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageViewer from 'react-simple-image-viewer';

export default function Product() {
  const {productId} = useParams();
  const [product, setProduct] = React.useState({});
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        if(res.status === 200) {
          setProduct(res.data);
        }
      }).catch(err => console.log(err));
  }, [productId]);

  return (
    <>
      {Object.entries(product).length > 0 && 
      <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-12 col-md-6 images'>
            
            <img
              className='product-img' 
              src={product.image}
              onClick={() => openImageViewer()}
              alt={product.title}
            />
            {isViewerOpen && (
              <ImageViewer
                src={[product.image]}
                currentIndex={0}
                disableScroll={true}
                closeOnClickOutside={ true }
                onClose={closeImageViewer}
              />
            )}
          </div>
          <div className='col-sm-12 col-md-6'>
            <h1 className='product-title'>{product.title}</h1>
            <h4 className='product-details'>
              {product.price} 
              <span className='currency-unit'>৳</span>
            </h4>
            <p className='product-details'>Highlights:</p>
          </div>
        </div>
      </div>
      }
      
    </>
  );
}
