import ProductItem from "./productItem";
interface ProductType {
    id:number;
    title: string;
    image: string
    description: string;
    price: number
}

export default function Product (){
    const cards: ProductType[] =[
        {id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dkKGL1pbBhgjQg1eQ6JiDC5LN60TTFZLYQ&s", title:"پفک اشی مشی" , description:"تازه و خوشمزه", price: 100 },
        {id: 2,image: "https://azimimarket.com/wp-content/uploads/2025/04/toppog-anata.webp" ,title:"پفک آناتا توپوق" , description:"اسنک طلایی چی توز بزرگ 190 گرمی", price: 90},
        {id: 3, title:"پفک چی چلت" ,image: "https://panjfasl.ir/wp-content/uploads/2022/05/photo_2022-05-19_15-43-43-2.jpg" ,description:"اسنک گوجه‌ ای چی پلت چی توز 43 گرمی",price: 200},
        {id: 4, title:"پفک لینا" ,image: "https://panjfasl.ir/wp-content/uploads/2023/02/92C50B2E-6924-447E-AB4C-605A85A39482-600x600.jpg",  description:"اسنک پنیری لوله ای لینا 75 گرمی", price: 4500},
        {id: 5, title:"پفک یامی" ,image: "https://img.beroozmart.com/unsafe/fit-in/350x350/filters:format(webp):fill(transparent)/files/shop/product/8184401246b949aa8a79f10574c6bc0d.jpg",  description:"اسنک کچاپ یامی 40 گرمی", price: 4500},
    ]
   return (
        <div className='grid grid-cols-4 gap-4  mt-10'>
            {cards.map(card => (
                <ProductItem key={card.id}  title={card.title}  image={card.image} price={card.price} description ={card.description} />
            ))}
            {/* <ProductItem title="پفک اش مشی"  image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dkKGL1pbBhgjQg1eQ6JiDC5LN60TTFZLYQ&s" description="this is greate" price={100}/> */}
            {/* <ProductItem  image= "https://azimimarket.com/wp-content/uploads/2025/04/toppog-anata.webp" title ="پفک آناتا توپوق"  description ="اسنک طلایی چی توز بزرگ 190 گرمی" price ={90}/> */}
        </div>
   )
}