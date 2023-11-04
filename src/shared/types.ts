export const _notFoundIdx = ():-1 => -1
export type t_notFoundIdx = ReturnType<typeof _notFoundIdx>


export type getIndexOfElement<Elm,Arr extends readonly any[]> = 
  Arr extends readonly [...infer A , infer T]? 
    Elm extends T? A['length']: getIndexOfElement<Elm, A>
  : t_notFoundIdx;

export type getArrIdxAscOfArrElements < ArrElm extends readonly any[] , Arr extends readonly any[] > =
 ArrElm extends readonly [ ... infer R1 ,infer A1  ] ? Arr extends readonly [ ... infer R2 ,infer A2  ] ?
A1 extends A2 ? [...getArrIdxAscOfArrElements<R1,R2>,R2['length'] ] : getArrIdxAscOfArrElements<ArrElm,R2> : [never] : []


export type isPositive<N extends number> =number extends N ? N : `${N}` extends `-${string}` ? never : N;

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>



type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type isInRange<x extends number ,bot extends number , top extends number > = x extends IntRange<bot, top> ? true : false 

export type isInferior <x extends number ,top extends number > = isInRange<x,0, top> 
export type isInArrayIdx <Idx extends number ,Arr extends readonly any[]> =Idx extends t_notFoundIdx ? false : isPositive<Idx> extends never ? false : isInferior<Idx , Arr['length']>

export type endIdx = -1


 export type _getSubArray < Arr extends readonly any[] , StartIdx extends number , EndIdx extends number , ArrRes extends readonly any[]= []> =
 Arr extends readonly [... infer R , infer _ ] ? isInferior<EndIdx,Arr['length'] > extends true ? _getSubArray<R , StartIdx , EndIdx  > :
  isInferior<StartIdx , R['length']  > extends true ? _getSubArray<R , StartIdx , EndIdx , [_,...ArrRes] > : StartIdx extends R['length']  ? [_,...ArrRes]  : ArrRes : ArrRes

  
export type isEqual <A , B> = A extends B ? B extends A ? true : false : false

export type getSubArray < Arr extends readonly any[] , StartIdx extends number , EndIdx extends number , EndIdxIsInArray extends boolean = boolArrUnion <[isEqual <EndIdx ,endIdx>, isEqual<EndIdx ,Arr['length']>]> extends true ? true :  isInArrayIdx<EndIdx , Arr>  > =
 isInArrayIdx<StartIdx , Arr> extends true ?EndIdxIsInArray extends true ? _getSubArray< Arr , StartIdx , isEqual <EndIdx ,endIdx> extends true ? Arr['length'] :  EndIdx > :  never :never


export type _boolArrIntersec < arr_bool extends readonly boolean[] > =  arr_bool extends readonly [infer A , ... infer R] ?  A extends false ? false : R extends readonly boolean[] ?  boolArrIntersec<R> : A : true
export type _boolArrUnion < arr_bool extends readonly boolean[] > =  arr_bool extends readonly [infer A , ... infer R] ?  A extends true ? true : R extends readonly boolean[] ?  boolArrUnion<R> : A : false

export type boolArrUnion < arr_bool extends readonly boolean[] > = arr_bool extends t_empty1DArray ? true : _boolArrUnion<arr_bool>
export type boolArrIntersec < arr_bool extends readonly boolean[] > = arr_bool extends t_empty1DArray ? true : _boolArrIntersec<arr_bool>


export type joinArr < Arr1 extends readonly any[] , Arr2 extends readonly any[]  > = [...Arr1,...Arr2]


export type t_Args < V , Idx extends number > = {value:V , idx:Idx}
export type getValueFromArgs < Args extends t_Args<any,any> > = Args['value']
export type getIdxFromArgs < Args extends t_Args<any,any> > = Args['idx']


export type ApplyFnToArr <funct extends Fn , Arr extends readonly any[] , Acc extends any[]= []  > = 
Arr extends readonly [infer _ ,... infer R] ? R extends readonly any[] ? [Apply<funct, t_Args<Arr[0],Acc['length']> > , ...ApplyFnToArr<funct,R,[never , ...Acc]>] :[Apply<funct, t_Args<Arr[0],Acc['length']>>]:[]


interface IdentityFn extends Fn {
  return: Args<this> extends t_Args<any,any> ?   getValueFromArgs<Args<this>> :never 
}


 export type _applyFunctAtIndexes < Idxs extends readonly number[] , Arr extends  readonly any[] ,funct extends Fn = IdentityFn ,Acc extends readonly any[] = []> =
 Idxs extends [infer _ , ... infer RIdx ] ? Arr[Acc['length']] extends infer Elm ? 
 Idxs[0] extends Acc['length'] ? RIdx extends readonly number[] ?  _applyFunctAtIndexes < RIdx , Arr ,funct,[...Acc,Apply<funct,t_Args<Elm,Acc['length']>>]> :[...Acc,Apply<funct,t_Args<Elm,Acc['length']>>] : _applyFunctAtIndexes < Idxs , Arr ,funct,[...Acc,Elm]> 
 : Acc :Acc 


 export interface FnIsInArrayIdx < Arr extends readonly any[]> extends Fn {
  return: Args<this> extends t_Args<any,any> ?  getValueFromArgs<Args<this>> extends infer N ? N extends  number ? isInArrayIdx<N,Arr>  : false : false : false 
}


