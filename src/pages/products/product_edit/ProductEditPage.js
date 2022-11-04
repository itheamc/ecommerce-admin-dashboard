import React, {useState, createRef} from 'react'
import {
    ProductEditPageContainer,
    ProductDetailsCard,
    ProductAttributesCard
} from './ProductEditPageStyle.js'

const ProductEditPage = () => {

    const img1Ref = createRef()
    const img2Ref = createRef()

    const onImg1Click = () => { 
        img1Ref.current.click()
    }
    
    const onImg2Click = () => { 
        img2Ref.current.click()
     }

    const [selected, setSelected] = useState(null)
    const onFileChange = (e) => {
        setSelected(e.target.result)
        console.log(e.target.files[0])
    }

    return (
        <ProductEditPageContainer>
            <div className='buttons'>
                <button>Back to Products</button>
                <button>Save Product</button>
            </div>
            <form  method='POST' action='#'>
                <ProductDetailsCard>
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" id="product-name" name="product-name" />
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                    <label htmlFor="Brand">Brand</label>
                    <select id="brand" name="brand" onChange={(e) => console.log(e.target.value)}>
                        <option value="">Select a brand</option>
                        <option value="1">Brand 1</option>
                        <option value="2">Brand 2</option>
                        <option value="3">Brand 3</option>
                    </select>
                    <div className="product-price">
                        <div className='maximum-price'>
                            <label htmlFor="mrp">Maximum Retail Price</label>
                            <input type="number" id="price" name="mrp" />
                        </div>
                        <div className='selling-price'>
                            <label htmlFor="sp">Selling Price</label>
                            <input type="number" id="price" name="sp" />
                        </div>
                    </div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" />
                </ProductDetailsCard>
                <ProductAttributesCard>
                    <h3>Product Images</h3>
                    <div className='product-image-container'>
                        <div className='left-product-image' onClick={onImg1Click}>
                            <i className="ri-image-line"></i>
                            <p>Drop your image here or</p>
                            <p>select to <input type="file" ref={img1Ref} onChange={onFileChange} id='product' name="product-image" /> </p>
                        </div>
                        <div className='middle-product-image' onClick={onImg2Click}>
                            <i className="ri-image-line"></i>
                            <p>Drop your image here or</p>
                            <p>select to <input type="file" ref={img2Ref} onChange={onFileChange} id='product' name="product-image" /> </p>
                        </div>
                        <div className='right-product-image'>
                            <img src={selected} alt="product" />
                            
                        </div>
                    </div>
                    <p>You need to add at list 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimentions. Notice that the products show all the details.</p>
                    <label htmlFor="product-size">Product Size</label>
                    <select id="product-size" name="product-size">
                        <option value="">Select a size</option>
                        <option value="1">Size 1</option>
                        <option value="2">Size 2</option>
                        <option value="3">Size 3</option>
                    </select>
                    <label htmlFor="product-color">Product Color</label>
                    <select id="product-color" name="product-color">
                        <option value="">Select a color</option>
                        <option value="1">Color 1</option>
                        <option value="2">Color 2</option>
                        <option value="3">Color 3</option>
                    </select>
                    <div className='buttons'>
                        <button type="submit" className='active'>Add Product</button>
                        <button type="submit">save-product</button>
                    </div>
                </ProductAttributesCard>
            </form>
        </ProductEditPageContainer>
    )
}

export default ProductEditPage