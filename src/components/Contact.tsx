const Contact = () => {
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
            }}>Angel Lord</p>
            <p style={{
                fontSize: "16px",
                color: 'black',
            }}>089123456789</p>
        </div>
    );
};

export default Contact;