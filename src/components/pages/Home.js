import styles from './Home.module.css'
import carraca from '../../img/carraca.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className= {styles.home_container}>
            <h1>Bem vindo ao <span>Events</span></h1>
            <p>Comece a gerenciar seus eventos agora mesmo!</p>
            <LinkButton to ="/newproject" text="Criar projeto"/> 
            <img src={carraca} alt = "Events"/>
        </section>
    )
}

export default Home