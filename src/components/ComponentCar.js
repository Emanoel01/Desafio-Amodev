import styles from '../styles/Index.module.css';
import React from "react";

export default function ComponentCar(props){
    return(
        //  Component
        <div className={styles.component}>

                {/* PRIMEIRA IMAGEM DO CARRO */}
                <div className={styles.image_component}>
                    <img className={styles.image} src={props.linkImage}/>
                </div>


                {/* INFORMAÇÕES DOS CARROS */}
                <div className={styles.car_information}>
                    <p className={styles.car_name}>{props.car_name}</p>

                    <p className={styles.car_info}>{props.car_year}| {props.car_type}</p>
                    <p className={styles.car_info}>{props.car_fuel}| {props.car_km} KM</p>

                    <p className={styles.car_price}>R$ {props.car_price}</p>
                </div>

        </div>
    )
}