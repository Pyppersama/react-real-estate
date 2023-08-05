import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className="con-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart con-left">
                <span className='orangeText'>Our contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Et, sint harum dicta hic amet quod nostrum 
                    dignissimos facilis consequuntur
                </span>
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        {/* 1st mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span>0801 234 5654</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                        {/* 2nd mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span>0801 234 5654</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        {/* 3rd mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video</span>
                                    <span>0801 234 5654</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call Now
                            </div>
                        </div>
                        {/* 4th mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span>0801 234 5654</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="flexEnd con-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;