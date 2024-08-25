


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const PORT = process.env.PORT || 3000;

// const USER_ID = "Reshma_S_24122003";
// const EMAIL = "reshma.s2021c@vitstudent.ac.in";
// const ROLL_NUMBER = "21BIT0700";

// app.post("/bfhl", (req, res) => {
//     const data = req.body.data;
//     if (!data || !Array.isArray(data)) {
//         return res.status(400).json({ is_success: false });
//     }

//     let numbers = [];
//     let alphabets = [];
//     let highestLowercaseAlphabet = "";

//     data.forEach(item => {
//         if (!isNaN(item)) {
//             numbers.push(item);
//         } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
//             alphabets.push(item);
//             if (item === item.toLowerCase() && item > highestLowercaseAlphabet) {
//                 highestLowercaseAlphabet = item;
//             }
//         }
//     });

//     res.json({
//         is_success: true,
//         user_id: USER_ID,
//         email: EMAIL,
//         roll_number: ROLL_NUMBER,
//         numbers: numbers,
//         alphabets: alphabets,
//         highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
//     });
// });

// app.get("/bfhl", (req, res) => {
//     res.status(200).json({ operation_code: 1 });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


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
});

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// import React, { useState } from "react";
// import axios from "axios";
// import Select from "react-select";

// function App() {
//     const [jsonInput, setJsonInput] = useState("");
//     const [response, setResponse] = useState(null);
//     const [selectedOptions, setSelectedOptions] = useState([]);

//     const handleSubmit = async () => {
//         try {
//             const parsedInput = JSON.parse(jsonInput);
           
//             const res = await axios.post("https://bajajbackend-1-g9tn.onrender.com/bfhl", parsedInput);
//             setResponse(res.data);
//         } catch (error) {
//             alert("Invalid JSON or Error in API Call");
//         }
//     };

//     const handleSelectChange = (selectedOptions) => {
//         setSelectedOptions(selectedOptions || []);
//     };

//     const renderResponse = () => {
//         if (!response) return null;

//         return (
//             <div>
//                 {selectedOptions.some(option => option.value === "Alphabets") && (
//                     <div>Alphabets: {response.alphabets.join(", ")}</div>
//                 )}
//                 {selectedOptions.some(option => option.value === "Numbers") && (
//                     <div>Numbers: {response.numbers.join(", ")}</div>
//                 )}
//                 {selectedOptions.some(option => option.value === "Highest lowercase alphabet") && (
//                     <div>Highest Lowercase Alphabet: {response.highest_lowercase_alphabet.join(", ")}</div>
//                 )}
//             </div>
//         );
//     };

//     const options = [
//         { value: "Alphabets", label: "Alphabets" },
//         { value: "Numbers", label: "Numbers" },
//         { value: "Highest lowercase alphabet", label: "Highest lowercase alphabet" },
//     ];

//     return (
//         <div className="App">
//             <h1>{response?.roll_number}</h1>
//             <textarea
//                 value={jsonInput}
//                 onChange={(e) => setJsonInput(e.target.value)}
//                 placeholder='Enter JSON here'
//                 rows={10}
//                 cols={50}
//             />
//             <br />
//             <button style={{background:'blue',width:'400px',height:'50px',color:'white'}} onClick={handleSubmit}>Submit</button>
//             <br />
//             <Select
//                 isMulti
//                 options={options}
//                 onChange={handleSelectChange}
//                 value={selectedOptions}
//                 placeholder="Select options..."
//                 styles={{ container: (provided) => ({ ...provided, width: '400px', marginTop: '20px' }) }}
//             />
//             <div>{renderResponse()}</div>
//         </div>
//     );
// }

// export default App;

