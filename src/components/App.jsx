import React from 'react'
import { Component, useState } from 'react';
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
    console.log(' onLevelFeedback - option :', option);
    if (option === 'good') {
      setGood((prevGood)=> prevGood +1)
    };
    if (option === 'neutral') {
      setNeutral((prevNeutral)=> prevNeutral +1)
    };
    if (option === 'bad') {
      setBad((prevBad)=> prevBad +1)
    };
    console.log('   onLevelFeedback - good, neutral, bad :',  good, neutral, bad);
    console.log(()=>{console.log('=> onLevelFeedback - good, neutral, bad :',  good, neutral, bad)});

    /////this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    //console.log('setState', this.setState)
    //console.log('setState - option', option);
  };

  // const countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // const  countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   if (good === 0) return 0;
  //   return  Math.round((good/this.countTotalFeedback()*100))
  //   //return ((good / this.countTotalFeedback()) * 100).toFixed(1);
  // };

  return (
    <Container>
         <Section title="Please leave feedback">
           <FeedbackOptions
             options={['good', 'neutral', 'bad']}
             onLevelFeedback={onLevelFeedback}
           />
         </Section>
         {/* <Section title="Statistics">
           {this.countTotalFeedback() ? (
             <Statistics
               good={good}
               netural={neutral}
               bad={bad}
               total={this.countTotalFeedback()}
               positivePercentage={this.countPositiveFeedbackPercentage()}
             />
           ) : (
             <Notification message="There is no feedback"></Notification>
             // <p>There is no feedback</p>
           )}
         </Section> */}
       </Container>
  )
}


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLevelFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//     //console.log('setState', this.setState)
//     //console.log('setState - option', option);
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     if (good === 0) return 0;
//     return  Math.round((good/this.countTotalFeedback()*100))
//     //return ((good / this.countTotalFeedback()) * 100).toFixed(1);
//   };

//   render() {
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLevelFeedback={this.onLevelFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               netural={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//             // <p>There is no feedback</p>
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
