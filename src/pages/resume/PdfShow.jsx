import React from 'react';

function PdfShow() {
  
    return (
        <>
        <div  style={{display:'flex' , padding:'20px 0'}} >
      <embed className='pdfembed' src="SudheerResume.pdf" type="application/pdf" height="800px" style={{ margin:'auto' , width: '80%', maxWidth: '800px', height: '800px' }} />
        </div>

        </>
    );
  
}

export default PdfShow;