import './App.css';
import firebase from "./firebase";
import LearnerMenu from "./Components/LearnerMenu";
import React, {useState, useEffect} from "react";
import LearnerDetails from "./Components/LearnerDetails";

function App() {
 const [learners,setLearners] = useState([])
 const [ids, setids] = useState([])
 const [loading,setLoading] = useState(false)
 const ref = firebase.firestore().collection("learners")

const getLearners = () => {
  setLoading(true)
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    const ids = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
      ids.push(doc.id)
    });
    setLearners(items)
    setids(ids)
    setLoading(false)
  });
}

useEffect(() => {
  getLearners()
}, []);

  // ADD FUNCTION
  const addLearner = (newLearner) => {
    ref
      .doc()
      .set(newLearner)
      .catch((err) => {
        console.error(err);
      });
  }



  // EDIT FUNCTION
  const editLearner = (updatedLearner,id) => {
    setLoading();
    ref
      .doc(id)
      .update(updatedLearner)
      .catch((err) => {
        console.error(err);
      });
  }

  const calcAvgScore = () => {
    let totalScore = 0
    let learnerCount = learners.length
    learners.map((learner) => (           
      totalScore += learner.Score 
    ))
    let x = totalScore/learnerCount
    return(x.toFixed(2))
    
  }

  return (
    <div>
      <header>
      
      <LearnerMenu  newLearner={addLearner} ></LearnerMenu>
      <div className='Score'>
      <h1>Scores</h1>
      <h2>Average = {calcAvgScore()}</h2>
      {loading ? <h1>Loading...</h1> : null}
      </div>
      {learners.map((learner,i) => (           
              <LearnerDetails learner={learner} learnerId={ids[i]} editLearner={editLearner}></LearnerDetails> 
            ))}
      </header>
    </div>
  );
}

export default App;
