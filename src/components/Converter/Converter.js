import React from 'react';
import {Field,FormattedMessage} from 'react-intl';
import SubtitleLine from './SubtitleLine'
import LanguageList from '../../locales/LanguageList'
import styles from './styles.css';

class Line {
    constructor(startTime, endTime, text) {
        this.time = `${startTime}`;
        this.text = text;
        this.startTimeStamp = new Date(`1970-01-01T${startTime.replace(',','.')}Z`);
        this.endTimeStamp = new Date(`1970-01-01T${endTime.replace(',','.')}Z`);
    }
}

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.languageChanged = this.onLanguageChanged.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.state = {
            subtitleLines: []
        }
    }

    onLanguageChanged(language) {
        this.props.onLanguageChanged(language)
    }
    
    onSelectFile(files) {
        if(files.length != 1) {
            return
        }
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            const lines = content.split(/\r\n|\n/);
            
            let startTtime;
            let endTime;
            let text = "";
            const lineWarps = [];
            for(let i = 0; i < lines.length; i++) {

                let line = lines[i]
                if(line.match(/^\s*\d*\s*$/) != null) {
                    continue
                }
                const match = line.match(/^(?<start>\d{2}:\d{2}:\d{2}[,|.]\d{3}).*(?<end>\d{2}:\d{2}:\d{2}[,|.]\d{3})/)
                if(match != null) {
                    if(startTtime != null) {
                        lineWarps.push(new Line(startTtime, endTime, text));
                    }
                    startTtime = match.groups.start;
                    endTime = match.groups.end;
                    text = "";
                    
                    continue
                }
            
                if(line.match(/^[\W|A-Z]/) != null) {
                    text = text + '\n' + line
                } else {
                    text = text + ' ' + line
                }
                
            }
            lineWarps.push(new Line(startTtime, endTime, text));

            this.setState({
                subtitleLines: lineWarps
            });
        };

        reader.readAsText(file);
    }

    render() {
        const languageOptions = LanguageList.map(it => {
            return <option key={it.language} value={it.language}>{it.display}</option>
        })

        const list = this.state.subtitleLines.map((it, idx) => {
            let timeTag = it.time;
            if(idx > 0) {
                const pre = this.state.subtitleLines[idx - 1];
                if(it.startTimeStamp - pre.endTimeStamp < 1 * 1000) {
                    timeTag ="";
                }
            }
            return <SubtitleLine key={it.time} time={timeTag} text={it.text} />
        })

        let printBtn;
        if(this.state.subtitleLines.length != 0) {
            printBtn = <FormattedMessage id='print' >
                { text => (
                    <input 
                        type="button" value={text}
                    />
                )
                }
            </FormattedMessage>
        }
        return (
            <div className="conveter_container">
                <div className="nav_bar">
                    <select onChange={(e) => this.onLanguageChanged(e.target.value)}>
                        { languageOptions }
                    </select>
                </div>
                <FormattedMessage id='select_file' >
                {
                    text => (
                        <label  className="btn btn-outline-primary btn-sm">
                            <input type="file" accept=".srt" style={{ display:'none' }} onChange={(e) => this.onSelectFile(e.target.files)} />
                            {text}
                        </label>
                    )
                }
               
                </FormattedMessage>
                { printBtn }
                { list }
            </div>
            
            
        )
    };

}

export default Converter;