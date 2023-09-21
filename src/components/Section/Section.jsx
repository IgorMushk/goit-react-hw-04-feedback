import { SectionConteiner, Title } from "./Section.styled";

export const Section = ({ title, children}) => {
  return (
    <SectionConteiner>
      <Title>{title}</Title>
      {children}
    </SectionConteiner>
  );
};
