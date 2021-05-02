import React from 'react'
import { Slider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function UpdateForm({learner,learnerId,editLearner}) {
    const [email,setEmail] = React.useState("")
    const [fName,setfName] = React.useState("")
    const [lName,setlName] = React.useState("")
    const [score,setScore] = React.useState(0)
    const [showAlert, setAlert] = React.useState(false)
    const [alertType, setAlertType] = React.useState("success")

   // {FirstName: fName, Email: email, Score: score, LastName: lName}
   console.log(editLearner)

    function checkBeforeAdd(event)
    {
        let valid = true
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email === "" || fName === "" || lName === "") {
            valid = false 
        }
        if (!re.test(email)) {
            valid = false
        }
        if (valid) {
            console.log("Adding to database")
            editLearner({FirstName: fName, Email: email, Score: score, LastName: lName},learnerId)
            setAlertType("success")
        }
        else if(!valid){
            setAlertType("error")
        }
        setAlert(true)
        
    }

    const handleSliderChange = (event, newValue) => {
        setScore(newValue)
        console.log(score)
    }
    return (
        <div className="AddForm">
            <form>
                <input onChange={(e) => setEmail(e.target.value)} placeholder={learner.Email}></input>
                <input onChange={(e) => setfName(e.target.value)} placeholder={learner.FirstName}></input>
                <input onChange={(e) => setlName(e.target.value)} placeholder={learner.LastName}></input>
                <div className="Slider">
                <Slider onChange={handleSliderChange} defaultValue={5} min={0} max={10} marks={true} valueLabelDisplay={'on'}></Slider>
                <Button variant="contained" color="primary" onClick={checkBeforeAdd}>
                    Submit
                </Button>
                {showAlert?<Alert onClick={() => setAlert(false)} variant="filled" severity={alertType}>
                    {alertType} adding learner
                </Alert>:null}
                </div>
            </form>      
        </div>
    )
}


export default UpdateForm
