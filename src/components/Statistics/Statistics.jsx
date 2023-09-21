import { Item, List } from "./Statistics.styled";

export const Statistics = ({ good, netural, bad, total, positivePercentage }) => {
    //console.log('total', total);
    //console.log('positivePercentage', positivePercentage);
  return (
    <>
      <List>
        <Item><p>Good: <span>{good}</span></p></Item>
        <Item><p>Netural: <span>{netural}</span></p></Item>
        <Item><p>Bad: <span>{bad}</span></p></Item>
        <Item><p>Total: <span>{total}</span></p></Item>
        <Item><p>Positive feedback: <span>{positivePercentage? positivePercentage:'0'}%</span></p></Item>
      </List>
    </>
  );
};
