import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { space } from "styled-system";

import themes from "../../styles/themes";

const getDefaultStyles = ({ theme }) => ({
  color: theme.colors.BLACK,
  "*": {
    padding: 0,
    margin: 0,
  },
  ".title": {},
  "p.close-button": {
    color: theme.colors.GRAY_70,
    textDecoration: "underline",
    fontSize: 14,
    fontWeight: 500,
    padding: 0,
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    marginLeft: "auto",
    svg: {
      border: 0,
      outline: 0,
      fontSize: 20,
      color: theme.colors.GRAY_70,
      paddingLeft: 8,
    },
    "&:hover": {
      cursor: "pointer",
      color: theme.colors.BLACK,
      textDecoration: "none",
      svg: {
        color: theme.colors.BLACK,
      },
    },
  },
  button: {
    border: 0,
    padding: `${theme.space[2]}px ${theme.space[3]}px`,
    marginLeft: theme.space[3],
  },
});

const StyledModal = styled("div")(
  ({ theme }) => ({
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 3,
    boxSizing: "border-box",
    background: theme.colors.WHITE,
    minWidth: 401,
    height: "auto",
    position: "absolute",
  }),
  getDefaultStyles,
  space
);

const ModalBg = styled("div")(
  {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(45, 42, 38, 0.5)",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    boxSizing: "border-box",
  },
  space
);

const StyledModalHeader = styled("div")(
  ({ theme }) => ({
    color: theme.colors.BLACK,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    fontSize: 20,
    paddingBottom: theme.space[3],
    p: {
      paddingRight: theme.space[3],
      fontWeight: 600,
    },
  }),
  space
);

const StyledFooter = styled("div")(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.space[3],
  }),
  space
);

const StyledMessage = styled("p")(
  () => ({
    fontSize: 14,
  }),
  space
);

const Modal = ({
  avatar,
  title,
  close,
  message,
  okText,
  cancelText,
  okClick,
  cancelClick,
  children,
}) => {
  return (
    <ThemeProvider theme={themes.web}>
      <ModalBg p="4">
        <StyledModal p="4">
          <StyledModalHeader>
            {avatar && (
              <p>
                <FontAwesomeIcon icon={avatar} />
              </p>
            )}
            {title && <p className="title">{title}</p>}
            {close && (
              <p className="close-button" onClick={cancelClick} role="button">
                Close
                <FontAwesomeIcon icon={faTimes} />
              </p>
            )}
          </StyledModalHeader>
          {message && <StyledMessage>{message}</StyledMessage>}
          {children && children}
          <StyledFooter>
            {cancelText && <button onClick={cancelClick}>{cancelText}</button>}
            {okText && <button onClick={okClick}>{okText}</button>}
          </StyledFooter>
        </StyledModal>
      </ModalBg>
    </ThemeProvider>
  );
};

Modal.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.bool,
  message: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  okClick: PropTypes.func,
  cancelClick: PropTypes.func,
};

export default Modal;
