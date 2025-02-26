import { doc, getDoc, collection, setDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import {useAuthContext} from "useContext/useAuthContext";


const firebaseConfig = {
    apiKey: "AIzaSyCpdyNFZTAcGZjCVxTqxDiiLx3XW2E8OD0",
    authDomain: "creativelivingstudio-4dde4.firebaseapp.com",
    projectId: "creativelivingstudio-4dde4",
    storageBucket: "creativelivingstudio-4dde4.firebasestorage.app",
    messagingSenderId: "982129293782",
    appId: "1:982129293782:web:5f80082d2e5f9993668c77",
    measurementId: "G-GKTH553LG9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app)
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);


const ProfileContext = createContext(
    {
        userData: null,
        firstName: null,
        lastName: null,
        totalPrice: null,
        cart: [],
        addCart: () => Promise.resolve(),
    }
);

const ProfileProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const { Authenticated } = useAuthContext();

    const email = Authenticated();

    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    

    useEffect( () => {

        const getProfileData = async () => {

            console.log("check email in the function: ", email);

            if(!email){
                console.log('email is null');
                return;
            }
            else{
                console.log('yes, we got email: ', email)
            }

            try{
                const docRef = doc(db, "authentication", email);            // collection -> document -> field
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const data = docSnap.data();
                    setUserData(data);
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    // !!!!!create a useState hook, then set setFirstName(data.firstName) and setLastName(data.lastName)
                    // !!!!!don't do {data.firstName} or {data.lastName} directly, because that will have error: Cannot read properties of null (reading 'firstName')
                    // Because of the Promise, sometime the haven't update yet when trigger the data or setUserData(data), and if data.firstName or data.lastName directly, it = null

                    console.log("check inside try catch: ", userData)
                    console.log("check inside try catch: ", firstName) // field
                    console.log("check inside try catch: ", lastName) //field
                    // !!!!! measure the name of the field(字段) is correct. Example: firstName, lastName

                } else {
                    console.log("No such document! Maybe no such email in the database (collection: authentication)!");
                }
            }catch(error)
            {
                console.error("Error fetching profile data: ", error);
            }
        }

        getProfileData();
}, [email])

// useEffect(() => {
//     const docRef = collection(db, "authentication", email, "cart");

//     const getCart = async() => {
            
//         const docSnap = await getDocs(docRef);  // getDocs (get multiple document), getDoc (get one document)
//         // docSnap = [{}, {}, {}]
//         if(!docSnap.empty){
//             const cartList = docSnap.docs.map(element => ({    //cartList = {}
//                 id: element.id,  // key
//                 ...element.data(),  // all the data
//             }))
//             //display like: console.log([0:{}, 1:{}, 2:{}, 3:{}, 4:{}, 5:{}])
//             setCart(cartList);
//             return cart;
//         }
//         else{
//             console.log("cart database not found")
//         }

//         console.log(cart);
//     }
//         getCart();

// }, [email])

    useEffect(() =>{

        if(!email) return;
        const docRef = collection(db, "authentication", email, "cart");

        //get realtime data
        const unsubscribe = onSnapshot(docRef, (snapshot) =>{    //docRef = snapshot (snapshot is a callback to be called every time a new QuerySnapshot(update data) is available.)
            if(!snapshot.empty){
                const cartList = snapshot.docs.map(element => ({
                    id: element.id,
                    ...element.data(),
                }));
                setCart(cartList);
                console.log(cartList);
            }
            else{
                console.log("Cart database not found");
                setCart([]);
            }
        }, (error) => {
            console.error("Error fetching cart:", error);
        }
    );

        return () => unsubscribe();
    }, [email]);


    async function addCart(product, image, name, price){

        if(!email) return;

        const data = {
            image: image,
            name: name,
            price: price,
        }

        await setDoc(doc(db, "authentication", email, "cart", product), data)
    }

    

    useEffect(() => {
        const total = cart.reduce((acc, element) => acc + element.price, 0);
        setTotalPrice(total);
    }, [cart])


    return(
        <ProfileContext.Provider
        value={{
            userData,
            firstName,
            lastName,
            cart,
            totalPrice,
            addCart,
        }}
        >
            {children}
        </ProfileContext.Provider>
    )   
}

const useProfileContext = () => {
    return useContext(ProfileContext)
};

export { ProfileProvider, useProfileContext }