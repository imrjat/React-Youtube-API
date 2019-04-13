import axios from 'axios';
const KEY = 'AIzaSyCXi84L__EAmYJ3JQ3Pptrfivt9QcP2aDQ';
 export default axios.create({
     baseURL:'https://www.googleapis.com/youtube/v3',
     params:{
         part:'snippet',
         maxResults:10,
         key:KEY
         
     }
 });