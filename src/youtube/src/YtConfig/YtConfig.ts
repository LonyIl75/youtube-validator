import { createArrLang } from "@/shared/traduction/typeLang.js"

export const arr_yt_lang = ["en","fr", "jap" ] as const 
export type t_arr_yt_lang = createArrLang<typeof arr_yt_lang >


interface IYtConfig {
    language : t_arr_yt_lang[number]
}

export namespace YtConfig {

    const df_yt_config : IYtConfig  = {language : "fr"} as const 


    export let config:IYtConfig = {...df_yt_config}

    export const setLanguage = (lang : t_arr_yt_lang[number])=>{
        config.language = lang 
    }

    export const getLanguage = ()=>{
        return config.language
    }

}
//export default YtConfig.config ; 

