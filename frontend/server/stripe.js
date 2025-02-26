// const Stripe = require('stripe');
import Stripe from 'stripe'
import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();  // 加载 .env 文件中的变量

app.use(cors());

app.use(express.json()); // 重要！解析 JSON 请求体
app.use(express.urlencoded({ extended: true })); // 处理 URL 编码的请求体


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/stripe", async (req, res) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: req.body.items,
//             mode: "payment",
//             success_url: "http://localhost:3000/success",
//             cancel_url: "http://localhost:3000/cancel",
//         });

//         res.status(200).json({ sessionId: session.id });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

app.post('/stripe', async (req, res) => {
    // 确保接收到的请求中有 items
    if (!req.body.items) {
        return res.status(400).json({ error: 'Items are required' });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: req.body.items,  // 这里就是前端发送的 items
            mode: "payment",
            success_url: "http://localhost:3000/Profile",
            cancel_url: "http://localhost:3000/Profile",
        });

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// export default async function handler(req, res) {
//     if (req.method !== "POST") return res.status(405).end();

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: req.body.items,
//             mode: "payment",
//             success_url: "https://yourdomain.com/success",
//             cancel_url: "https://yourdomain.com/cancel",
//         });

//         res.status(200).json({ sessionId: session.id });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

app.listen(3001, () => {
    console.log('Server is running on localhost:3001');
    });


// server/server.js
// require('dotenv').config();
// const express = require('express');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Post endpoint to create a payment intent
// app.post("/server/stripe", async (req, res) => {
//   const { amount } = req.body;
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'aud',
//     });
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error('Stripe error:', error);
//     res.status(500).send('Error processing payment');
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
