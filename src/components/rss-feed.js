import * as React from "react";
import { useRef, useState, useEffect } from 'react';
//import {parseString} from 'xml2js';
import { useStaticQuery, graphql } from 'gatsby';

//import xml from '../temp.xml'
import "../components/style.scss"

const RSSFeed = (props) => {
  const form = useRef();
  const [XML, setXML] = useState(null);
  var x;

  const data = useStaticQuery(graphql`
    {allInqRss {
      nodes {
        title 
        guid
      }
    }}
  `)

  //const data = useStaticQuery(graphql`
  //{allYouTubeRss {
  //    nodes {
  //      media_title
  //      media_thumbnail
  //    }
  //}}
  //`)

  //useEffect(() => {
  //  console.log('sup bitches');
  //});

  return (
    <div> 
    <ul>      
      {data.allInqRss.nodes[0].title.map(el => (
        <li>{el}</li>
      ))}
      {data.allInqRss.nodes[0].guid.map(el => (
        <li>{el}</li>
      ))}
    </ul>
    </div>
  )
}



export default RSSFeed
  //axios
	//.get("https://cors-anywhere.herokuapp.com/https://www.inquirer.net/fullfeed/", {
	//	"Content-Type": "application/xml; charset=utf-8"
	// })
	//.then(function(response) {
	//	setXML({ response });
	//})
	//.catch(function(error) {
	//	console.log(error);
	//});

  //fetch('https://www.inquirer.net/fullfeed/',
  //  {mode: 'no-cors'})
  //  .then((response) => response.text())
  //  .then((data) => {
  //    console.log(data);
  //    let parser = new window.DOMParser();
  //    //let xml = parser.parseFromString(data, "text/xml");
  //    let res = parseString(data, function (err, result) {
  //      console.log(result);
  //      return result;
  //    });
  //    console.log(res);
  //  });


