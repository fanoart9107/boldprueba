import React, { useEffect, useState } from 'react';
import PaymentService from '../services/PaymentService';

// Components
import Filtrar from '../components/Filtrar';
import TotalVentas from '../components/TotalVentas';
import Tabla from '../components/Tabla';

import { parse, isThisWeek, isToday, getMonth } from 'date-fns';

const MiNegocio = () => {

    // Globales de control
    const [payments, setPayments] = useState([]);
    const [paymentsToShow, setPaymentstoShow] = useState([]);


    useEffect(() => {
        PaymentService.getPayments().then((data) => {
            setPayments(data);
        }).catch(() => {
            // Error
        });
    }, []);

    
    useEffect(() => {
        filterForDate('month');
    }, [payments]);

    /**
     * Filtra los pagos para esta semana
     */
    const filterThisWeek = () => {
        return payments.filter((currentPayment) => {
            const currentDate = parse(currentPayment.date, 'yyyy-MM-dd HH:mm:ss', new Date());
            return isThisWeek(currentDate, { weekStartsOn: 0 });
        });
    };

    /**
     * Filtra los pagos para hoy
     */
    const filterToday = () => {
        return payments.filter((currentPayment) => {
            const currentDate = parse(currentPayment.date, 'yyyy-MM-dd HH:mm:ss', new Date());
            return isToday(currentDate);
        });
    };

    /**
     * Filtra los pagos para el mes
     */
    const filterMonth = () => {
        return payments.filter((currentPayment) => {
            const currentDate = parse(currentPayment.date, 'yyyy-MM-dd HH:mm:ss', new Date());
            return getMonth(currentDate) == getMonth(new Date());
        });
    };

    /**
     * Filtra los pagos segun el rango requerido
     * 
     * @param {String} filterType 
     */
    const filterForDate = (filterType) => {
        if (payments.length > 0) {
            switch (filterType) {
                case 'week':
                    setPaymentstoShow(filterThisWeek());
                    break;
                case 'today':
                    setPaymentstoShow(filterToday());
                    break;
                case 'month':
                    setPaymentstoShow(filterMonth());
                    break;
                default:
                    break
            }
        }
    };

    return (
        <div className="container">
            <div className="row">
                <TotalVentas />
                
                <div className="cont_filters col-md-8 " >
                    <section className="cont_btn1 d-flex   bd-highligh">
                        <button className="btn flex-fill bd-highlight" onClick={() => {
                            filterForDate('today');
                        }}>Hoy</button>
                        <button className="btn flex-fill bd-highlight" onClick={() => {
                            filterForDate('week');
                        }}>Esta semana</button>
                        <button className="btn flex-fill bd-highlight" onClick={() => {
                            filterForDate('month');
                        }}>Septiembre</button>
                    </section>

                    <Filtrar />
                </div>
            </div>

            <div>
                <section className=" cont_table col-md-12 d-flex flex-column">
                    <div className="title"> Tus ventas de Septiembre</div>
                    <div>
                        <Tabla data={paymentsToShow} />     
                    </div>
                </section>
            </div>

        </div>

    )
};


export default MiNegocio;
