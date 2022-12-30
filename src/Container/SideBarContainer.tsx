import { useState } from "react";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import { motion, Variants, AnimatePresence } from "framer-motion";
import FullScreen from "../Components/FullScreen/FullScreen";
import { FaSlidersH } from "react-icons/fa";
import { BsFillHandIndexFill } from "react-icons/bs";
import { AiOutlineLayout, AiOutlineHome } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Row = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  & + & {
    margin-left: 1.5rem;
    width: 8rem;
  }
`;

const Column = styled(motion.div)`
  display: flex;
  align-items: center;
  ${Row}:first-child {
    margin-left: 0.25rem;
  }
  cursor: pointer;
`;

const ColumnVar: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RowVar: Variants = {
  initial: { opacity: 0, x: -50 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  close: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

const SideBarContainer = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const closeSide = () => {
    setOpen((prev) => false);
  };
  const navigate = useNavigate();
  return (
    <>
      {open && <FullScreen onClick={closeSide} />}
      <SideBar isOpen={open} setIsOpen={setOpen}>
        <Column
          variants={ColumnVar}
          onClick={() => {
            navigate(`/`);
            closeSide();
          }}
        >
          <Row>
            <AiOutlineHome />
          </Row>
          <AnimatePresence>
            {open && (
              <Row
                variants={RowVar}
                initial="initial"
                animate="open"
                exit="close"
              >
                홈
              </Row>
            )}
          </AnimatePresence>
        </Column>
        <Column
          variants={ColumnVar}
          onClick={() => {
            navigate(`/Slider`);
            closeSide();
          }}
        >
          <Row>
            <FaSlidersH />
          </Row>
          <AnimatePresence>
            {open && (
              <Row
                variants={RowVar}
                initial="initial"
                animate="open"
                exit="close"
              >
                슬라이더
              </Row>
            )}
          </AnimatePresence>
        </Column>
        <Column
          variants={ColumnVar}
          onClick={() => {
            navigate(`/Gasture`);
            closeSide();
          }}
        >
          <Row>
            <BsFillHandIndexFill />
          </Row>
          <AnimatePresence>
            {open && (
              <Row
                variants={RowVar}
                initial="initial"
                animate="open"
                exit="close"
              >
                제스쳐
              </Row>
            )}
          </AnimatePresence>
        </Column>
        <Column
          variants={ColumnVar}
          onClick={() => {
            navigate(`/Layout`);
            closeSide();
          }}
        >
          <Row>
            <AiOutlineLayout />
          </Row>
          <AnimatePresence>
            {open && (
              <Row
                variants={RowVar}
                initial="initial"
                animate="open"
                exit="close"
              >
                레이아웃
              </Row>
            )}
          </AnimatePresence>
        </Column>
        <Column
          variants={ColumnVar}
          onClick={() => {
            navigate(`/Etc`);
            closeSide();
          }}
        >
          <Row>
            <HiOutlineDotsHorizontal />
          </Row>
          <AnimatePresence>
            {open && (
              <Row
                variants={RowVar}
                initial="initial"
                animate="open"
                exit="close"
              >
                기타
              </Row>
            )}
          </AnimatePresence>
        </Column>
      </SideBar>
    </>
  );
};

export default SideBarContainer;
