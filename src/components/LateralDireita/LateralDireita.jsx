import './LateralDireita.css'
import './Usuario'
import './Sugestoes'
import Usuario from './Usuario'
import icon from '../../assets/eu.jpg'
import icon2 from '../../assets/iconAside1.png'
import icon3 from '../../assets/iconAside2.png'
import icon4 from '../../assets/iconAside3.png'
import icon5 from '../../assets/iconAside4.png'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className='LateralDireita'>
            <Usuario 
            imgPerfil={icon}
            nome='Emimilho'
            nick='Gustavo🍊'
            />
            <div className='midAside'>
                <span className='midAsideChild1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='midAsideChild2'>Ver tudo</span>
            </div>
            <Sugestoes 
            imgSugest={icon2}
            nomeSugest="euguihz"
            seguido='Seguido(a) por dimitri_leonar'
            />
            <Sugestoes 
            imgSugest={icon3}
            nomeSugest="s.o.s_23"
            seguido='Seguido(a) por jullyaba.fernanda'
            />
            <Sugestoes 
            imgSugest={icon4}
            nomeSugest="t.i.acessivel"
            seguido='Novo no Instagram'
            />
            <Sugestoes 
            imgSugest={icon5}
            nomeSugest="natan7z_"
            seguido='Seguido(a) por tayna_vb e mais...'
            />
            <div className="direitos">
                <span><p>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos - Localizações - Idioma - Meta verified (fictício)</p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM GUSTAVO SILVA ROCHA</p></span>
            </div>
        </div>
    )
}