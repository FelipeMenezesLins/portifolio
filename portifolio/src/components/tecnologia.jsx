import { useState, useEffect, useRef } from "react"

const Tecnologia = ({imagem, nome})=>{
    const [scrolly, setScrollY] = useState(false)
    const div = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
            setScrollY(true)
            observer.disconnect()
        }
      },
      {
        root: null, // usa viewport
        rootMargin: '0px',
        threshold: 1 // 10% visível já conta como "visível"
      }
    )

    if (div.current) {
      observer.observe(div.current)
    }

    return () => {
      observer.disconnect
    }
    },[])
    return <>
        <div id="modulos" ref={div} class={`w-5/12 bg-gray-200 rounded-xl p-3 block m-auto mt-5 shadow-xl aspect-square transition duration-1000 
        transform hover:-translate-y-3 md:w-5/12 lg:w-2/12 lg:m-1 lg:mt-5 ${scrolly ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`} onScroll={scroll}>
            <h3 className='text-center text-xl text-purple-600 w-full  '>{nome}</h3>
            <img className='w-8/12 md:w-8/12 block m-auto' src={imagem} alt="" />
        </div>
    </>
}

export default Tecnologia