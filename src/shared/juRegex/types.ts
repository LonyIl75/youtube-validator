import { ApplyFnToArr, Args, Fn, getValueFromArgs, t_Args, t_JoinChar, t_JoinChar_pipe } from "../types.js"
import { types as t_regexp } from "../regexp/main.js"
export type t_regex_union_arr = readonly string[]
export type t_regex_single = string 
export type t_regex = t_regex_single|t_regex_union_arr


export type t_concatRegex < regex_1 extends t_regex , regex_2 extends t_regex > = 
regex_1 extends t_regex_single ? regex_2 extends t_regex_single ? [regex_1,regex_2] :  
regex_2 extends t_regex_union_arr ? [regex_1,...regex_2] : [regex_1] 

: regex_1 extends t_regex_union_arr ? regex_2 extends t_regex_single ? 
[...regex_1,regex_2] : regex_2 extends t_regex_union_arr ? [...regex_1,...regex_2] : regex_1 

: regex_2 extends t_regex_union_arr ? regex_2 : regex_2 extends t_regex_single ? [regex_2] : [] 


export type t_regexToStr < regex_strOrArr extends t_regex> =  regex_strOrArr extends t_regex_single ? regex_strOrArr : regex_strOrArr extends t_regex_union_arr ?t_regexp.t_regex_notCapturingGroup<t_JoinChar_pipe<regex_strOrArr>> : never

export const df_char_join_regex = "\\s*";
export type t_join_df_char_join_regex = typeof df_char_join_regex
export type t_JoinChar_starSpace < Arr extends readonly string[]  > = t_JoinChar<Arr,t_join_df_char_join_regex>



export interface FnRegexToStr extends Fn {
    return: Args<this> extends t_Args<any,any> ?  getValueFromArgs<Args<this>> extends infer Rg ? Rg extends t_regex ? t_regexToStr<Rg> :"":"":""
}


export type joinRegexArrWith < Arr_regex_strOrArr extends readonly t_regex[] , join_str extends string = t_join_df_char_join_regex> =t_JoinChar<ApplyFnToArr<FnRegexToStr,Arr_regex_strOrArr>,join_str>


export interface FnArrRegexToStr extends Fn {
    return: Args<this> extends t_Args<any,any> ?  getValueFromArgs<Args<this>>  extends infer Arr_Rg ?Arr_Rg extends readonly t_regex[]  ? joinRegexArrWith<Arr_Rg> :Arr_Rg:"":""
}