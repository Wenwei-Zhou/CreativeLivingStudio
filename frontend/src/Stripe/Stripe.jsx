import { loadStripe } from "@stripe/stripe-js";

const stripeApiKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;


const stripePromise = loadStripe(stripeApiKey);

// export const handleCheckout = async (totalPrice) => {
//     const response = await fetch("http://localhost:3001/stripe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         items: [
//           {
//             price_data: {
//               currency: "aud",
//               product_data: { name: "Test Item" },
//               unit_amount: totalPrice,
//             },
//             quantity: 1,
//           },
//         ],
//       }),
//     });
  
//     const { sessionId } = await response.json();
//     const stripe = await stripePromise;
//     stripe.redirectToCheckout({ sessionId })
//         .then((result) => {
//             if (result.error) {
//                 console.error(result.error.message);
//             }
//         });
//   };


  export const handleCheckout = async (totalPrice) => {
    
    console.log("stripe-api: ", stripeApiKey)

    // Make the request to your server to create the session
    const response = await fetch("http://localhost:3001/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            items: [
                {
                    price_data: {
                        currency: "aud",
                        product_data: { name: "Test Item" },
                        unit_amount: totalPrice,
                    },
                    quantity: 1,
                },
            ],
        }),
    });

    // Ensure the response is ok and contains sessionId
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating session:", errorData.error);
        return;
    }

    // Extract sessionId from the backend response
    const { sessionId } = await response.json();
    console.log('Received sessionId:', sessionId);  // Debugging step

    // Get the Stripe instance
    const stripe = await stripePromise;

    // Make sure stripe is loaded before calling redirectToCheckout
    if (stripe) {
        stripe.redirectToCheckout({ sessionId })
            .then((result) => {
                if (result.error) {
                    console.error(result.error.message);
                }
            });
    } else {
        console.error("Stripe.js did not load properly.");
    }
};

// export const handleCheckout = async (totalPrice) => {
//     fetch('http://localhost:3001/server/stripe', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ amount: totalPrice }),  // Example amount: 5000 cents
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('PaymentIntent client secret:', data.clientSecret);
//         const { sessionId } = response.json();
//         stripePromise.redirectToCheckout({ sessionId });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

    
// }