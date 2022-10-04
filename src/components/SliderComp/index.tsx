import React, { useEffect, useState } from 'react'

import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { SliderCompType } from './inetrface';
import { Page } from '../../Interface/Books';
import './index.css'

function SliderComp(props: SliderCompType) {
  const { pages, nextChapter } = props;
  const [current, setCurrent] = useState(1);
  const [totalCount, setTotalCount] = useState(20)

  useEffect(() => {
    setCurrent(current)
    setTotalCount(pages.length)
  }, [pages])
  
  useEffect(() => {
    setCurrent(1)
  }, [totalCount])
  
  
  return (
    <div className='slider-div'>
        <AwesomeSlider
          bullets={false}
          disabled={true}
          organicArrows={true}
          onTransitionRequest={(cur:any)=>{
            const { currentIndex,slides, nextIndex, eventName, } = cur;
            if (eventName==='next') {
              setCurrent(currentIndex+1);
            } else {
              setCurrent(currentIndex-1===-1?slides:currentIndex-1);
              
            }
            if (eventName==='next' && currentIndex ===slides-1) {
              nextChapter();
            }
          }}
        >
          {pages.map(({image:{id, file}}:Page)=>{
            return <div key={id} data-src={file}/>
          })}
        </AwesomeSlider>
        <div>{`${current} / ${totalCount}`}</div>
      </div>
  )
}

export default SliderComp