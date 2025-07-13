import banner1 from '../imagens/banner-profissional-perfil.jpg'
import { useState, useEffect, useRef } from 'react'
import github_img from '../imagens/github-icon.png'
import felipe_img from '../imagens/foto-sem-fundo.png'
const Banner = ()=>{
    const [scrolly, setScrollY] = useState(false)
    const[navy, setNav] = useState(false)
    const nav = useRef(0)
    const menu = useRef(0)
    useEffect(() => {
    const onScroll = () => {
           const currentscorlly= window.scrollY
        
        if(currentscorlly < menu.current){
            setScrollY(true)
        } else {
            setScrollY(false)
        }
        menu.current = currentscorlly
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
}, [])

        useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
        // Descendo → mostra a nav
        setNav(true);
        } else {
        // Subindo → esconde a nav
        setNav(false);
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


   

    return <>
        <header id='bannermain' class='shadow-xl'>
            <nav  class={`fixed top-0 w-full hidden lg:flex p-5 text-sm justify-between xl:text-xl z-10 bg-purple-800 shadow-md tranform transition duration-300 text-gray-200 ${navy ? 'opacity-1 trnaslate-y-0' : 'opacity-0 -translate-y-full'}`}>
                <div class="hover:text-white mr-2 p-2">
                    <a className="flex items-center" href="conteudo"> 
                     <span className="material-icons  mr-2">home</span>
                    Home
                    </a>
                </div>
                 <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#tecnologia"> 
                        <span className="material-icons mr-2">
                            developer_mode
                        </span>
                    Tecnologias
                    </a>
                </div>
                <div class="hover:text-white mr-2 p-2">
                    <a className="flex items-center" href="/conteudo#sobre"> 
                        <span className="material-icons mr-2 ">person</span>
                    Sobre
                    </a>
                </div>
                <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#formacao"> 
                        <span className="material-icons mr-2 ">school</span>
                    Formação
                    </a>
                </div>
                 <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#formacao"> 
                        <span className="material-icons mr-2 ">book</span>
                    Educação
                    </a>
                </div>
                 <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#experiencia"> 
                        <span className="material-icons mr-2 ">work</span>
                    Experiência
                    </a>
                </div>
                <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#projetos"> 
                        <span className="material-icons mr-2 ">folder</span>
                    Projetos
                    </a>
                </div>
                <div class="hover:text-white mr-2 p-2">
                     <a className="flex items-center" href="/conteudo#contato"> 
                        <span className="material-icons mr-2 ">mail</span>
                    Contato
                    </a>
                </div>
                <div class='hover:text-white mr-2 p-2'>
                     <a className="flex items-center" href="/conteudo#redes"> 
                        <span className="material-icons mr-2 ">public</span>
                    Redes
                    </a>
                </div>
            </nav>

                <menu id="menumain" className={`fixed bg-purple-600 text-white text-xs md:text-lg  font-bold flex items-center bottom-0 justify-between w-full z-10 p-3 transform transition duration-300 lg:hidden ${
                scrolly ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}>
                    <div className='flex items-center'>
                        <a href="#" className="flex flex-wrap justify-center">  <span className='material-icons text-md'>home</span>Home</a></div>
                    <div><a href="#" className="flex flex-wrap justify-center">
                        <span className='material-icons text-md'>developer_mode</span>
                        Tecnologia</a></div>
                    <div><a href="#" className="flex flex-wrap justify-center">
                    <span className='material-icons text-md'>person</span>
                    Sobre</a></div>
                    <a href="#"  className="flex flex-wrap justify-center"><span className='material-icons text-md'>school</span>Formação</a>
                    <a href="#"  className="flex flex-wrap justify-center"><span className='material-icons text-md'>book</span>Educação</a>
                    <div><a href="#" className="flex flex-wrap justify-center"><span className='material-icons text-md'>work</span>Experiêcias</a></div>
                    <a href="#"  className="flex flex-wrap justify-center"><span className='material-icons text-md'>folder</span>Projetos</a>
                    <div><a href="#" className="flex flex-wrap  justify-center"><span className='material-icons text-md'>mail</span>Contato</a></div>
                    <div><a href="#" className="flex flex-wrap justify-center"><span className='material-icons text-md'>public</span>Redes</a></div>
                </menu>
            
            <div className="flex justify-between items-center">
                <div className='md:ml-10 p-2 lg:mt-20'>
                    <h3 id="texth3" className='text-2xl font-bold md:text-3xl lg:text-4xl'>Felipe Menezes Lins</h3>
                    <h4 id="texth4"className='font-bold text-xl mb-5 md:text-2xl lg:text-3xl'>Desevolvedor Front end</h4>
                    <button className='bg-purple-600 text-white font-bold p-2 transition duration-500 hover:bg-white hover:text-purple-600 lg:p-5 lg:text-xl'>Aprendizado rápido</button>
                </div>
                <img className="w-4/12 "src={felipe_img}
                alt="banner-perfil" />
            </div>
        </header>
    </>
}

export default Banner