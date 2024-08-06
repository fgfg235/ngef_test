import React from 'react';
import Datas from '../../data/faq/question.json';
import AccordionItem from '../../components/faq/AccordionItem.jsx';
import { Styles } from "../../components/faq/styles/accordion.jsx";

class SessionItem extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        return (
            <Styles>
                {/* Question Area */}
                <div className="accordion-box">
                    {
                        this.state.Data.map((data, i) => (
                            <AccordionItem
                                title={data.title}
                                chairman={data.chairman}
                                keyNote={data.keyNote}
                                subTitle={data.subTitle}
                                panel={data.panel}
                                key={i}
                            />
                        ))
                    }
                </div>
            </Styles>
        )
    }
}

export default SessionItem