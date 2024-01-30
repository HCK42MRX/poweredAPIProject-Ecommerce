import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import utils
import { Dolar } from '../utils/formatCurrency'

// import assets

function CardItems () {
  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      const result = response.data
      result ? setProducts(result) : setProducts(null)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <section className="grid grid-cols-4 gap-5">
        {!products
          ? <p>....Loading</p>
          : products.map(product =>
            <article key={product.id} className="card-container bg-white p-3 rounded-lg">
              <div className="center-image-item flex justify-center">
              <a href="/"><img src={product.image} className='w-48 h-48 object-contain' alt="" /></a>
              </div>
              <div className="detail flex justify-between mt-4">
                <p className='text-slate-600'>{product.title}</p>
                <p>{Dolar.format(product.price)}</p>
              </div>
              <p className='text-slate-800 mt-2'>{product.category}</p>
            </article>
          )}
      </section>
    </>
  )
}

export default CardItems
