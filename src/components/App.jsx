import React from 'react'
import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLevelFeedback = option => {
    //console.log(' onLevelFeedback - option :', option);
    if (option === 'good') setGood((prevGood)=> prevGood +1);
    if (option === 'neutral') setNeutral((prevNeutral)=> prevNeutral +1);
    if (option === 'bad') setBad((prevBad)=> prevBad +1);
    //console.log('---onLevelFeedback - good, neutral, bad :',  good, neutral, bad);   
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const  countPositiveFeedbackPercentage = () => {
    if (good === 0) return 0;
    return  Math.round((good/countTotalFeedback()*100))
  };

  return (
    <Container>
         <Section title="Please leave feedback">
           <FeedbackOptions
             options={['good', 'neutral', 'bad']}
             onLevelFeedback={onLevelFeedback}
           />
         </Section>
         <Section title="Statistics">
           {countTotalFeedback() ? (
             <Statistics
               good={good}
               netural={neutral}
               bad={bad}
               total={countTotalFeedback()}
               positivePercentage={countPositiveFeedbackPercentage()}
             />
           ) : (
             <Notification message="There is no feedback"></Notification>
             // <p>There is no feedback</p>
           )}
         </Section>
       </Container>
  )
}
