import React from 'react'

const Contact = () => {
  return (
    <>
    
   <section id='contact-section'>
        <h2 className='main-heading text-center' id='C3'>Contact us</h2>
        <div className='contact'> 
        <a href='mailto:bharathjbiet10@gmail.com'>  <i className='bi bi-envelope-at socialicons' target="_blank"  rel="noopener noreferrer" aria-label="mail"></i> </a>
      <a href='https://wa.me/8639954433'><i className='bi bi-whatsapp socialicons' target="_blank"  rel="noopener noreferrer" aria-label="whatsapp"></i></a>
    </div> 
    </section>
    <section id="footer">
				<h2 className='main-heading text-center' id='C4'>Connect with me</h2>
        <div className='connect'>
					<a href="https://twitter.com/Bharathtwt1?t=LWGqlQmRF9NzBRojKtGSxw&s=08"><i className="bi bi-twitter socialicons" target="_blank"  rel="noopener noreferrer" aria-label="twitter" ></i> </a>
					<a href="https://www.linkedin.com/in/bharath-k-6436a11b2"><i className="bi bi-linkedin socialicons" target="_blank" rel="noopener noreferrer" aria-label="linkedin"></i> </a>
					<a href="https://www.instagram.com/this__is.bharath/"><i className="bi bi-instagram socialicons" target="_blank" rel="noopener noreferrer" aria-label="insta" ></i> </a>
					<a href="mailto: bharathjbiet10@gmail.com"> <i className="bi bi-envelope-at-fill socialicons" target="_blank"  rel="noopener noreferrer" aria-label="mail2" ></i> </a>
        </div>
      <div className='terms-and-conditions'>
        <a href='Termsandcondi'>Terms and conditions</a> | <a href='PrivacyPolicy'>Privacy Policy</a> | <a href='Refund'>Refund</a>
      </div>
				<div className="copyright">
					© 2022-2023 | Developer: <a href="/">Bharath</a>
				</div>
			</section>

    
    </>
  )
}

export default Contact