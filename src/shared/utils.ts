
export const getIdxElementOfArrOrUndefined = <T > (arr : T[] , idx : number) : T|undefined => {
    return arr.length > idx ? arr[idx] : undefined   ;
}

export type getTupleFromSizeAndType  <T extends any , NArr extends readonly any[] > = NArr extends readonly [infer _ , ...infer R ] ? readonly [T , ...getTupleFromSizeAndType<T,R>] : readonly[]
                                                                                                                                                                                                                                                                    
export type concatStrArr < Arr1 extends readonly string[] , Arr2 extends readonly string[] > = 
Arr1 extends readonly [infer _1 , ...infer R1 ] ? Arr2 extends readonly [infer _2 , ...infer R2 ] ? R1 extends readonly string[] ? R2 extends readonly string[] ? `${R1[0]}${R2[0]}${concatStrArr<R1,R2>}`//:never:never :"" :""
:never:never:Arr2 extends readonly [infer _2 , ...infer R2 ] ? never : "":never

export const concatPairElementFromArrAndArr = < NArr extends readonly string[] , RArr extends getTupleFromSizeAndType<string , NArr> =getTupleFromSizeAndType<string , NArr> > (name_ids:NArr ,arr_regex :RArr):concatStrArr<NArr,RArr> =>{
    let res :string = ""
    if(name_ids.length !== arr_regex.length) throw new Error("concatPairElementFromArrAndArr | name_ids.length !== arr_regex.length")
    for(let i = 0 ; i < name_ids.length ; i++){
        res = res + arr_regex[i] +name_ids[i]
    }
    return res  as concatStrArr<NArr,RArr>
}

export type t_enum_value = string 


export const alternateFromArrAndArr = <Arr1 extends readonly any[] , Arr2 extends readonly any[]>(arr1: Arr1  , arr2:Arr2)=>{
    if(arr1['length'] !== arr2['length']){throw new Error("arr1 and arr2 must have same length")}
    let arr = [] as any[]
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
        arr.push(arr2[i])
    }
    return arr 
}


export const createJsonAsForEach =(arr_element : { [k:string] : any }[])=>{
    let obj = {} as any
    for (const element of arr_element) {
        for(const key in element){
            obj[key] = element[key]
        }
    }
    return obj 
}