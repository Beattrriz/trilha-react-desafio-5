import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vzzcykbhybxdepttzjvy.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6emN5a2JoeWJ4ZGVwdHR6anZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MDc1MzIsImV4cCI6MjA0NTM4MzUzMn0.EJ98D7L6lEJFgzKrKKBe8RNJYuBUaagT-Bxf4zxHqRo",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6emN5a2JoeWJ4ZGVwdHR6anZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MDc1MzIsImV4cCI6MjA0NTM4MzUzMn0.EJ98D7L6lEJFgzKrKKBe8RNJYuBUaagT-Bxf4zxHqRo"
    },
    httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false,
    })
})