

import {juRegex , type types as t_juRegex } from "../juRegex/main.js";
import { ApplyFnToArr, Args, Fn, FnCreateRecordFromArrAndArr, UnionToArray, applyFunctAtIndexes, alternateElementFromArrAndArr, createRecordFromArrAndArr, getArrIdxAscOfArrElements, getIdxFromArgs, getIndexOfElement, getValueFromArgs, jsonObjectToArrValue, t_Args, t_notFoundIdx, EmptyObject } from "../types.js"
import { alternateFromArrAndArr, createJsonAsForEach, t_enum_value } from "../utils.js"
import { createSchemaEnumOrRegex } from "./validators.js"

export type arr_my_lang = ["en","fr"]
export type union_my_lang = arr_my_lang[number]
export type createArrLang < Arr extends readonly string[] > = union_my_lang extends Arr[number]  ? Arr : never
export type validateArrLang = readonly [...arr_my_lang , ...readonly string[]]


/*
export const  arr_regex_field = [enum_Tooltip.Member ] as const 
export type t_arr_regex_field = typeof arr_regex_field

const arr_regex = ["\\d{1,2}(,\\d)?"] as const 

//Create with function that take arr_regex infer returnType with it and regexFields
export const regexTooltip = {
    [arr_regex_field[0]] : [["\\(",arr_regex[0]],["\\)"]]as const
}*/

export type t_regexFieldsObjectValues = readonly (readonly t_juRegex.t_regex[])[]

export const createRegexFieldsObject = <EnumType extends t_enum_value, ArrRegexField extends readonly EnumType[] , ArrValuesRegexField extends readonly t_regexFieldsObjectValues[] > 
(arr_regex_field :ArrRegexField ,arr_regex_values : ArrValuesRegexField  )=>{
    return createJsonAsForEach(arr_regex_field.map((key)=>{return { [key]:arr_regex_values[arr_regex_field.indexOf(key)]}})) as t_regexFieldsObject<EnumType,ArrRegexField,ArrValuesRegexField>
}


export type t_enumToArr <E > =  UnionToArray<E>

//Readonly<jsonObjectToArrValue <t_lang_arr_enum<enum_Tooltip  , [enum_Tooltip.Member ] > >>

export type t_lang_arr_enum <EnumType extends t_enum_value  , ArrIdxRegex extends readonly EnumType[] > = {
    [key  in EnumType ] : key extends ArrIdxRegex[number] ? readonly t_juRegex.t_regex[] : t_enum_value 
}

export type t_idxFromEnumValue < EnumType extends t_enum_value  , EnumValues extends EnumType[] > = 
UnionToArray<EnumType>

export type t_getTypeArrEnum < EnumType extends t_enum_value , ArrIdxRegex extends readonly EnumType[] > = Readonly<jsonObjectToArrValue <t_lang_arr_enum<EnumType  , ArrIdxRegex > >>



export interface ITraductionEnum<ArrLangs extends validateArrLang , EnumType extends t_enum_value ,
RegexKeysFieldsObject extends readonly EnumType[] ,
ArrRegexValues extends readonly t_regexFieldsObjectValues[] ,
TradForEachLang extends readonly t_getTypeArrEnum<EnumType  , RegexKeysFieldsObject>[] ,
TradTable extends t_tradTable < EnumType ,RegexKeysFieldsObject ,ArrLangs , TradForEachLang > = t_tradTable < EnumType ,RegexKeysFieldsObject ,ArrLangs , TradForEachLang >
> {
    arr_lang : ArrLangs;
   arr_regex_nameFields : RegexKeysFieldsObject;
   regex_fieldsObject : t_regexFieldsObject<EnumType, RegexKeysFieldsObject , ArrRegexValues >;
   arr_langTrad : TradForEachLang;
   map_KlangVtrad : TradTable;

   _enum : EnumType;
   
   get_traductionFromLang : <Lang extends ArrLangs[number]> (lang:Lang)=>createTraductionFromEnumAndArr <EnumType,RegexKeysFieldsObject,ArrRegexValues,readonly [TradTable[Lang]],readonly [Lang]> ;

   get_createSchemaFromLang : <Lang extends ArrLangs[number]>(lang :Lang,...args : Parameters<typeof createSchemaEnumOrRegex > extends readonly [infer _ ,...infer _R  ] ? _R : []  )=>ReturnType<typeof createSchemaEnumOrRegex> ;
}////createTraductionFromEnumAndArr <EnumType,RegexKeysFieldsObject,[TradTable[Lang]] ,readonly [Lang] > ;
//   export type t_notRegexFields = Exclude<typeof enum_Tooltip[keyof typeof enum_Tooltip],t_arr_regex_field[number]>
//  export type t_trad_tooltipFromLang < Lang extends t_def_lang[number]> = createTraductionFromEnumAndArr <Tooltip.enum_Tooltip,t_arr_regex_field, typeof regexTooltip , [typeof trad_table[Lang]] ,readonly [Lang]>



