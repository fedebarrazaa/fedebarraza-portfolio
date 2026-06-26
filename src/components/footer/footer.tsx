import style from '../../styles/footer.module.css'
import imgIcon from '../../assets/imagenes/foto-toy.png'


export function DesingFooter() {
    {/* 
    const redes = [
        {id: 1, redes:'Github', href:'https://github.com/fedebarrazaa'},
        {id: 2, redes: 'Linkedin', href:'https://www.linkedin.com/in/federico-barraza/'},
        {id: 3, redes: 'Instagram', href:'https://www.instagram.com/fedebarraza__/'},
    ]

    const pages = [ 
        {id: 4, pages:'Inicio', href:'#'},
        {id: 5, pages: 'Sobre mi', href:'#'},
        {id: 6, pages: 'Trabajos', href:'#'}
    ]*/}
    return (
        <> 
        <footer className={style.footer_desing}> 
            <section className={style.footer_section}> 
                <div className={style.footer_img}> 
                    <img src={imgIcon} className={style.img} /> 
                    <h3>Fede Barraza</h3>
                    </div>
                <p>© Copyright Federico Barraza 2026. Todos los derechos reservados.</p>
            </section>
{/* 
            <section className={style.footer_section_dos}> 
                   <h3>Redes sociales</h3>
                <ul>
                    {redes.map((usuario) => (
                        <li key={usuario.id}>
                           <a href={usuario.href}> 
                            {usuario.redes}
                            </a> 
                        </li>
                    ))}
                    </ul>
                <h3>Paginas</h3>
                    <ul>
                    {pages.map((usuario) => (
                        <li key={usuario.id}>
                           <a href={usuario.href}> 
                            {usuario.pages}
                            </a> 
                        </li>
                    ))}
                    </ul>  
            </section>*/}

        </footer>
        </>
    )
}