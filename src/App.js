import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/Feedbackdata";
import Header from "./components/Header";

const App = () => {
    const [feedback, setFeedback] = useState( FeedbackData )
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback = {feedback}/>
            </div>
            
        </>
    )
}

export default App