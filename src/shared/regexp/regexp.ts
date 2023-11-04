import type { t_invalid_match ,t_match_regexExpExecArray ,t_groupMatched_regexExpExecArray,t_invalid_groupMatched , t_regex_notCapturingGroup,t_regex_capturingGroup} from './types.js' ;
import {getIdxElementOfArrOrUndefined} from '@/shared/utils.js' ;

//PRIMITIVES : 
export const isInvalidRegExpExecArray = <T extends t_match_regexExpExecArray = t_match_regexExpExecArray > (value :T ) : boolean => {
  return value === getInvalidRegExpExecArray() ;
}
export const getInvalidRegExpExecArray = () : t_invalid_match => {
  return null ;
}

export const getInvalidGroupMatched = () : t_invalid_groupMatched => {
    return undefined ;
}

export const isInvalidGroupMatched = <T extends t_groupMatched_regexExpExecArray = t_groupMatched_regexExpExecArray > (value :T ) : boolean => {
    return value === getInvalidGroupMatched() ;
}

//

export const _embedInNonCapturingGroup = <ValRegex extends string > ( val_regex : ValRegex ) :t_regex_notCapturingGroup<ValRegex> =>{
  return _embedInCapturingGroup(`?:${val_regex}`) 
}

export const embedInNonCapturingGroup = <R extends RegExp > ( regex : R ) : RegExp => {
  return new RegExp(_embedInNonCapturingGroup(regex.source),regex.flags)  
}


export const _embedInCapturingGroup = <ValRegex extends string > ( val_regex : ValRegex ) :t_regex_capturingGroup<ValRegex> =>{
  return `(${val_regex})`  
}

export const embedInCapturingGroup = <R extends RegExp > ( regex : R ) : RegExp =>{
  return new RegExp(_embedInCapturingGroup(regex.source),regex.flags)  
}


//FUNCTIONS :

export const getFullMatchRegexExecArray =  (regex_exec_array : RegExpExecArray ) => {
  return getIdxElementOfArrOrUndefined<t_groupMatched_regexExpExecArray>(regex_exec_array,0)  
}

export const getMatchingGroupFromIdxAndRegexExecArray = (regex_exec_array : RegExpExecArray , idx: number = 0 ) => {
  return getIdxElementOfArrOrUndefined<t_groupMatched_regexExpExecArray>(regex_exec_array,idx+1)  
}

export const isInvalidMatchingGroupFromIdxAndRegexExecArray = (regex_exec_array : RegExpExecArray , idx: number = 0 ) => {
  return isInvalidGroupMatched(getMatchingGroupFromIdxAndRegexExecArray(regex_exec_array,idx))
}

export const concatRegExp = ( ...argsRegExp : RegExp[]) => new RegExp( argsRegExp.reduce((acc, elm) => acc + elm.source, "") , argsRegExp[0].flags)
