import React from 'react';
import TablaHead from './TablaHead'
import ReduccionBold from './ReduccionBold'


const Tabla = (props) => {


    const payCheck = (boleanExit) => {
        if(boleanExit){
            return "Cobro Exitoso" 
        }else{
            return "Cobro no realizado"
        }
    }

    const payCheckAmount = (boleanExit) => {
        if(boleanExit){
            return <ReduccionBold />
        }else{
            return ""
        }
    }
    return(
        <div>
            <div className=" d-none d-md-block">
                <table className="table">
                    <TablaHead />
                    <tbody>
                        {props.data.map((payData) =>
                            <tr key={payData.id}>
                                <td>{payCheck(payData.exitoso)}</td>
                                <td>{payData.date}</td>
                                <td>{payData.creditcard}</td>
                                <td>{payData.idpayment}</td>
                                <td>{payData.amount}  {payCheckAmount(payData.exitoso)} </td>
                            </tr>
                            
                        )}



                    </tbody>
                </table>
            </div>
            

            <div className=" tabla_mobile d-md-none ">
                {props.data.map((payData) =>
                    <ul key={payData.id}>
                        <li>
                            <h4>Transacción</h4>
                            <span>{payCheck(payData.exitoso)}</span>
                        </li>
                        <li>
                            <h4>Fecha y hora</h4>
                            <span>{payData.date}</span>
                        </li>
                        <li>
                            <h4>Metodo de pago</h4>
                            <span>{payData.creditcard}</span>
                        </li>
                        <li>
                            <h4>ID TRansaccion Bold</h4>
                            <span>{payData.idpayment}</span>
                        </li>
                        <li>
                            <h4>Monto</h4>
                            <span>{payData.amount} <br /> {payCheckAmount(payData.exitoso)} </span>
                        </li>
                    </ul>
                    
                )}
            </div>

            
        </div>

    )
    
}

export default Tabla