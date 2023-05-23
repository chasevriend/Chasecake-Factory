import cookieChocolate from "../images/cookieChocolate.png";
import cookieLemon from "../images/cookieLemon.png"
import cookieSnickerdoodle from "../images/cookieSnickerdoodle.png"
import cookieCaramel from "../images/cookieCaramel.png"
import cupcakeNutella from "../images/cupcakeNutella.png"
import cupcakeSmores from "../images/cupcakeSmores.png"
import cupcakeEclair from "../images/cupcakeEclair.png"
import cupcakePina from "../images/cupcakePina.png"
import cupcakeLemonRazzle from "../images/cupcakeLemonRazzle.png"
import cupcakeLemonBliss from "../images/cupcakeLemonBliss.png"
import cupcakeRedVelvetCreamCheese from "../images/cupcakeRedVelvetCreamCheese.png"
import cupcakeRedVelvetOreo from "../images/cupcakeRedVelvetOreo.png"
import cupcakeVeryBerry from "../images/cupcakeVeryBerry.png"
import cupcakeStrawberryBliss from "../images/cupcakeStrawberryBliss.png"
import cakeChocolate from "../images/cakeChocolate.png"
import cakeVanilla from "../images/cakeVanilla.png"
import cakeRedVelvet from "../images/cakeRedVelvet.png"
import cakeConfetti from "../images/cakeConfetti.png"


const products = [
    {
        id: "1",
        category: "Cookie",
        flavor: "Chocolate",
        img: cookieChocolate,
        name: "Chocolate Chip Cookie",
        price: "2.29",
        description: "Chocolate Chip Cookie - Delicious large cookies freshly baked and ready to enjoy. They average 4 inches across."
    },
    {
        id: "2",
        category: "Cookie",
        flavor: "Lemon",
        img: cookieLemon,
        name: "Lemon Gem Cookie",
        price: "2.29",
        description: "Lemon Gem Cookie - Delicious large cookies freshly baked and ready to enjoy. They average 4 inches across."
    },
    {
        id: "3",
        category: "Cookie",
        flavor: "SnickerDoodle",
        img: cookieSnickerdoodle,
        name: "SnickerDoodle Cookie",
        price: "2.29",
        description: "Snickerdoodle Cookie - Delicious large cookies freshly baked and ready to enjoy. They average 4 inches across."
    },
    {
        id: "4",
        category: "Cookie",
        flavor: "Caramel Pecan",
        img: cookieCaramel,
        name: "Caramel Pecan Cookie",
        price: "2.29",
        description: "Caramel Pecan Cookie - Delicious large cookies freshly baked and ready to enjoy. They average 4 inches across."
    },
    {
        id: "5",
        category: "Cupcake",
        flavor: "Chocolate",
        img: cupcakeNutella,
        name: "Nutella Cupcake",
        price: "3.95",
        description: "This delicious cupcake is like a party in your mouth! A fluffy, light chocolate cake is filled with a creamy vanilla mousse and topped with a delightful nutella mousse icing. Enjoy a sweet and enjoyable treat that won't weigh you down!"
    },
    {
        id: "6",
        category: "Cupcake",
        flavor: "Chocolate",
        img: cupcakeSmores,
        name: "S'mores Cupcake",
        price: "3.95",
        description: "The perfect combination of flavors for an enjoyable snack. Enjoy the perfect balance of chocolate and sweetness without feeling weighed down."
    },
    {
        id: "7",
        category: "Cupcake",
        flavor: "Vanilla",
        img: cupcakeEclair,
        name: "Eclair Cupcake",
        price: "3.95",
        description: "White cake, vanilla cream filled, and topped with fudge."
    },
    {
        id: "8",
        category: "Cupcake",
        flavor: "Vanilla",
        img: cupcakePina,
        name: "Pina Colada Cupcake",
        price: "3.95",
        description: "White cake, pineapple filled, and topped with vanilla mousse and coconut."
    },
    {
        id: "9",
        category: "Cupcake",
        flavor: "Lemon",
        img: cupcakeLemonRazzle,
        name: "Lemon Razzle Cupcake",
        price: "3.95",
        description: "Lemon cake, with vanilla cream filling, and topped with raspberry and vanilla mousse."
    },
    {
        id: "10",
        category: "Cupcake",
        flavor: "Lemon",
        img: cupcakeLemonBliss,
        name: "Lemon Bliss Cupcake",
        price: "3.95",
        description: "Lemon cake with lemon filling and cream cheese mousse icing."
    },
    {
        id: "11",
        category: "Cupcake",
        flavor: "Red Velvet",
        img: cupcakeRedVelvetCreamCheese,
        name: "Cream Cheese Mousse Cupcake",
        price: "3.95",
        description: "Indulge in a delectable cupcake that is sure to tantalize your taste buds! Our Red Velvet Cupcake is filled with a creamy vanilla mousse and topped with a tantalizing Cream Cheese Mousse for a delightful flavor combination. Enjoy a light and sweet treat without the richness!"
    },
    {
        id: "12",
        category: "Cupcake",
        flavor: "Red Velvet",
        img: cupcakeRedVelvetOreo,
        name: "Oreo Mousse Cupcake",
        price: "3.95",
        description: "We use icing that will make your taste buds dance. Enjoy a taste of sweetness without the heavy richness of other desserts."
    },
    {
        id: "13",
        category: "Cupcake",
        flavor: "Strawberry",
        img: cupcakeVeryBerry,
        name: "Very Berry Cupcake",
        price: "3.95",
        description: "Strawberry cake with strawberry filling and topped with strawberry mousse icing."
    },
    {
        id: "14",
        category: "Cupcake",
        flavor: "Strawberry",
        img: cupcakeStrawberryBliss,
        name: "Strawberry Bliss Cupcake",
        price: "3.95",
        description: "Strawberry cake with strawberry filling and topped with cream cheese mousse icing."
    },
    {
        id: "15",
        category: "Cake",
        flavor: "Chocolate",
        img: cakeChocolate,
        name: "Chocolate Cake",
        price: "29",
        description: "Chocolate Cake with Chocolate Chip Mousse Filling."
    },
    {
        id: "16",
        category: "Cake",
        flavor: "Vanilla",
        img: cakeVanilla,
        name: "White Cake",
        price: "29",
        description: "White Cake with Vanilla Bavarian Custard and Raspberry Filling."
    },
    {
        id: "17",
        category: "Cake",
        flavor: "Red Velvet",
        img: cakeRedVelvet,
        name: "Red Velvet Cake",
        price: "29",
        description: "Red Velvet Cake with Cream Cheese Mousse Filling."
    },
    {
        id: "18",
        category: "Cake",
        flavor: "Vanilla",
        img: cakeConfetti,
        name: "Confetti Cake",
        price: "29",
        description: "Confetti Cake with Vanilla Bavarian Custard Filling."
    },
]

function getProductData(id) {
    let productData = products.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }

    return productData;
}

export { products, getProductData };