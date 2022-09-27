import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

const App = () => {
    const [state, setstate] = useState(
        {
            "feedback": [
              {
                "id": 1,
                "rating": 10,
                "text": "This is feedback item 1 coming from the backend"
              },
              {
                "id": 2,
                "rating": 8,
                "text": "This is feedback item 2 coming from the backend"
              },
              {
                "text": "This is feedback item 3 coming from the backend",
                "rating": 10,
                "id": 3
              }
            ]
        }
    )
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackItem />
            </div>
            
        </>
    )
}

export default App