import React from 'react'
import './css/Details.css'
import { Button } from '@material-ui/core';
import UpdateForm from './UpdateForm';

function LearnerDetails({learner,learnerId, editLearner}) {
    const [showUpdate, setShowUpdate] = React.useState(false)

    function colourSelect() {
        if (learner.Score < 4) {
            return "ColourRed"
        }
        if (learner.Score < 7) {
            return "ColourYellow"
        }
        if (learner.Score === 10) {
            return "ColourPerfectGreen"
        }
        return "ColourGreen"
    }

    const updateLearner = (event) => {
        setShowUpdate(!showUpdate)
    }

    return (
        <div className='Details'>
            <div className={colourSelect()}>
                <p>{learner.FirstName} {learner.LastName}</p>
                <p>{learner.Email}</p>
                <p>{learner.Score}</p>
                <div className='UpdateButton'>
                <Button onClick={updateLearner} variant="contained">Update</Button>
                </div>
            </div>
            {showUpdate? <UpdateForm learner={learner} learnerId={learnerId} editLearner={editLearner}></UpdateForm>:null} 
            
        </div>
    )
}

export default LearnerDetails
