import Card from './assets/cart'
import './App.css'
interface CardType {
    id: number;
    title: string;
    description: string;
}

function App() {
    const cards: CardType[] =[
        {id: 1, title:"card 1" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 2, title:"card 2" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {id: 3, title:"card 3" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 4, title:"card 4" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 5, title:"card 5" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]

    return (
        < div className='px-20 w-full'>
            <h1 className="text-3xl font-bold  mt-7">    My First React + TypeScript Project</h1>
            <div className='grid grid-cols-3 gap-6  mt-16'>
                {cards.map(card => (
                    <div  key={card.id}  className='bg-gray-100 p-4 w-auto h-[200px] rounded flex flex-col justify-between'>
                        <div>
                            <h1 className='font-bold'>{card.title}</h1>
                            <p className='text-justify'>{card.description}</p>
                        </div>
                        <button  className='mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'onClick={() => alert(`You clicked ${card.title}`)} >  کلیک کن </button>
                    </div>
                ))}
            </div>
            <Card/>
        </div>
    )
}

export default App