export type t_tradTable < EnumType extends t_enum_value ,RegexKeysFieldsObject extends readonly EnumType[] ,ArrLangs extends readonly string[] /*validateArrLang*/ , TradForEachLang extends readonly t_getTypeArrEnum<EnumType  , RegexKeysFieldsObject>[] >  = Exclude<createRecordFromArrAndArr<ArrLangs,TradForEachLang> ,EmptyObject> & {[key in ArrLangs[number]] :any }

export class CTraductionEnum< ArrLangs extends validateArrLang , EnumType extends t_enum_value ,
RegexKeysFieldsObject extends readonly EnumType[] ,
ArrRegexValues extends readonly t_regexFieldsObjectValues[] ,
TradForEachLang extends readonly t_getTypeArrEnum<EnumType  , RegexKeysFieldsObject>[] , 
TradTable extends t_tradTable < EnumType ,RegexKeysFieldsObject ,ArrLangs , TradForEachLang > = t_tradTable < EnumType ,RegexKeysFieldsObject ,ArrLangs , TradForEachLang >
> implements ITraductionEnum<ArrLangs,EnumType,RegexKeysFieldsObject,ArrRegexValues,TradForEachLang,TradTable> {

    arr_lang : ArrLangs;
    arr_regex_nameFields : RegexKeysFieldsObject;
    regex_fieldsObject : t_regexFieldsObject<EnumType, RegexKeysFieldsObject , ArrRegexValues >;
    arr_langTrad : TradForEachLang;
    map_KlangVtrad : TradTable;

    _enum : EnumType;




    constructor(_enum : EnumType , arr_lang:ArrLangs, arr_regex_nameFields : RegexKeysFieldsObject ,arr_regex_values :ArrRegexValues,arr_langTrad : TradForEachLang){ 
        this._enum = _enum;
        this.arr_lang = arr_lang;
        this.arr_regex_nameFields = arr_regex_nameFields;
        this.regex_fieldsObject =createRegexFieldsObject<EnumType,RegexKeysFieldsObject,ArrRegexValues>(arr_regex_nameFields,arr_regex_values)
        this.arr_langTrad = arr_langTrad;
        this.map_KlangVtrad = createJsonAsForEach(arr_lang.map((lang:ArrLangs[number],idx:number)=>{return {[lang]:arr_langTrad[idx]}})) as TradTable 
    }

    get_traductionFromLang<Lang extends ArrLangs[number]>( lang:Lang){
        return computeRegexFromArr<EnumType,RegexKeysFieldsObject , ArrRegexValues , readonly [TradTable[Lang]] ,readonly [Lang]  >(Object.values(this._enum) as EnumType[] , this.regex_fieldsObject,[this.map_KlangVtrad[lang]],[lang])[lang]
    }


    get_createSchemaFromLang = <Lang extends ArrLangs[number]>(lang:Lang , field_name : string ,isRequired : boolean = true , parentSchema : any ={})=>{
        return createSchemaEnumOrRegex<EnumType , RegexKeysFieldsObject>(this.get_traductionFromLang(lang),field_name,isRequired,parentSchema )
    }
   
}


//getArrIdxAscOfArrElements < typeof  arr_regex_field , t_enumToArr<enum_Tooltip> >
//export type applyFunctAtIndexes < Idxs extends readonly number[] , Arr extends  readonly any[] , funct extends Fn = IdentityFn> =

/*
const en_arr_tooltip =[ "Objects","Activities" ,"Pride","People","Travel","Nature","Symbols","Food",["Member",["years?","months?"]],"Custom emojis","Verified","Owner"] as const
let gdsgfds : applyFunctAtIndexes < getArrIdxAscOfArrElements<typeof  Tooltip.arr_regex_field , t_enumToArr< Tooltip.enum_Tooltip> > ,typeof  en_arr_tooltip,FnArrRegexToStr>
*/

 
export const field_regex_value = "regex_value" as const
export type t_field_regex_value = typeof field_regex_value

