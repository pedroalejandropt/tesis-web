import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './exchangeform.module.css'


const ExchangeFormComponent = (props) => {
    return (
        <div className={styles.card}>
            <h1>{props.label} Tipo de Cambio</h1>
            <div className='inputs'>
                <Button variant="outlined" color='primary' className={styles.input} onClick={() => props.label === 'Agregar' ? props.handleDolar(props.bcv, 'add') : props.handleDolar(props.bcv, 'edit')}> Banco Central de Venezuela - Bs. {props.bcv}</Button>
                <Button variant="outlined" color='secondary' className={styles.input} onClick={() => props.label === 'Agregar' ? props.handleDolar(props.dToday, 'add') : props.handleDolar(props.dToday, 'edit')}> DolarToday - Bs. {props.dToday}</Button>
                <TextField className={styles.input} id="outlined-basic" label="Valor Propio" variant="outlined"
                    value={props.exchange.amount} onChange={(event) => props.handleDolar(event.target.value)}/>
            </div>
            <Button variant="contained" color='secondary' className={styles.button} onClick={props.hideForm}>Cancelar</Button>
            <Button variant="contained" color='primary' className={styles.button} onClick={() => props.label === 'Agregar' ? props.addExchange() : props.updateExchange(props.exchange)}>{ props.label }</Button>
        </div>
    );

}

export default ExchangeFormComponent;
