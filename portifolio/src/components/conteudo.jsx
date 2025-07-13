import { useState, useEffect, useRef } from "react"
import Modulos from './tecnologia.jsx'
import javascript_img from '../imagens/javascript-logo.png'
import html_img from '../imagens/html-logo.png'
import react_img from '../imagens/react-logo.png'
import css_img from '../imagens/css-logo.png'
import python_img from '../imagens/python-logo.png'
import django_img from '../imagens/django-logo.png'
import git_img from '../imagens/git-logo.png'
import felipe_img from '../imagens/foto-3.jpeg'
import tailwind_img from '../imagens/tailwind-logo.png'
import github_logo from '../imagens/icons-github.png'
import linkedin_logo from '../imagens/icons-likendin.png'
import whatsapp_logo from '../imagens/icons-whatsapp.png'
import felipe_logo from'../imagens/Felipe-logo.webp'
const Conteudo = ()=>{
      const [scrolly, setScrollY] = useState({})
      useEffect(()=>{
        const divs = document.querySelectorAll('.animacao')
        const observer = new IntersectionObserver((entries) =>{
          entries.forEach(entry => {
            if(entry.isIntersecting){
              const id = entry.target.getAttribute('data-id')
              setScrollY(prev =>({...prev, [id]:true}))
              observer.unobserve(entry.target)
            }
          }
          )
        })
        divs.forEach(el => observer.observe(el))
        return ()=> observer.disconnect()
      },[])
      const Copiar = (e)=>{
        let targetid = e.currentTarget.getAttribute('data-id')
        let element = document.querySelector(`[data-id="${targetid}"]`)

        if(element) {
          const text = element.textContent;
          navigator.clipboard.writeText(text).then(()=> alert("Texto copiado!")).catch(()=> alert("Erro ao copiar"))
        }
      }
    return <>
        <main>
            <article>
                <section id="tecnologia" className="border-b border-gray-400 animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center ">
                    <h2 className='text-center text-3xl w-full'>Tecnologias</h2>
                    <Modulos imagem={javascript_img} nome='Java Script'/>
                    <Modulos imagem={html_img} nome='Html'/>
                    <Modulos imagem={css_img} nome='Css'/>
                    <Modulos imagem={react_img} 
                    nome='React'/>
                    <Modulos imagem={tailwind_img} nome='Tailwind'/>
                    <Modulos imagem={python_img} nome='Python'/>
                    <Modulos imagem={django_img} nome='Django'/>
                    <Modulos imagem={git_img} nome='Git'/>
                </section>
                <section id="sobre" data-id='1' className={`border-b border-gray-400 animacao mb-5  md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['1'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                     <h2 className='text-center text-3xl w-full'>Sobre</h2>
                     <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-3/12">
                        <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Quem Sou Eu?</h3>
                        <p className="p-3 text-justify md:w-full w-8/12 m-auto"> Me chamo Felipe Menezes, sou desenvolvedor Front-end com forte interesse por tecnologia e inovação. Tenho uma base sólida em HTML, CSS, JavaScript, React e Tailwind, além de conhecimentos em Python e Django. Busco sempre evoluir, me desafiando com novos projetos e aprendizados constantes.</p>
                     </aside>
                      <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-3/12">
                        <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Informações Pessoais</h3>
                        <p className="p-3 text-justify md:w-full w-8/12 m-auto">
                          <ul className="bg-gray-300 p-2 rounded shadow-md">
                            <li>Nome: Felipe Menezes Lins</li>
                            <li>Idade: 19 anos</li>
                            <li>Estado civil: Solteiro</li>
                            <li>Nacionalidade: Brasileiro</li>
                            <li>Cidade: Americana/SP</li>
                            <li>Número:19 99672-3460</li>
                          </ul>
                        </p>
                     </aside>
                     <aside className="md:w-5/12 mt-10 md:ml-5 lg:w-3/12">
                        <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Meu Objetivo</h3>
                        <p className="p-3 text-justify md:w-full w-8/12 m-auto">Meu principal objetivo é atuar como desenvolvedor Front-end em projetos que impactem positivamente as pessoas. Estou em constante aprimoramento, buscando não apenas dominar tecnologias, mas também colaborar em equipe, entregar soluções eficientes e contribuir para o sucesso de produtos digitais.</p>
                     </aside>
                     <aside id="bannersobre" className="w-full flex justify-between items-center">
                        <div className="ml-5">
                          <h3 id="fontebanner" className='text-white text-xl '>Desenvolvedor Front end</h3>
                          <p id='fontebanner'className="text-white">Busco sempre melhorar minhas habilidades e tenho foco em ser melhor a cada dia</p>
                        </div>
                        <img className="w-5/12  border-white"src="" alt="" />
                     </aside>
                </section>
                <section id="formacao"  data-id='2' className={`border-b border-gray-400  animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['2'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                       <h2 className='text-center text-3xl w-full'>Formações</h2>
                       <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Hashtag Treinamentos</h3>
                         <p className="p-3 text-justify  md:w-full w-8/12 m-auto"> Aprofundei meus conhecimentos em programação com cursos práticos e bem estruturados. Concluí formações em Python, JavaScript, HTML5 e CSS3, que me deram uma base sólida para desenvolvimento web completo.</p>
                           <a className="font-bold text-center bg-purple-600 text-white p-2 rounded-xl block m-auto mt-5 md:w-5/12 transition duration-300 hover:bg-gray-300 hover:text-purple-600 w-6/12" href="https://www.hashtagtreinamentos.com/" target="_blank">Acessar</a>
                       </aside>
                       <aside className="md:w-5/12 mt-10 md:ml-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Curso em Vídeo</h3>
                        <p className="p-3 text-justify  md:w-full w-8/12 m-auto">
                        Curso intensivo focado em desenvolvimento web com HTML, CSS, JavaScript, React e práticas modernas com Tailwind CSS. Aprendi a criar interfaces responsivas, componentes reutilizáveis e implementar boas práticas de UI/UX.
                        </p>
                        <a className="font-bold text-center bg-purple-600 text-white p-2 rounded-xl block m-auto mt-5 md:w-5/12 transition duration-300 hover:bg-gray-300 hover:text-purple-600 w-6/12" href="https://www.cursoemvideo.com/" target="_blank">Acessar</a>
                       </aside>
                </section>
                <section  data-id='3' className={`border-b border-gray-400  animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['3'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                       <h2 className='text-center text-3xl w-full'>Educação</h2>
                       <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Ensino Médio</h3>
                         <p className="p-3 text-justify"></p>
                           <p className="text-center"><strong >Termino:12/23</strong></p>
                       </aside>
                       <aside className="md:w-5/12 mt-10 md:ml-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Ensino Superior</h3>
                         <h4 className='text-lg font-bold text-purple-600 text-center mt-3 mb-3'>Ciência da computação</h4>
                        <p className="text-center"><strong >Fam Faculdade de Americana</strong></p>
                         <p className="p-3 text-justify  md:w-full w-8/12 m-auto">Atualmente cursando Ciência da Computação, venho aprofundando meu conhecimento técnico em estruturas de dados, algoritmos, redes, banco de dados e desenvolvimento de software, integrando a teoria com a prática do mercado.</p>
                        <p className="text-center"><strong >Inicio:02/25 **Atual**</strong></p>
                       </aside>
                </section>
                 <section id="experiencia"  data-id='4' className={`border-b border-gray-400  animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['4'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                       <h2 className='text-center text-3xl w-full'>Experiência</h2>
                       <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Assistente Administrativo</h3>
                         <p className="p-3 text-center md:text-justify md:w-full w-8/12 m-auto">Atuei com controle de documentos, atendimento e organização de processos internos. Desenvolvi habilidades de comunicação, responsabilidade e gestão de tarefas</p>
                         <p className="text-center"><strong >Inicio:06/21 Termino:12/23</strong></p>
                       </aside>
                       <aside className="md:w-5/12 mt-10 md:ml-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Auxiliar de vendas</h3>
                         <p className="p-3 text-justify  md:w-full w-8/12 m-auto">Responsável por atendimento ao cliente, organização de produtos e suporte ao time de vendas. Aprendi a importância da empatia, escuta ativa e trabalho em equipe, que aplico ao criar soluções centradas no usuário.</p>
                         <p className="text-center"><strong >Inicio:09/24 **Atual**</strong></p>
                       </aside>
                </section>
                 <section id="projetos"  data-id='5' className={`border-b border-gray-400  animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['5'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                       <h2 className='text-center text-3xl w-full'>Meus Projetos</h2>
                       <aside className="md:w-5/12 mt-10 md:mr-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Star Coffe</h3>
                         <p className="w-8/12 p-2 m-auto mb-2 md:w-full"><strong>Simulação de site de delivery para cafeteria (projeto pessoal)</strong></p>
                         <p className="p-3 text-justify  md:w-full w-8/12 m-auto">Desenvolvi meu primeiro site utilizando HTML, CSS e JavaScript puro, em um período em que ainda não tinha conhecimento aprofundado sobre frameworks. O projeto simula o sistema de delivery de uma cafeteria e foi criado com foco no aprendizado de front-end. Apesar de não contar com integrações como banco de dados ou APIs, o site demonstra minha capacidade de estruturar interfaces responsivas e funcionais desde os primeiros passos na área de desenvolvimento web.</p>
                          <a className="font-bold text-center bg-purple-600 text-white p-2 rounded-xl block m-auto mt-5 md:w-5/12 transition duration-300 hover:bg-gray-300 hover:text-purple-600 w-6/12" href="https://felipemenezeslins.github.io/star-coffe/" target="_blank">Acessar</a>
                       </aside>
                       <aside className="md:w-5/12 mt-10 md:ml-5 lg:w-4/12">
                         <h3 className="text-xl font-bold text-purple-600 text-center mt-3 mb-3">Hashflix</h3>
                         <p className="p-3 text-justify  md:w-full w-8/12 m-auto">
                         <p className="mb-2"><strong>Desenvolvimento de site inspirado na Netflix (projeto pessoal)</strong></p>
                        Criei um site totalmente inspirado na plataforma Netflix, com o objetivo exclusivo de aprendizado e aprimoramento técnico, sem fins comerciais. O projeto foi desenvolvido enquanto eu estudava Django e praticava a integração com banco de dados, permitindo aplicar na prática conceitos como autenticação de usuários, gerenciamento de conteúdos e estruturação de backend.               
                        </p>
                        <a className="font-bold text-center bg-purple-600 text-white p-2 rounded-xl block m-auto mt-5 md:w-5/12 transition duration-300 hover:bg-gray-300 hover:text-purple-600 w-6/12" href="https://netflix-copia-production.up.railway.app/login/" target="_blank">Acessar</a>
                       </aside>
                </section>
                <section id="contato" data-id='6' className={` animacao mb-5 p-5 md:flex md:flex-wrap md:justify-center items-center transform transition duration-1000 ${scrolly['6'] ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                       <h2 className='text-center text-3xl w-full'>Contato</h2>
                       <p className="mt-5 text-center w-full">Entre em contato para futuras oportunidades de serviço.</p>
                       <div className="lg:w-8/12 m-auto w-full md:flex justify-between md:bg-gray-200 mt-10">
                         <aside className="w-8/12 m-auto mb-5 md:w-5/12 md:m-0 lg:w-4/12 p-2">
                            <div>
                              <div className="md:flex flex-wrap">
                                <h4 className="text-lg text-purple-600 font-bold w-full">Número</h4>
                                <strong data-id="p-1"className="w-full mt-2">19-99672-3460</strong>
                                 <button data-id='p-1' onClick={Copiar}className="bg-purple-600 text-white font-bold p-1 rounded mt-5 mb-5 md:ml-0 ml-2">copiar</button>
                              </div>
                               <div className="md:flex md:flex-wrap">
                                <h4 className="text-lg text-purple-600 font-bold">Email</h4>
                                <strong data-id='p-2' className="w-full mt-2">felipemenezesmk22@gmail.com</strong>
                                <button data-id='p-2' onClick={Copiar} className="bg-purple-600 text-white font-bold p-1 rounded mt-5 mb-5 ml-2 md:ml-0">copiar</button>
                                 <a href="https://mail.google.com/mail/?view=cm&to=felipemenezesmk22@gmail.com" target="_blank" rel="noopener noreferrer"><button className="bg-purple-600 text-white font-bold p-1 rounded mt-5 mb-5 ml-3">Enviar Email</button></a>
                              </div>
                            </div>
                         </aside>
                         <aside className="w-10/12 m-auto  md:w-6/12 md:m-0 bg-purple-900 p-2 rounded shadow-md">
                            <h2 className="text-center text-white font-bold mb-5">Entre em contato</h2>
                          <form
                            action="https://formspree.io/f/xldlrboe" // ⬅️ substitua pela sua
                            method="POST">
                            <input
                              className="w-11/12 rounded shadow-md mb-2 p-3 block outline-none m-auto"
                              type="text"
                              name="nome"
                              placeholder="Nome"
                              required
                            />
                            <input
                              className="w-11/12 rounded shadow-md mb-2 p-3 block outline-none m-auto"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                            <input
                              className="w-11/12 rounded shadow-md mb-2 p-3 block outline-none m-auto"
                              type="text"
                              name="numero"
                              placeholder="Número"
                            />
                            <button
                              className="w-6/12 block m-auto bg-white p-2 rounded font-bold text-purple-600"
                              type="submit"
                            >
                              Enviar
                            </button>
                          </form>

                         </aside>
                       </div>
                </section>
            </article>
        </main>
        <footer id="redes" className="bg-purple-600 p-10 text-white">
          <div>
            <h3 className="text-xl font-bold">Redes</h3>
            <ul>
              <a className="flex items-center"  href="https://github.com/FelipeMenezesLins?tab=repositories" target="_blank">
                 <img className="w-5 mr-2" src={github_logo} alt="" />
                <li>Github</li>
              </a>
              <a className="flex items-center" href="https://www.linkedin.com/in/felipe-menezes-lins-36347a337/" target="_blank">
                <img className="w-5 mr-2" src={linkedin_logo} alt="" />
                <li>Linkedln</li>
              </a>
            </ul>
            <small className="text-center block mt-5">© 2025 Felipe Menezes Lins. Todos os direitos reservados.</small>
          </div>
        </footer>
    </>
}

export default Conteudo