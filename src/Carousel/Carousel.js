import React from 'react'
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <> 
    <div className={styles.carouselmain} id='C1'>
    <div id="carouselExampleDark" className="carousel carousel-dark slide"  data-bs-ride="carousel">
  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className={`carousel-item ${styles["carousel-item"]} active`}  data-bs-interval="2000">

    <h1 className={`${styles['responsive-font-example']}`}>WELCOME TO PRINTFC.IN</h1>
    <p className={`${styles['tagline']}`}>upload your files to get print at <b>(₹15)</b></p>
    </div>
  

    <div className={`carousel-item  ${styles["carousel-item"]}`} data-bs-interval="2000">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className={` ${styles["bi-bi-cloud-arrow-up-fill"]}`}  viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className={` ${styles["bi-bi-arrow-down"]}`} viewBox='0 0 16 16'>
  <path fillRule="evenodd"  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className={` ${styles["bi-bi-record2"]}`} viewBox="0 0 16 16" >
  <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor"  className={` ${styles["bi-bi-arrow-down2"]}`} viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor"  className={` ${styles["bi-bi-currency-rupee" ]}`} viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 
</div>
      


<div className={`carousel-item ${styles["carousel-item"]}`} data-bs-interval="2000">
  
    <p className={`${styles['carousel3']}`}>THANKS FOR VISITING PRINTFC.IN</p>
   
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
   </>
  )
}

export default Carousel