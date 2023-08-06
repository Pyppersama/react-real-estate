import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem, 
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { FaBeer } from "react-icons/fa";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we give you</span>
                <span className='secondaryText'>
                    We help by always providing the best 
                    services for you.
                    <br />
                    We believe a good place to live, can make
                    your life better
                </span>
                <Accordion
                className='accordion'
                allowMultipleExpanded={false} /* allows only one accordian to expand at a time*/
                preExpanded={[0]} /*only the 1st item to be expanded */
                >
                {
                    data.map((item, i) => {
                        const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {
                                                ({expanded}) => expanded 
                                                ? setClassName('expanded')
                                                : setClassName('collapsed')
                                            }
                                        </AccordionItemState>

                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">{<MdOutlineArrowCircleDown size={20}/>}</div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
