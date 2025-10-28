import Card from './assets/cart'
import './App.css'
import Product from './assets/product';
import ThemeSelector from './assets/them';

type propDate = {
    id: number;
    title: string;
}
function App() {
    const date: propDate[] =[
        {id: 1, title: "THML"},
        {id: 2, title: "Talwindcss"},
        {id: 1, title: "React"},
        {id: 1, title: "Typscript"},
     ]
  

    return (
        < div className='px-20 w-full dark:bg-[#282828] dark:text-white'>
            <div className='w-full flex justify-between'>
                   <h1 className="text-3xl font-bold  mt-7">    My First React + TypeScript Project</h1>
                   <ThemeSelector />
            </div>
            <div className='grid grid-cols-4 gap-4 mt-16'>
                {
                    date.map((item)=> (
                        <div key={item.id} className='w-auto h-[140px] hover:cursor-pointer hover:scale-105 duration-200 transition-all hover:bg-gray-200 dark:bg-[#181818] bg-gray-100 rounded flex items-center justify-center'>
                           <h4 className='text-xl font-medium'>{item.title}</h4>
                        </div>
                    ))
                }

            </div>
            <Product />
            <Card/>
        </div>
    )
}

export default App
