import React from 'react'
import styles from './item.module.css'
const Item = (props) => {
  return (
<div className={styles.cardProduct}>
  <div className="flex-none w-48 relative">
    <img src={props.img} alt="" className=" inset-0 w-full h-full object-cover" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {props.title}
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        ${props.price}.00.-
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        Stock: {props.stock}
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        Categoria: {props.category}
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        Descripción: {props.description}
      </div>
    </div>
    <div className="flex mt-5 space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Cart
        </button>
      </div>
    </div>
  </form>
</div>
  )
}

export default Item