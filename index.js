

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const USER_ID = "Reshma_S_24122003";
const EMAIL = "reshma.s2021c@vitstudent.ac.in";
const ROLL_NUMBER = "21BIT0700";

app.post("/bfhl", (req, res) => {
    try {
        const data = req.body.data;
        
        // Validate the input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ 
                is_success: false,
                message: "Invalid input format. Expected an array of strings." 
            });
        }

        let numbers = [];
        let alphabets = [];
        let highestLowercaseAlphabet = "";

        data.forEach(item => {
            // Handle numbers
            if (!isNaN(item) && typeof item === 'string') {
                numbers.push(item);
            }
            // Handle single character alphabets
            else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
                alphabets.push(item);
                if (item === item.toLowerCase() && item > highestLowercaseAlphabet) {
                    highestLowercaseAlphabet = item;
                }
            }
        });

        res.json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
        });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({
            is_success: false,
            message: "Internal Server Error"
        });
    }
});

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

