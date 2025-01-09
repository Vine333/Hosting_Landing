import {create} from 'zustand'

const useGlobalStore = (set) => ({
   language: localStorage.getItem("language") || "en",


    setLanguage: (lang) => {
        localStorage.setItem("language", lang);
        set({language: lang});

},});
export default create(useGlobalStore)