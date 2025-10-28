interface ProductType {
    title: string;
    image: string
    description: string;
    price: number
}

export default function ProductItem ({title, image, description, price}: ProductType){
   return (
      <div className="w-auto  h-[350px] p-3 bg-gray-100 dark:bg-[#181818]  flex flex-col gap-1">
        <img src={image} alt="" className="w-full h-[190px] " />
        <div className="detal mt-3">

          <h4>{title}</h4>
          <p className="text-sm font-normal py-1">{description}</p>
          <p>{price} تومان</p>
        </div>
         <button  className='mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'onClick={() => alert(`You clicked ${title}`)} >  کلیک کن </button>
    </div>
   )
}