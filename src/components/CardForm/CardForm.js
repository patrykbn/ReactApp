import styles from './CardForm.module.scss'
import { useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const columnId = props.columnId
        dispatch({ type: 'ADD_CARD', payload: { title, columnId}})
        setTitle('');
    }
    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
                <Button>Add</Button>
            </form>
    )
}

export default CardForm;