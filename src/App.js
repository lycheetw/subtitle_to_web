import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import Converter from './components/Converter';

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import LocalUtils from './locales/LocalUtils'


export default class App extends React.Component {
    constructor(props) {
      super(props);
      addLocaleData([...enLocaleData, ...zhLocaleData]);
      this.onLanguageChanged = this.onLanguageChanged.bind(this);
      const locale = LocalUtils.chooseDefaultLocal();
      const messages = LocalUtils.chooseLocaleMessages(locale);
      this.state = {
        locale: locale,
        messages: messages
      };
    }

    onLanguageChanged(languageCode) {
      this.setState({
        locale: languageCode,
        messages: LocalUtils.chooseLocaleMessages(languageCode)
      });
      LocalUtils.saveLocal(languageCode);
    }


    render() {
      
      return (
        <IntlProvider locale={this.state.locale} messages={this.state.messages}>
          <Router>
            <div className="container">
              <Route 
                exact path="/" 
                render={(props) => <Converter {...props} onLanguageChanged={this.onLanguageChanged}/>}
              />
            </div>
          </Router>
        </IntlProvider>
      )
    }
}