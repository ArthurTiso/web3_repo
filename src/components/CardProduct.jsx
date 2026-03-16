

export default function CardProduct({ photo, name, category, price }){

    // const props = {
    //      avatar: "https://github.com/renancavichi.png",
    //      name: "Renan Cavichi",
    //      email: "renancavichi@gmail.com"
    // }

    // const { avatar, name, email } = props


    return (
        <div style={styles.container}>
            <img 
                src={photo} 
                alt={name} 
                style={styles.image} 
            />
            <div>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>R$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}
       
const styles = {
    container: {
        width: 200,
        display: "flex",
        flexDirection: "collum", 
        alignItems: "center",
        gap: 20,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8
    },
    image: {
        width: 190,
        height: 190,
        borderRadius: 8,
        objectFit: "cover"
    },

    title: {
        fontSize: 16,
        fontWeight: "bold"

    },

    textContainer: {
        display: "flex",
        flexDirection: "collum",
        gap: 10,
        padding: 10
    }
}