import React, {useEffect, useState} from "react";

//type props bisa dipakai untuk variabel
type Props = {
    name: string
    phone: string
}
                                // ini adalah variabel
const Contact: React.FC<Props> = ({ name, phone }) => {
    const [isPhoneCensored, setIsPhoneCensored] = useState(false);

    useEffect(() => {
        if (isPhoneCensored) {
            alert(`${name}'s phone number is censored !`)
        }
        // eslint-disable-next-line
    }, [isPhoneCensored] )

    return (
//style dalam div disebut prop/properties
        <div style={{
            padding: "16px 0px",
            borderBottom: "1px solid rgba(0, 0, 128, 0.5)"
        }}
        onClick={() => setIsPhoneCensored(!isPhoneCensored)}
        >
            <p style={{
                fontSize: "16px",
                color: 'black',
                marginBottom: 8,
            }}>{name}</p>
            {!isPhoneCensored && (
                <p style={{
                    fontSize: "16px",
                    color: 'black',
                }}>{phone}</p>
            )}
            {isPhoneCensored && (
                <p style={{
                    fontSize: "16px",
                    color: 'black',
                }}>*************</p>
            )}
        </div>
    );
};

export default Contact;