import React from 'react'
import './css/Menu.css'
import AddForm from './AddForm'



const LearnerMenu = ({newLearner}) => {

    return (
        <div className='Menu'>
            <header>
                <h1>Add New Learners</h1>
                <AddForm newLearner={newLearner}></AddForm>

            </header>
        </div>
    )
}

export default LearnerMenu
