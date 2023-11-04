

export type t_resultInArrOfResult <T extends any[]> = T extends Array<infer X > ? X : never

export type t_invalid_match = null ;
export type t_match_regexExpExecArray = RegExpExecArray | t_invalid_match ;

export type t_invalid_groupMatched = undefined ;
export type t_groupMatched_regexExpExecArray = t_resultInArrOfResult<RegExpExecArray> | t_invalid_groupMatched ;

type t_indexable = string | number | symbol ;
export type t_json<K extends t_indexable = string > = Record<K,any> ;

export type t_regex_capturingGroup < ValRegex extends string > =  `(${ValRegex})`
export type t_regex_notCapturingGroup < ValRegex extends string > =  t_regex_capturingGroup<`?:${ValRegex}`>
