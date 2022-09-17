import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Content from '../contentSection/content';
import SS from '../solar-system/SS';
import { motion,useInView } from 'framer-motion'


const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Horizontal() {
  
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu >
        <Card
          itemId='0' // NOTE: itemId is required for track items
        >
               <div className='Intro'>
        <div className=" row">
            <div className="col">
            <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
              <h2>LEARN BUILD WORK TECH</h2>
              </motion.div> 
            </div>
            <div  className="col-md-auto heading">
            <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
             <h1>DEEP</h1> 
              <h1>VERSE</h1>
              </motion.div>
            </div>
          </div>
        </div>
        </Card>
        <Card itemId='1'>
          <div className='Content_div'>
          <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
             <h1>Exclusive Content</h1>
            </motion.div>
          </div>
          <Content/>
          </Card>
        <Card itemId='2'>
          <div className='Introduction_section'>
            <div className='Content_part'>
            <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
              <h3>DeepVerse is a Learning DAO which educates people and create Ecosystem in India</h3>
            </motion.div>
            <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
              <div className='aim_banner'>
              <div className='banner'></div>
              <div className='aim'><h4>It aims to Revolutionize Web3 in India</h4></div>
              </div>
            </motion.div>
            </div>
            <div className='anim'>
              <SS/>
            </div>
          </div>

        </Card>
        <Card>
          <div className='Offering'>
            <h1>Our Offerings</h1>
            <div className='cards'>
            <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: false }}>
            <div className='Card-1'>
              <h1>learning</h1>
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus, quas porro itaque quae assumenda nemo ea ab unde necessitatibus est provident ullam corporis. Eos odit modi cupiditate aliquid enim.</h2>
            </div>
            </motion.div>
            <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: false }}>
            <div className='Card-2'>
              <h1>Ecosystem</h1>
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus, quas porro itaque quae assumenda nemo ea ab unde necessitatibus est provident ullam corporis. Eos odit modi cupiditate aliquid enim.</h2>   
            </div>
            </motion.div>
            <motion.div  transition={{delay:0.6}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: false }}>
            <div className='Card-3'>
              <h1>Opportunity</h1>
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus, quas porro itaque quae assumenda nemo ea ab unde necessitatibus est provident ullam corporis. Eos odit modi cupiditate aliquid enim.</h2>
              
            </div>
            </motion.div>
            </div>
          </div>
        </Card>
    </ScrollMenu>
  );
}

function Card({ onClick, selected, title, itemId,children }) {
  const visibility = React.useContext(VisibilityContext);
  const { scrollPrev, scrollNext } = React.useContext(VisibilityContext);


  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        height:'80vh',
        width: '100vw',
        marginTop:'10vh',
      }}
      onWheel={(e)=>{
        if(e.deltaY>0){
          scrollNext();
        }
        else if (e.deltaY<0){
          scrollPrev();
        }
      }}
      tabIndex={0}
    >
      <div>{children}</div>
    </div>
  );
}

export default Horizontal;