export const field_enum_value = "enum_value" as const
export type t_field_enum_value = typeof field_enum_value


export interface IEnum_ValueAndRegexValidator<EnumType extends string , RegexFields extends readonly EnumType[] > {
    [field_regex_value]:{ [key in RegexFields[number] ] : readonly t_juRegex.t_regex[] }
    [field_enum_value]:{ [key in Exclude<EnumType,RegexFields[number]> ] : t_juRegex.t_regex_single }
}


//TODO : inherit json_serialize 
export class CEnum_ValueAndRegexValidator <EnumType extends string , RegexFields extends readonly EnumType[] > implements IEnum_ValueAndRegexValidator<EnumType,RegexFields> {
    [field_regex_value]:{ [key in RegexFields[number] ] : readonly t_juRegex.t_regex[] }
    [field_enum_value]:{ [key in Exclude<EnumType,RegexFields[number]> ] : t_juRegex.t_regex_single }

    static df_cenum_valueAndRegexValidator : IEnum_ValueAndRegexValidator<any,any> = {[field_regex_value]:{},[field_enum_value]:{}}

    constructor( obj : IEnum_ValueAndRegexValidator<EnumType,RegexFields>= CEnum_ValueAndRegexValidator.df_cenum_valueAndRegexValidator ){
        //let sdfsdf = Object.values(enumType)
        this[field_regex_value] = obj[field_regex_value]
        this[field_enum_value] = obj[field_enum_value]
    }

    toJson(){
        return {[field_regex_value]:this[field_regex_value],[field_enum_value]:this[field_enum_value]}
    }
}


export const computeRegexFromArr = <EnumType extends t_enum_value ,  ArrFieldRegex extends readonly EnumType[], ArrValuesRegex extends readonly t_regexFieldsObjectValues[], 
ArrTrad extends readonly t_getTypeArrEnum<EnumType , ArrFieldRegex > [], t_arr_lang extends readonly string[] > 
    (arr_enum_keys :readonly EnumType[] ,_arr_valuesRegexFields : t_regexFieldsObject<EnumType ,ArrFieldRegex,ArrValuesRegex > , arrArr:ArrTrad , arr_lang : t_arr_lang  )=>{
        
        if(arrArr["length"] != arr_lang["length"]){throw new Error("arrArr and arr_lang must have same length")}

        let arr_id_regexFields = Object.keys(_arr_valuesRegexFields) 

        let arr_idxEnum = arr_id_regexFields.map((val )=> arr_enum_keys.indexOf(val as any ))

        let arr_valuesRegexFields : {[k in EnumType ] : t_juRegex.t_regex[]} = {} as any;
        for (const key of arr_id_regexFields) {
            arr_valuesRegexFields[key as EnumType ] =_arr_valuesRegexFields[key as EnumType ].map((arr_regex : readonly t_juRegex.t_regex[] )=>{
                return juRegex.join_regexArr_toStr(arr_regex.map((val)=>juRegex.regexToStr(val))) as t_juRegex.t_regex })
        }

        let arr_regex = {} as any 
        let iter = 0 

        for ( const arr of arrArr){
            let i = 0 
            let idx = 0 ;
            let obj = new CEnum_ValueAndRegexValidator<EnumType,ArrFieldRegex>()

            for (const arr_regex_val of arr as any ){

                if(idx == arr_idxEnum[i]){
                    i+=1 
                    let arrVal = arr_regex_val.map((regex_val:t_juRegex.t_regex)=>juRegex.regexToStr(regex_val))
    
                    let arr_idxFields = arr_valuesRegexFields[arr_enum_keys[idx]];
                    //example :  return 'Membre\\s*\\(\\s*\\d{1,2}(,\\d)?\\s*(?:années?|mois)\\s*\\)'
                    obj[field_regex_value][arr_enum_keys[idx] as ArrFieldRegex[number] ]=juRegex.join_regexArr_toStr(alternateFromArrAndArr(arrVal,arr_idxFields))//ApplyFnToArr<FnAllCreateTrad<EnumType,ArrRegexField ,RegexValues, ArrIdx > ,_Arr>
                }else {
                    obj[field_enum_value][arr_enum_keys[idx] as Exclude<EnumType,ArrFieldRegex[number]> ]=arr_regex_val 
                }
                idx+=1
            }
            arr_regex[arr_lang[iter]]= obj.toJson() 
            iter+=1
        }
        

        return arr_regex  as createTraductionFromEnumAndArr <EnumType,ArrFieldRegex,ArrValuesRegex,ArrTrad,t_arr_lang> 

}



