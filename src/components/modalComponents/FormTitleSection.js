import styled from "styled-components";

const FormTitleSection = ({title, onClick, name}) => {
  return (
    <FormTitleSectionContainer>
      <div>
        <p className="formTitle">{title}</p>
        <p className="forName">{name}</p>
      </div>
      <img 
        src="/images/close-icon.svg" 
        alt="close" 
        onClick={onClick} />
    </FormTitleSectionContainer>
  );
}

export default FormTitleSection;

const FormTitleSectionContainer = styled.div`
display: flex;
justify-content: space-between;

img{
  cursor: pointer;
}`;