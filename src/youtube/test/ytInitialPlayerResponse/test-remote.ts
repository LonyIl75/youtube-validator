import { t_json } from "@/shared/types.js";
import {validateYtInitialPlayerResponseOfAddress} from "../../src/main.js";
import { t_youtube_watch } from "@/youtube/src/type.js";
import { init_testStacks , print_testStacks , clean_testStacks } from "../lib/TestStacks.js";
import type {t_testStacks} from "../lib/TestStacks.js";


let _fct = (name_test:string)=>{
    return (res:t_testStacks)=> {
        print_testStacks(name_test,res)
        clean_testStacks(res)
    }
}

export async function ytInitialData_test_remote(){

    let arr_prom = []
    let curr_prom = Promise.resolve()

    const  ytvideo_id_1  = "jIqA5sg5gZM" as const 
    let ytwatch_url_1  : t_youtube_watch<typeof ytvideo_id_1> = "https://www.youtube.com/watch?v=jIqA5sg5gZM"

    curr_prom = validateYtInitialPlayerResponseOfAddress(ytwatch_url_1).then(_fct("testRemote_1_YtInitialData"))
    arr_prom.push(curr_prom)

    return Promise.allSettled(arr_prom)

}




