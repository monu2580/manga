import React from 'react'
import Axios from 'axios'
import { baseUrl, BOOK, CHAPTERS } from '../Utils/Constant'
export const MangaAction = {
  getBook(id?:number){
    return Axios.get(`${baseUrl}${BOOK}${id||''}`)
  },
  getChapter(id:number){
    return Axios.get(`${baseUrl}${CHAPTERS}${id}/`)
  }
}