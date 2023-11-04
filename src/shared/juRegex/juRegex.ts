import {char_join_pipe, t_JoinChar_pipe } from "../types.js"
import type { t_regex_union_arr,  t_regexToStr,  t_regex,  t_JoinChar_starSpace } from "./types.js"
import {df_char_join_regex } from "./types.js"
import {regexp } from "../regexp/main.js"


export const join_regexUnionArr_toStr = <ValRegex extends t_regex_union_arr >(val_regex:ValRegex):t_JoinChar_pipe<ValRegex >  => 
{ 
    return val_regex.join(char_join_pipe)  as  t_JoinChar_pipe<ValRegex >
}

export const regexToStr = < ValRegex extends t_regex > (val_regex : ValRegex) :t_regexToStr<ValRegex>=>{
    return (val_regex instanceof Array? regexp._embedInNonCapturingGroup(join_regexUnionArr_toStr(val_regex)) :val_regex) as t_regexToStr<ValRegex>
    
} 

export const join_regexArr_toStr = <ValRegex extends t_regex_union_arr >(val_regex:ValRegex):t_JoinChar_starSpace<ValRegex  >  => 
{ 
    return val_regex.join(df_char_join_regex)  as  t_JoinChar_starSpace<ValRegex  >
}
