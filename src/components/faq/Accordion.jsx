import React from 'react';
import AccordionItem from './AccordionItem.jsx';
import Datas from '../../data/faq/accordion.json';
import { Styles } from "./styles/accordion.jsx";

class Accordion extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        return (
            <Styles>
                {/* Faq Area */}
                <div className="accordion-box">
                    {
                        this.state.Data.dataList.map((data, i) => (
                            <AccordionItem
                                title={data.title}
                                body={data.body}
                                key={i}
                            />
                        ))
                    }
                </div>
            </Styles>
        )
    }
}

export default Accordion