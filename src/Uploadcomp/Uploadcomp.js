import React, {useContext,useState} from 'react'
import { Client, Storage,ID } from "appwrite";
import CopiesContext from '../CopiesContext'
import { updateUserDocument1} from "../appwritetest";
import styles from "./Uploadcomp.module.css";
import { Link } from "react-router-dom"; 
const Uploadcomp = ({ passCount }) => {
  const [signupSuccess, setsignupSuccess] = useState(null);
  const {setCopies} = useContext(CopiesContext)
  const [docname, setdocname] = useState('');

  const   Handlefile = ()=>{
    setsignupSuccess(true)
    const client = new Client()
    client.setEndpoint('https://api.printfc.in/v1') // Your API Endpoint
    .setProject('64242c801cdd58d26213');
    const storage = new Storage(client);
    const promise = storage.createFile(
      '64251c8eea525dadea38',
      ID.unique(),
      document.getElementById('upload-file').files[0]
    );
    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
    let x = document.getElementById('upload-file');
    let txt='';
    let file = x.files[0];
    if('name' in file){
      txt += 'fileName : ' + file.name;
    }
   
    if('size' in file){
      let kb = Math.round(file.size/1000);
      let mb = Math.round(kb/1000);
     if(kb<=1000){
      txt += ' |  Size :' + kb +'KB';
     }
     else if (mb<=1000){
      txt +='  |  Size :' + mb +'MB';
     }
    }

   
   setdocname(txt);
    
   }
   const handleUpdateUser = async () => {
    try {
      const response = await updateUserDocument1({docname});
      console.log(response);
  console.log(docname)
      // add any additional success handling here
    } catch (error) {
      console.log(error);
      // add any error handling here (e.g., display an error message to the user)
    }
  };
 
  const pdffunc = (event) =>{
    const reader = new FileReader();
    const fileInfo = event.target.files[0];
    if (fileInfo) {
         reader.readAsBinaryString(event.target.files[0]);
         reader.onloadend = () => {
          let matches = reader.result.match(/\/Type[\s]*\/Page[^s]/g);
          let count = matches ? matches.length : 1;
          let element = document.getElementById('info');
          if(element){
            element.innerHTML = count;
        }
             console.log('Number of Pages:', count);    
             passCount(count); 
         }
         }
        }
        const handleChange = (event) => {
          setCopies(event.target.value);
        }
      
  return (
    <>
    
     <div className="card text-center" id={styles.card1} >
 
    <div className="card-header">
      Upload Your File
    </div>
    <div  className={styles["card-body1"]}>
    <b>Please   <Link to="/Signup"> Signup</Link> to continue with process</b>
    <div className='uploadmain'>
   <div className='upload'>

      <button type='button'  className={styles["file-upload-label"]}  disabled={signupSuccess === false} >
      <input type="file" id='upload-file' className={styles["file-upload-input"]} onChangeCapture={pdffunc} onChange={Handlefile} disabled={signupSuccess === false} />
      <i className="bi bi-cloud-arrow-up"></i> <b>Upload File</b>
      </button>
    

      <p  onChange={handleUpdateUser()}>{docname}</p>
    </div>
 
      <div className='upload2'>
      <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
      </div>
      <div className='container'>
      <div className='noofpages'>
     <b className={styles.numpages}>Number of Pages:</b><p className={styles.noofpagesbox} id='info'>1</p>
     </div>
   
     <div className='noofcopies'>
     <b className={styles.numcopies}>Number of copies:</b><input  className={styles.nocopiesbox} onChange={handleChange} ></input>
     </div> 
    
  </div>
  </div>
  </div>
  </div>
    </>      
    )
}
export default Uploadcomp