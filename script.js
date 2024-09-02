let username = 'sreeramulakalyan72@gmail.com';
let password = 'S.kalyan@2000';

        // Function to validate login
        function validateLogin() {
            let uname = document.getElementById("Uemail").value;
            let upwd = document.getElementById("upwd").value;

            if (username === uname && password === upwd) {
                // Redirect to Google if credentials match
                window.location.href = "https://www.google.com";
            } else {
                // Show error message if credentials don't match
                document.getElementById('para').innerHTML="Please Enter Correct Credentials"

    
            }
        }