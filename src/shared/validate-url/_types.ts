import { t_alphabet , t_digit  ,stringLengthInferiorTo ,t_strVerifyUnion } from "../types.js" ;
import * as types from "./types.js" ;
// Validate url with the following regex :
/*
https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b\/([-a-zA-Z0-9%_\.~]+\/?)+(\?[-a-zA-Z0-9%_\.~]+=[-a-zA-Z0-9%_\.~]+\&?)*
*/

//longest TLD == "XN--VERMGENSBERATUNG-PWB"["length"] == 24 => 25 is the max length of TLD
type t_TLD_limit = 25 ;
type isTLD<S extends string > = stringLengthInferiorTo<S,t_TLD_limit>  extends true ? false : true ;


type t_union_urlReservedChar = "!"|"#"|"$"|"&"|"'"|"("|")"|"*"|"+"|","|"/"|":"|";"|"="|"?"|"@"|"["|"]"
type t_union_urlUnReservedChar_specialChar = "-"|"_"|"."|"~" 
type t_union_urlUnReservedChar = 	 t_alphabet | t_digit |	t_union_urlUnReservedChar_specialChar


//TYPE : HEAD
type t_rest_head_http_https<Ss extends string> = Ss extends `${types.t_head_http_https<infer R>}` ? R : Ss ;

//TYPE : WWWs
type t_rest_wwwsDomain <Ss extends string>  = Ss extends `${types.t_wwwsDomain<infer D>}` ?
t_strVerifyUnion<D ,Exclude<t_union_urlUnReservedChar_specialChar,".">> extends infer R ? R  : never 
: Ss ;

//TYPE : TLD
type t_rest_strAndTld <Ss extends string>  =  
Ss extends `${types.t_full_strAndTld<infer S_TLD,infer R>}` ? 
  isTLD<S_TLD> extends true ? R : Ss 
:  Ss extends `${types.t_deb_strAndTld<infer S_TLD>}` ?
  isTLD<S_TLD> extends true ? "" : Ss 
: Ss ;


//TYPE : PART OF URL 
type t_rest_partOfUrl <Ss extends string > = t_strVerifyUnion<Ss , t_union_urlUnReservedChar>
type t_rest_notPartOfUrl <Ss extends string > = t_strVerifyUnion<Ss , t_union_urlReservedChar>

//TYPE : BODY URL 
type t_rest_bodyUrl <Ss extends string > = 
Ss extends `${types.t_bodyUrl<infer B,infer R>}` ?
B extends "" ? Ss :t_rest_partOfUrl<B> extends infer P ? P extends "" ? t_rest_bodyUrl<R> : P :never
: Ss extends "" ? Ss : t_rest_partOfUrl<Ss> extends infer P ? P extends "" ? P : P : never 


//TYPE : REQ BODY URL 
type t_rest_partOfReqValue <Ss extends string > = t_rest_partOfUrl<Ss>
type t_rest_partOfReqID <Ss extends string > = t_rest_partOfUrl<Ss>


type _t_rest_reqUrlBody <ID extends string , V extends string , R extends string = "" > =
V extends "" ? never :
t_rest_partOfReqID<ID> extends infer P1 ? P1 extends "" ? 
t_rest_partOfReqValue<V> extends infer P2 ? P2 extends "" ?
 [true, R extends "" ? R :t_rest_reqUrlBody<R>]
:P2 extends string ? [false ,`${P2}`] : never 
:never 
: [false ,`${types.t_beg_reqUrlBody<ID,V>}`]
: never 



type t_rest_reqUrlBody <Ss extends string > = 
Ss extends `${types.t_full_reqUrlBody<infer ID,infer V,infer R>}` ?
  _t_rest_reqUrlBody<ID,V,R> extends [infer _b , infer SR ] ? 
      _b extends true ? SR : SR extends string ? `${types.t_end_reqUrlBody<SR,R>}`: never 
  :never 
: Ss extends `${types.t_beg_reqUrlBody<infer ID,infer V>}` ? 
  _t_rest_reqUrlBody<ID,V> extends [infer _b , infer SR ] ?
     SR 
  : never
:Ss

//TYPE : REQ
type t_rest_reqUrl <Ss extends string > =
Ss extends `${types.t_reqUrl<infer R>}` ?
    t_rest_reqUrlBody<R>
: Ss;



//TYPE : URL 
type t_isUrl <Ss extends string > =
t_rest_head_http_https<Ss> extends infer RH ? RH extends string ?
RH extends "" ? false :
  t_rest_wwwsDomain<RH> extends infer RW ? RW extends string ?
  RW extends "" ? false :
    t_rest_strAndTld<RW> extends infer RD ? RD extends string ?
    RD extends "" ? true: RD extends `${RW}` ? false : 
      t_rest_bodyUrl<RD> extends infer RB ? RB extends string ?
      RB extends "" ? true :
        t_rest_reqUrl<RB> extends infer RQ ? RQ extends string ? 
          RQ extends "" ? true : false

: false : false : false : false : false : false : false : false : false : false


export default t_isUrl

export type {
    t_rest_head_http_https,
    t_rest_wwwsDomain,
    t_rest_strAndTld,
    t_rest_partOfUrl,
    t_rest_notPartOfUrl,
    t_rest_bodyUrl,
    t_rest_reqUrlBody,
    t_rest_reqUrl
}

