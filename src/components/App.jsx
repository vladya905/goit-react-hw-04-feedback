import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

const countTotalFeedback = () => {
return Object.values(feedback).reduce((acc, value) => acc + value, 0);
};

const countPositiveFeedbackPercentage = () => {
const result = countTotalFeedback();
const { good } = feedback;
const percentage = (good * 100) / result;
return Math.round(percentage);
};

const onLeaveFeedback = name => {
setFeedback(prevFeedback => ({
...prevFeedback,
[name]: prevFeedback[name] + 1,
}));
};

const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();
const options = Object.keys(feedback);
const statistics = Object.entries(feedback);

return (
<>
<Section title="Please leave feedback">
<FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
</Section>
{total === 0 ? (
<Notification message="There is no feedback" />
) : (
<Section title="Statistics">
<Statistics
         statistics={statistics}
         total={total}
         positivePercentage={positivePercentage}
       />
</Section>
)}
</>
);
};

export default App;