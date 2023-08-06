
//write npm test for testing

  const highlightHTMLContent=(htmlcontent,plaintext, plaintextpositions)=>{
    plaintextpositions.forEach((ele, i) => {
      let temp = "";
      let start = ele.start;
      let end = ele.end;

      for (let i = 0; i < plaintext.length; i++) {
        if (i >= start && i < end) {
          temp += plaintext[i];
        }
      }
      if (temp !== "") {
        let pos = htmlcontent.search(temp);
        let text = "";
        if (pos < start) {
          let substr = htmlcontent.substring(0, pos + 1);
          for (let i = pos + 1; i < htmlcontent.length; i++) {
            text += htmlcontent[i];
          }
          pos = text.search(temp);
          text = text.replace(temp, `<mark>${temp}</mark>`);
          htmlcontent = substr + text;
        } else {
          htmlcontent = htmlcontent.replace(temp, `<mark>${temp}</mark>`);
        }

        
        
      }
      
    });


    return htmlcontent;

  }


//   highlightHTMLContent(htmlcontent,plaintext,plaintextpositions);

module.exports={
    highlightHTMLContent
}