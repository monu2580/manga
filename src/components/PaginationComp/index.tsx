import React, { useEffect, useState } from 'react'
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';
import SliderComp from '../SliderComp';
import { PaginationCompType } from './interface';
import { Page } from '../../Interface/Books';
import { MangaAction } from '../../Actions/MangaAction';


function PaginationComp(props:PaginationCompType) {
  const [pages, setPages] = useState<Page[]>([])
  const [current, setCurrent] = useState(0)
  const [pagTrack, setPagTrack] = useState(1)
  const { data , key} = props || {};
  const {pages:cPages, book:{ chapter_ids, title}} = data[0]  || {};
  useEffect(() => {
    setPages(cPages)
    setCurrent(chapter_ids[0])
  }, [])
  useEffect(() => {
    !!current && MangaAction.getChapter(current).then((res)=>{
      const {pages:nPages } = res.data;
      setPages(nPages)
      if (!current) {
        setCurrent(chapter_ids[0])
      }
    })
  }, [current, data, title])
  
  const changeCurrent=()=>{
    if (current !== chapter_ids[chapter_ids.length-1]){
      setPagTrack(chapter_ids.indexOf(current+1)+1)
      setCurrent(current+1)
    }
  }
  return (
    <div>
      <div>
        <Pagination
          total={chapter_ids.length}
          pageSize={1}
          current={pagTrack}
          onChange={(cur)=>{
            MangaAction.getChapter(chapter_ids[cur-1]).then((res)=>{
              const {pages:nPages } = res.data;
              setPagTrack(cur)
              setPages(nPages)
              setCurrent(chapter_ids[cur-1])
            })

          }}
        />
      </div>
      <SliderComp pages={pages} nextChapter={changeCurrent}/>
    </div>
  );
}

export default PaginationComp