export type _replace < Idxs extends readonly number[] , Arr extends  readonly any[] ,  Result  > = 
boolArrIntersec <ApplyFnToArr<FnIsInArrayIdx<Arr>,Idxs>> extends true ? Result extends infer ArrRes ? 
ArrRes extends readonly any[] ? isInferior<ArrRes["length"] , Arr["length"]> extends true ? 
getSubArray<Arr,ArrRes["length"],-1> extends infer Rest ? Rest extends readonly any[]? 
joinArr<ArrRes,Rest> : ArrRes : ArrRes : ArrRes : never: never : never 

export type applyFunctAtIndexes < Idxs extends readonly number[] , Arr extends  readonly any[] , funct extends Fn = IdentityFn> =
boolArrIntersec <ApplyFnToArr<FnIsInArrayIdx<Arr>,Idxs>> extends true ? 
_applyFunctAtIndexes < Idxs , Arr , funct  > extends infer resReplace ? _replace < Idxs , Arr , resReplace > : never : never 


export type Args<M extends Fn> = M["args"];

export type Fn<Args extends unknown = unknown , Return = unknown> = {
    args: Args;
    return: Return;
}

type Apply<F extends Fn, U extends Args<F>> = (F & { args: U })["return"];

export type t_empty1DArray = []


// convert a union to an intersection: X | Y | Z ==> X & Y & Z
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;
  
  // credits goes to https://github.com/microsoft/TypeScript/issues/13298#issuecomment-468114901
  // convert a union to an overloaded function X | Y ==> ((x: X)=>void) & ((y:Y)=>void)
  export type UnionToOvlds<U> = UnionToIntersection<
    U extends any ? (f: U) => void : never
  >;
  
  // takes last from union
  export type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;
  
  // credits goes to https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union#comment-94748994
  export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
  
export type UnionToArray<T, Accumulator extends unknown[] = []> = IsUnion<T> extends true
    ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...Accumulator]>
    : [T, ...Accumulator];


    
export type jsonObjectToArrKey < T > = T extends any[] ?  UnionToArray<Exclude<keyof T , keyof any[]>> : UnionToArray<keyof T>
export type _jsonObjectToArrValue < T , arrKey extends Array<any> > = arrKey extends [] ? [] : [T[arrKey[0]] , ..._jsonObjectToArrValue<T, arrKey extends [any,... infer R] ? R : []>]
export type jsonObjectToArrValue < T > = T extends {[key in keyof T]: any} ? _jsonObjectToArrValue<T , jsonObjectToArrKey<T>> : never


export type _alternateElementFromArrAndArr <Arr1 extends readonly any[] , Arr2 extends readonly any[]> = 
Arr1 extends readonly [infer _1 , ...infer R1] ? Arr2 extends readonly [infer _2,...infer R2] ? [Arr1[0],Arr2[0] ,..._alternateElementFromArrAndArr<R1,R2>] : [] : [] 


export type alternateElementFromArrAndArr <Arr1 extends readonly any[] , Arr2 extends readonly any[]> =
Arr1["length"] extends Arr2["length"] ? _alternateElementFromArrAndArr <Arr1 ,Arr2> : never 


export interface FnCreateRecordFromArrAndArr<I extends readonly any[] > extends Fn {
  return: Args<this> extends t_Args<any,any> ?   getValueFromArgs<Args<this>> extends infer Arr ? Arr extends readonly any[] ? createRecordFromArrAndArr<I , Arr> :{} :{}:{}
}

export type EmptyObject = {
  [K in any] : never
}
export type createRecordFromArrAndArr < K extends readonly string[] , V extends readonly any[] > =
K[0] extends string ? 
    V extends readonly [infer _1 , ...infer RV] ? 
        K extends readonly [infer _2 , ...infer RK] ? 
          RK extends string[] ? 
            RV extends any[] ? { [ k in K[0] ] : V[0] } &  createRecordFromArrAndArr < RK , RV > : {} 
          : {} 
        : {} 
    :{[ k in K[0] ] : V[0] } 
  :{} 


export type t_JoinChar< T extends readonly string[],JoinChar extends string > =  
T extends [] ?"":
T extends readonly [infer A , ...infer R ] ? A extends string ? 
  R extends readonly string[] ? R extends [] ? A  : `${A}${JoinChar}${t_JoinChar<R,JoinChar>}`: "" 
: "" : never

export const char_join_pipe = "|";
export type t_join_pipe = typeof char_join_pipe
export type t_JoinChar_pipe < T extends readonly string[] > = t_JoinChar<T,t_join_pipe>


type t_indexable = string | number | symbol ;
export type t_json<K extends t_indexable = string > = Record<K,any> ;



export const char_join_pathRoutes = "/";
export type t_char_join_pathRoutes = typeof char_join_pathRoutes
export type t_JoinChar_routes< T extends readonly string[] > = t_JoinChar<T,t_char_join_pathRoutes>


export type stringToArray<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer B}${infer R}`
  ? stringToArray<R, [...Acc, B]> : Acc;

export type stringLengthInferiorTo<S extends string , N extends number> = isInArrayIdx<N, stringToArray<S>>;



export type t_strNotVerifyUnion <S extends string , US extends string > = S extends `${infer B}${infer R}`?
B extends US ?  `${B}${R}` : t_strNotVerifyUnion<R,US> : "" ;

export type t_strVerifyUnion <S extends string , US extends string > = S extends `${infer B}${infer R}`?
B extends US ?  t_strVerifyUnion<R,US> : `${B}${R}` : "" ;


export type t_min_alphabet = "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h"|"i"|"j"|"k"|"l"|"m"|"n"|"o"|"p"|"q"|"r"|"s"|"t"|"u"|"v"|"w"|"x"|"y"|"z"
export type t_maj_alphabet = Capitalize<t_min_alphabet>
export type t_alphabet = t_min_alphabet | t_maj_alphabet

export type t_digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"


