import PropTypes from 'prop-types';
import { ButtonStyle, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLevelFeedback }) => {
  //console.log('option', options);
  //console.log('onLevelFeedback', onLevelFeedback)
  return (
    <FeedbackBtn>
      {options.map(option => (
        <ButtonStyle
          type="button"
          className={option}
          key={option}
          onClick={() => onLevelFeedback(option)}
        >
          {option}
        </ButtonStyle>
      ))}
    </FeedbackBtn>
  );
};

FeedbackOptions.protoType = {
    onAddFeedback: PropTypes.func,
  };
  