import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import '@mdi/font/css/materialdesignicons.css'; yarn add 
import '../css/font.css'; // import local
import '../css/materialdesignicons.min.css'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#171b34",
                orange: "#f7600e",
                facebook: "#205b9f",
                twitter:"#00ace3",
                teamviewer:"#22708d",
                instagram: "#f18423" ,
                email: "#19acb3"  ,
                google: "#ff3921",
                appbar: "#24282c",
            }
        }
    },
    // icons: {
    //     iconfont: 'mdi', // default - only for display purposes
    //   },
});