export interface FnApplyFunctAtIndexes< Idxs extends readonly number[], funct extends Fn > extends  Fn {
    return:  Args<this> extends t_Args<any,any> ? getValueFromArgs<Args<this>>  extends infer Arr ? Arr extends readonly any[] ? applyFunctAtIndexes<Idxs,Arr, funct> : ""  : "" : ""
}


export type t_regexFieldsObject < EnumType extends t_enum_value , ArrRegexField extends readonly EnumType[] , ArrRegexValues extends readonly t_regexFieldsObjectValues[] = readonly t_regexFieldsObjectValues[] > = createRecordFromArrAndArr<ArrRegexField,ArrRegexValues>  extends infer Obj ?
Exclude<Obj,EmptyObject> & {[key in EnumType] : any } :never 


export interface FnAddRegexAtIndexes< EnumType extends t_enum_value ,  ArrRegexField extends readonly EnumType[] , ArrRegexValues extends readonly t_regexFieldsObjectValues[] , Idxs extends readonly number[] > extends  Fn {
    return:  Args<this> extends t_Args<any,any> ? getIdxFromArgs<Args<this>> extends infer Idx ? 
    getIndexOfElement<Idx,Idxs> extends infer I ? I extends t_notFoundIdx ? getValueFromArgs<Args<this>> : I extends number ? 
    ArrRegexField[I] extends infer IdField ? IdField extends EnumType ? getValueFromArgs<Args<this>> extends infer regex_val ? regex_val  extends readonly t_juRegex.t_regex[] ? 
    t_juRegex.joinRegexArrWith<alternateElementFromArrAndArr<ApplyFnToArr<t_juRegex.FnRegexToStr,regex_val>,ApplyFnToArr<t_juRegex.FnArrRegexToStr,t_regexFieldsObject < EnumType,ArrRegexField,ArrRegexValues>[IdField]> > >
    : never : never : never : never: never : never : never: never
}


export interface FnAllCreateTrad<EnumType extends t_enum_value ,  ArrRegexField extends readonly EnumType[] ,  ArrRegexValues extends  readonly t_regexFieldsObjectValues[] , ArrIdx  extends readonly number[] > extends Fn {
 return : Args<this> extends t_Args<any,any> ?  ApplyFnToArr<FnAddRegexAtIndexes<EnumType,ArrRegexField ,ArrRegexValues, ArrIdx > ,getValueFromArgs<Args<this>>> :[]
}

export interface FnSplitRegexAndSimpleField < EnumType extends t_enum_value ,  ArrRegexField extends readonly EnumType[] > extends Fn {
    return : Args<this> extends t_Args<any,any> ?  getValueFromArgs<Args<this>> extends infer Arr ? ArrRegexField[number] extends keyof Arr ? {[field_enum_value]:Omit<Arr, ArrRegexField[number]> , [field_regex_value]:Pick<Arr, ArrRegexField[number]>}
    :Arr 
    :never :never
}

export type createTraductionFromEnumAndArr <EnumType extends t_enum_value ,  ArrRegexField extends readonly EnumType[] ,ArrRegexValues extends readonly t_regexFieldsObjectValues[] ,_Arr extends  readonly t_getTypeArrEnum<EnumType , ArrRegexField > [] , 
ArrLang extends readonly string [], EArr extends t_enumToArr <EnumType> = t_enumToArr <EnumType> , ArrIdx  extends readonly number[]  = getArrIdxAscOfArrElements<ArrRegexField , t_enumToArr< EnumType> >  > 
= ApplyFnToArr<FnAllCreateTrad<EnumType,ArrRegexField ,ArrRegexValues, ArrIdx > ,_Arr>   extends infer Regex_compute ? Regex_compute extends readonly any[] ? 
t_tradTable<EnumType,ArrRegexField,ArrLang,ApplyFnToArr<FnSplitRegexAndSimpleField<EnumType,ArrRegexField>,ApplyFnToArr<FnCreateRecordFromArrAndArr<EArr> ,Regex_compute>>> 
: never: never



