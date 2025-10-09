import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/quiz.css';

function Quiz() {
    const questions = [
        // Includes 5 image-based questions
        { questionText: "What does this road sign mean?", imageUrl: "/images/quiz/stop_sign.jpg", answerOptions: [{ text: "Yield" }, { text: "Stop completely", isCorrect: true }, { text: "Slow down" }, { text: "Do not enter" }] },
        { questionText: "When pedestrians are at a crosswalk, you should:", answerOptions: [{ text: "Honk to alert them" }, { text: "Stop and let them cross", isCorrect: true }, { text: "Drive around them" }, { text: "Speed up" }] },
        { questionText: "This sign indicates:", imageUrl: "/images/quiz/pedestrian_crossing_sign.png", answerOptions: [{ text: "A nearby school" }, { text: "A playground ahead" }, { text: "A pedestrian crossing ahead", isCorrect: true }, { text: "A jogging path" }] },
        { questionText: "What is the main purpose of a seatbelt?", answerOptions: [{ text: "To avoid a fine" }, { text: "To keep you in your seat during a crash", isCorrect: true }, { text: "To look professional" }, { text: "To keep clothes clean" }] },
        { questionText: "A yellow (amber) traffic light means:", answerOptions: [{ text: "Stop immediately" }, { text: "Prepare to stop as the light is changing to red", isCorrect:true }, { text: "Speed up" }, { text: "The light is broken" }] },
        { questionText: "When driving in heavy fog, you should use:", answerOptions: [{ text: "High-beam headlights" }, { text: "Low-beam headlights", isCorrect: true }, { text: "Parking lights only" }, { text: "No lights" }] },
        { questionText: "The 'Three-Second Rule' helps you:", answerOptions: [{ text: "Park your car" }, { text: "Maintain a safe following distance", isCorrect: true }, { text: "Change lanes" }, { text: "React to a green light" }] },
        { questionText: "What does this sign mean?", imageUrl: "/images/quiz/no_u_turn_sign.png", answerOptions: [{ text: "No left turn" }, { text: "No U-turn is permitted", isCorrect: true }, { text: "Sharp turn ahead" }, { text: "One-way street" }] },
        { questionText: "If an emergency vehicle is approaching with sirens and flashing lights, you should:", answerOptions: [{ text: "Speed up and get out of the way" }, { text: "Pull over to the right and stop", isCorrect: true }, { text: "Continue at the same speed" }, { text: "Follow it closely" }] },
        { questionText: "When are roads most slippery during rainfall?", answerOptions: [{ text: "After it has been raining for hours" }, { text: "During the first few minutes of rain", isCorrect: true }, { text: "When the rain stops" }, { text: "The next day" }] },
        { questionText: "This sign warns you about:", imageUrl: "/images/quiz/slippery_road_sign.jpg", answerOptions: [{ text: "Falling rocks" }, { text: "The road ahead may be slippery when wet", isCorrect: true }, { text: "A winding road" }, { text: "Road construction" }] },
        { questionText: "Before changing lanes, you should:", answerOptions: [{ text: "Only check your mirrors" }, { text: "Check mirrors, signal, and check your blind spot", isCorrect: true }, { text: "Just signal and go" }, { text: "Honk your horn" }] },
        { questionText: "What does a flashing red light mean?", answerOptions: [{ text: "The same as a stop sign", isCorrect: true }, { text: "The same as a yield sign" }, { text: "The intersection is closed" }, { text: "Proceed with caution" }] },
        { questionText: "This sign indicates you are approaching a:", imageUrl: "/images/quiz/roundabout_sign.png", answerOptions: [{ text: "Four-way stop" }, { text: "Traffic circle or roundabout", isCorrect: true }, { text: "Merging lane" }, { text: "Dead end" }] },
        { questionText: "You should not use your horn when:", answerOptions: [{ text: "A child runs in front of your car" }, { text: "Greeting a friend on the sidewalk", isCorrect: true }, { text: "Another car is about to back into you" }, { text: "You are on a narrow mountain road" }] },
        { questionText: "If your vehicle's accelerator sticks, what is the FIRST thing you should do?", answerOptions: [{ text: "Turn off the engine" }, { text: "Shift to neutral and apply the brakes", isCorrect: true }, { text: "Unbuckle your seatbelt" }, { text: "Call for help" }] },
        { questionText: "When parking on a hill facing uphill with a curb, you should turn your front wheels:", answerOptions: [{ text: "Towards the curb" }, { text: "Away from the curb", isCorrect: true }, { text: "Straight ahead" }, { text: "It does not matter" }] },
        { questionText: "To avoid 'highway hypnosis' on long trips, you should:", answerOptions: [{ text: "Play loud music" }, { text: "Scan the road, avoid staring, and take regular breaks", isCorrect: true }, { text: "Focus only on the car ahead" }, { text: "Drink lots of coffee" }] },
        { questionText: "What is the legal Blood Alcohol Concentration (BAC) limit for drivers over 21 in most places?", answerOptions: [{ text: "0.01%" }, { text: "0.08%", isCorrect: true }, { text: "0.10%" }, { text: "0.05%" }] },
        { questionText: "If your brakes fail, you should:", answerOptions: [{ text: "Jump out of the car" }, { text: "Pump the brake pedal and use the emergency brake", isCorrect: true }, { text: "Honk continuously" }, { text: "Close your eyes" }] },
    ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const renderDashboard = () => {
    let level = '';
    let message = '';
    let levelClass = '';

    if (score < 10) {
      level = 'Beginner';
      levelClass = 'level-beginner';
      message = "There's a lot to learn about road safety, but you've taken the first step! Our learning hub can help you build a strong foundation.";
    } else if (score >= 10 && score < 17) {
      level = 'Intermediate';
      levelClass = 'level-intermediate';
      message = "You have a good understanding of the rules, but there's always room to improve. Keep practicing to become a safer driver.";
    } else {
      level = 'Advanced';
      levelClass = 'level-advanced';
      message = 'Excellent job! You have a strong knowledge of road safety rules. Keep up the great work!';
    }

    return (
      <div className="score-section">
        <h2>Quiz Complete!</h2>
        <div className="score-text">You scored {score} out of {questions.length}</div>
        <div className={`level-indicator ${levelClass}`}>{level} Level</div>
        <p>{message}</p>
        {level === 'Beginner' && (
          <Link to="/road-guard-learning" className="nav-button">
            Go to Learning Hub
          </Link>
        )}
      </div>
    );
  };

  // NEW: Style for the quiz images
  const quizImageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    marginBottom: '20px',
  };

  return (
    <div className='quiz-container'>
      <div className='quiz-box'>
        {showScore ? (
          renderDashboard()
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              {/* Conditionally render the image if imageUrl exists */}
              {questions[currentQuestion].imageUrl && (
                <img 
                  src={questions[currentQuestion].imageUrl} 
                  alt="Quiz visual content" 
                  style={quizImageStyle} 
                />
              )}
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect || false)}>
                  {answerOption.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;