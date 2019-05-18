import React from 'react';
import {Field,FormattedMessage} from 'react-intl';
import styles from './styles.css';

class SubtitleLine extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let text = this.props.text;
        const list = text.split('\n').reduce((a, b) => {
            return `${a}<div>${b}</div>`
        }, "");
     

        let marginTop;
        if(this.props.time.length != 0) {
            marginTop = {marginTop: 15}
        } else {
            marginTop = {marginTop: 0}
        }

        return (
            <div>
                <div className="time" style={marginTop}>{this.props.time}</div>
                <div className="text"><span dangerouslySetInnerHTML={{__html: list}}/></div>
            </div>
        )
    };

}

export default SubtitleLine;