import React, { useEffect, useState } from 'react';
import {MangaAction } from './Actions/MangaAction';
import './App.css';
import ButtonGroup from './components/ButtonGroup';
import PaginationComp from './components/PaginationComp';
import { Book, Chapters } from './Interface/Books';

function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [chapter, setChapter] = useState<Chapters[]>([])
  const [bookId, setBookId] = useState('')
  const [key, setKey] = useState(1)
  const onButtonClick = (id:string) =>{ setBookId(id)};

  useEffect(() => {
    MangaAction.getBook().then(({data:bookData}) =>{
      let {chapter_ids, title} = bookData[0];
      MangaAction.getChapter(chapter_ids[0]).then(({data: chapterData}) =>{
        setBooks(bookData);
        setBookId(title);
        setChapter([chapterData])
      })
    })
  }, [])
  useEffect(() => {
    const book = books.filter(bk=>bk.title===bookId)[0] || {};
    if (!!book.chapter_ids) {
      const [first=1] = book.chapter_ids;
      MangaAction.getChapter( first).then(({data: chapterData}) =>{
        setKey(chapterData.id)
        setChapter([chapterData])
      })
    }
  }, [bookId])
  
  return (
    <div className="App">
      {books.length>0
      ? <div>
          <ButtonGroup data={books} onChange={onButtonClick} selected_btn={bookId}/>
          <PaginationComp data={chapter} key={key}/>
        </div>
      : <div>Loading...</div>}
    </div>
  );
}

export default App;
