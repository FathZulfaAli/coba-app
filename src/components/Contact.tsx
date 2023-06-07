import React from "react";

//type props bisa dipakai untuk variabel
type Props = {
    name: string
    phone: string
}
                                // ini adalah variabel
const Contact: React.FC<Props> = ({ name, phone }) => {
    return (
//style dalam div disebut prop/properties
        <div style={{
            padding: "16px 0px",
            borderBottom: "1px solid rgba(0, 0, 128, 0.5)"
        }}>
            <p style={{
                fontSize: "16px",
                color: 'black',
                marginBottom: 8,
            }}>{name}</p>
            <p style={{
                fontSize: "16px",
                color: 'black',
            }}>{phone}</p>
        </div>
    );
};

export default Contact;