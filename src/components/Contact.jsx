import React from 'react'

function Contact() {
  return (
    <div className='contact-container'>
        <div className="contact-col-left">
            <div className="contact-col-left-title">
                <h1>BİZE ULAŞIN</h1>
                <h4>En kısa sürede sizinle iletişime geçeceğiz</h4>
            </div>

            <div className="contact-form">
                <div className="contact-name">
                    <input className='name' type="text" placeholder='Ad' />
                    <input className='surname' type="text" placeholder='Soyad' />
                </div>

                <input className='mail' type="text" placeholder='Mail Adres' />
                <input className='phone' type="text" placeholder='Telefon' />
                <textarea placeholder='Mesajınız'/>
                <button className='contact-button'>Gönder</button>
            </div>
        </div>

        <div className="contact-col-right">
            <div className="contact-col-right-title">
                <h1>Bizimle İletişime Geçin.</h1>
                <h4>Bizimle iletişime geçerek turlar hakkında bilgi alın.</h4>
            </div>
        </div>

    </div>
  )
}

export default Contact