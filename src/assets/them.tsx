import { useState, useRef, useEffect } from "react";



const ThemeSelector = () => {
    const [openBox, setOpenBox]  = useState <boolean>(false)
    const [theme, setTheme ]= useState("day")
    const dropdownRef = useRef <HTMLDivElement | null>(null)
     useEffect(()=>{
        if(theme === "night"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
     }, [theme])

   
       useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node )) {
                setOpenBox(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return ( 
        <div ref={dropdownRef} className="flex relative justify-center dark:bg-[#181818] rounded items-center flex-col gap-2 mt-8">
            <button onClick={()=>{setOpenBox(true)}} className=" p-3 rounded shadow-md capitalize">{theme === "day" ? "day" : "night"}
</button>
            {
                openBox && (
                     <div className=" absolute w-[150px] top-14  shadow-md rounded dark:bg-[#181818] bg-white  flex flex-col gap-2 p-2">
                        <button onClick={()=>{setTheme("day"); setOpenBox(false)} } className="w-full capitalize px-3 py-2 text-left hover:bg-gray-100 duration-200 transition-colors  dark:hover:bg-[#282828] rounded ">day</button>
                        <button onClick={()=>{setTheme("night"); setOpenBox(false)} } className="w-full capitalize px-3 py-2 text-left hover:bg-gray-100 duration-200 transition-colors dark:hover:bg-[#282828] rounded ">night</button>
                      
                    </div>
                )
            }
        </div>
     );
}
 
export default ThemeSelector;