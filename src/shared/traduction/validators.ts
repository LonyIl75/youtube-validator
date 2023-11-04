
import * as Yup from 'yup';
import { IEnum_ValueAndRegexValidator, field_enum_value, field_regex_value, t_regexFieldsObjectValues } from './typeLang.js';
import {juRegex , type types as t_juRegex } from "../juRegex/main.js";



export const createSchemaEnumOrRegex =<EnumType extends string , RegexFields extends readonly EnumType[] >(enumAndRegexArr : IEnum_ValueAndRegexValidator<EnumType, RegexFields>, field_name : string,isRequired : boolean = true ,parentSchema : any ={} )=>{
    //Yup.mixed<typeof ytInitialData.Tooltip.enum_Tooltip [keyof typeof ytInitialData.Tooltip.enum_Tooltip]>().oneOf(Object.values(ytInitialData.Tooltip.enum_Tooltip))

    const enum_value = Yup.mixed().oneOf(Object.values(enumAndRegexArr[field_enum_value]) as readonly t_juRegex.t_regex_single[] )
    const enum_regex = (Object.values(enumAndRegexArr[field_regex_value]) as t_regexFieldsObjectValues ).flat() as readonly t_juRegex.t_regex_single[]


    return isRequired ?Yup.object({
            ...parentSchema,
            [field_name] : Yup.string().required().test(
                {
                    test : (str_value :string )=>{
                        return enum_value.isValidSync(str_value) || enum_regex.map((str_regex :t_juRegex.t_regex_single ) => Yup.string().matches(new RegExp(str_regex)).isValidSync(str_value)).some((_isTrue:boolean)=>_isTrue)
                    }
                }
            )

        }):Yup.object({
            ...parentSchema,
            [field_name] : Yup.string().notRequired().test(
                {
                    test : (str_value :Yup.Maybe<string | undefined> )=>{
                        if(str_value == undefined || str_value == null ) return true
                        else return enum_value.isValidSync(str_value) || enum_regex.map((str_regex :t_juRegex.t_regex_single ) => Yup.string().matches(new RegExp(str_regex)).isValidSync(str_value)).some((_isTrue:boolean)=>_isTrue)
                    }
                }
            )

        })
}