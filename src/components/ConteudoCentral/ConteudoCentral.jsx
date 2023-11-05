import './ConteudoCentral.css'
import Itemstories from './Stories/ItemStories'
import Post from './Post/Post'
import iconStory2 from '../../assets/iconStory2.jpg'
import iconStory3 from '../../assets/iconStory3.png'
import iconStory4 from '../../assets/iconStory4.png'
import iconStory5 from '../../assets/iconStory5.png'
import iconStory6 from '../../assets/iconStory6.png'
import iconStory7 from '../../assets/iconStory7.png'
import iconStory8 from '../../assets/iconStory8.png'
import iconStory9 from '../../assets/iconStory9.png'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'
import iconpost2 from '../../assets/blackcat.png'
import iconpost3 from '../../assets/catglasses.png'
import iconpost4 from '../../assets/cat.png'

export default function ConteudoCentral(){
    return(
      <div className='ConteudoCentral'>
        <div className="Stories">
          <Itemstories nameText="rodri.." icon={iconStory2}/>
          <Itemstories nameText="putztaepy" icon={iconStory3}/>
          <Itemstories nameText="rafaelgr..." icon={iconStory4}/>
          <Itemstories nameText="gui244_01" icon={iconStory5}/>
          <Itemstories nameText="soutofellipe" icon={iconStory6}/>
          <Itemstories nameText="instituto..." icon={iconStory7}/>
          <Itemstories nameText="linkdozap" icon={iconStory8}/>
          <Itemstories nameText="euguihz" icon={iconStory9}/>
        </div>
        <div className="Timeline">
          <Post 
          icon={iconStory3}
          nameUser="putztaepy"
          time="5 h"
          post={post1}
          miniIcon={iconStory2}
          NameLike='rodrig...'
          NamePerfil='putztaepy'
          Descricao='...'
          quantComent='40'
          NamePerfilComent='kamiishppoina'
          coment='Quando crescer quero ser assim'
          NamePerfilComent2='marih.chioma'
          coment2='Linda'
          />
          <Post 
          icon={iconpost2}
          nameUser="insiderstore"
          time="1 d"
          post={post2}
          miniIcon={iconStory3}
          NameLike='putztaepy'
          NamePerfil='insiderstore'
          Descricao='Outfit check with Oversized T-Shirt via @jbossle

          #insiderstore #oversized #modamasculina'
          quantComent='43'
          NamePerfilComent='rodrigoamgoes'
          coment='FAKE NATTY!!!'
          NamePerfilComent2='lucaslucco'
          coment2='Look at him!'
          />
          <Post 
          icon={iconpost3}
          nameUser="senactito"
          time="3 d"
          post={post3}
          miniIcon={iconStory7}
          NameLike=''
          NamePerfil=''
          Descricao=''
          quantComent='23'
          NamePerfilComent='maquiagens4436'
          coment='Zeraram a trend!!!!'
          NamePerfilComent2='gabriel4231'
          coment2='muito bom kkkkkkkkk'
          />
          <Post 
          icon={iconpost4}
          nameUser="iisavenancio"
          time="4 d"
          post={post4}
          miniIcon={iconStory2}
          NameLike=' rodrig...'
          NamePerfil='iisavenancio'
          Descricao='🐶'
          quantComent='4'
          NamePerfilComent='iisavenancio'
          coment='eu e o dogo do caue'
          NamePerfilComent2='barsuk_baro..'
          coment2='plin🎐🔈📻'
          />
        </div>
      </div>
    )
}