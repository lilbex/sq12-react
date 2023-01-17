import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import FormTitleSection from "./FormTitleSection";

const Modal = ({ children, closeModal }) => {
  const modalRef = useRef(null);

  const handleClickOutside = useCallback((e)=>{
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  },[closeModal])

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ModalContainer>
      <div ref={modalRef} className="form-section">
        <FormTitleSection title="Edit user" onClick={closeModal} />
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
const ModalContainer = styled.div`
  background: rgba(33, 51, 79, 0.44);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;

  .form-section {
    background: #fff;
    width: 40%;
    min-height: 100px;
    padding: 2rem;
    border-radius: 10px;
    margin: 0 auto;
  }
`;
