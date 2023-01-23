import * as React from "react"
import { useRef, useState } from 'react';

import "../components/style.scss"

const RSSFeed = (props) => {
  const form = useRef();
  const [XML, setXML] = useState(null);
  var x;

  fetch('https://www.inquirer.net/fullfeed/')
    .then((response) => setXML(response.text()))
    .then((data) => console.log(data));

  return (
    <div> 
      <p>
        {XML}
      </p>
    </div>
  )
}

export default RSSFeed
