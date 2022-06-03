import {useEffect, useState} from 'react'
import Input from '../forms/Input'
import Select from '../forms/Select'
import Submit from '../forms/Submit'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        
    fetch('http://localhost:5000/categories', 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })

    .catch((err) => console.log(err))
    },[]
    )
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
            <Select name="category_id" text="Selecione o tipo" options={categories}/>
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm
