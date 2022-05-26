import Input from '../forms/Input'
import Select from '../forms/Select'
import Submit from '../forms/Submit'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}) {
    return (
        <form className={styles.forms}>
            <Input type="text"
            text="Nome do evento"
            name="name"
            placeholder="Insira o nome do evento"
            />
            <Input type="number"
            text="Valor do ingresso"
            name="name"
            placeholder="Insira o valor do ingresso"
            />
            <Select name="category_id" text="Selecione o tipo"/>
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm
