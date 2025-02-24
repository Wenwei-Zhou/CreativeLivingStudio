// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, getAuth, doc, getDocFromCache } from "firebase/firestore";
// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpdyNFZTAcGZjCVxTqxDiiLx3XW2E8OD0",
//   authDomain: "creativelivingstudio-4dde4.firebaseapp.com",
//   projectId: "creativelivingstudio-4dde4",
//   storageBucket: "creativelivingstudio-4dde4.firebasestorage.app",
//   messagingSenderId: "982129293782",
//   appId: "1:982129293782:web:5f80082d2e5f9993668c77",
//   measurementId: "G-GKTH553LG9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
// const auth = getAuth(app);

// //const { id } = useParams();
// //const [product, setProduct] = useState(null);

// export {app, analytics, db, auth};

// export const fetchElectronics = async () => {

//     // const docRef = collection(db, "electronics");
//     // const docSnap = await getDocs(docRef);

//     const querySnapshot = await getDocs(collection(db, "electronics"));
//     querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     });
    
//     // if(docSnap.empty) {
//     //     console.log("No such documents!");
//     // }

//     // docSnap.forEach((doc) => {
//     //     console.log(`Document ID: ${doc.id} =>` , doc.data());
//     // });


//     querySnapshot.forEach((doc) => {
//         console.log(doc.data().name)
//     });

//     //return querySnapshot;
// }






// // export const getElectronics = () => {

// //     const docRef = doc(db, "electronics", "light");

// //     const { id } = useParams();
// //     const [product, setProduct] = useState(null);

// //     useEffect(() => {

// //         const fetchProduct = async () => {
// //             if(!id)
// //                 {
// //                     return;
// //                 }

// //             const docRef = doc(db, "electronics", "light");

// //             const docSnap = await getDoc(docRef);

// //             if (docSnap.exists()) {
// //             console.log("Document data:", docSnap.data());
// //             } else {
// //             // docSnap.data() will be undefined in this case
// //             console.log("No such document!");
// //             }
// //             fetchProduct();
// //         }
// //     }, [id]);
// // }
