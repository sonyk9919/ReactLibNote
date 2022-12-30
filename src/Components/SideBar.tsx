import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { motion, Variants } from "framer-motion";

interface ISideBarBlock {
  isopen: number;
}

interface IProps {
  children: JSX.Element[];
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const CancelIcon = styled.div`
  min-height: 2rem;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const MenuIcon = styled(IoMdMenu)`
  min-height: 2rem;
  font-size: 2rem;
  border-radius: 50%;
  border: 1px solid black;
  padding: 0.125rem;
  align-self: flex-start;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const SideBarBlock = styled(motion.div)<ISideBarBlock>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 0.5rem 0.25rem;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 0.5rem;
  box-shadow: 5px 10px 20px black;
  width: ${(props) => (props.isopen ? "200px" : "50px")};
  transition: width 0.3s ease-in-out;
  z-index: 40;
`;

const SideBarVar: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    zIndex: 40,
    transition: { duration: 0.7, staggerChildren: 0.7 },
  },
  hover: {},
};

const SideBar = ({ isOpen, setIsOpen, children }: IProps) => {
  const onSetIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <SideBarBlock
      variants={SideBarVar}
      initial="initial"
      animate="animate"
      isopen={+isOpen}
    >
      {!isOpen && <MenuIcon onClick={onSetIsOpen} />}
      {isOpen && <CancelIcon onClick={onSetIsOpen}>X</CancelIcon>}
      {children}
    </SideBarBlock>
  );
};

export default SideBar;
