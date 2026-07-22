import React from 'react';
import bannerImg from '../../assets/ContactUsPage/Img-1.jpg';

function ContactBanner() {
    return (
        <div 
            style={{
                width: '100%',
                height: '500px',
                backgroundImage: `url(${bannerImg})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }}
        >
            <div 
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1 
                    style={{
                        color: '#ffffff',
                        fontSize: '60px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: '700',
                        margin: 0,
                        zIndex: 10,
                        position: 'relative'
                    }}
                >
                    Contact Us
                </h1>
            </div>
        </div>
    );
}

export default ContactBanner;