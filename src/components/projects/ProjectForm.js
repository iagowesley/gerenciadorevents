import Input from '../forms/Input'
import styles from './ProjectForm.module.css'


function ProjectForm() {
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
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm
