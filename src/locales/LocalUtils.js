class LocalUtils {

    static chooseDefaultLocal() {
      const localStorageLanguage = window.localStorage[this.LOCAL_STORAGE_KEY_LOCAL];
      if(localStorageLanguage) {
        return localStorageLanguage;
      } 
      return navigator.language
    }

    static saveLocal(local) {
      window.localStorage[this.LOCAL_STORAGE_KEY_LOCAL] = local
    }

    static chooseLocaleMessages(locale) {
      if(locale == null) {
        return require('./en_US').default
      }
      
      let messages;
      switch(locale.split('-')[0]){
        case "zh": 
          messages = require('./zh_TW').default
          break
        default: 
          messages = require('./en_US').default
      }
      return messages;
    }
}
LocalUtils.LOCAL_STORAGE_KEY_LOCAL = "_LOCAL_STORAGE_KEY_LOCAL_";

export default LocalUtils;
  