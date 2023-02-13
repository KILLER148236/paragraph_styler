import React from 'react'


export default function alert(props) {


    const capital=(word)=>{

        const text=word.toLowerCase();
        
        return text.charAt(0).toUpperCase()+text.slice(1);
        }
        

    return (
       props.alert&& <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}</strong> {props.alert.msg}
                 
            </div>
        </div>
    )
}
