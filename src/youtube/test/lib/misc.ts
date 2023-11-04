import { t_json } from "@/shared/types.js"
import { ValidationError } from "yup"

const getTestEmbedding = (str :string )=> `Test-${str}`

const getTestFailEmbedding = (str :string )=> `${getTestEmbedding(str)}-Fail`
const getTestPassEmbedding = (str :string)=> `${getTestEmbedding(str)}-Pass`

const getTestResultEmbedding = (str :string ,fct_result : (_str :string)=> string ,  message : string  )=> `${getTestEmbedding(str)}\n\nResult: ${fct_result(str)}\nReason:\n${message}`


const getSuccessMessage = (json : t_json ) => `SUCCESS:\nResult-Object: ${JSON.stringify(json)}`

const convertErrStackToString = (err_stack : any[]) => err_stack.join("\n")
const getErrorMessage = ( err_message :string ) => `ERROR:\n${err_message}`

const getTestPassMessage = (name_test :string , result_message : string ) => getTestResultEmbedding(name_test,getTestPassEmbedding,result_message)
const getTestFailErrorMessageObj = (name_test :string , err_obj : any ) => getTestResultEmbedding(name_test,getTestFailEmbedding,JSON.stringify(err_obj))
const getTestFailErrorMessage = (name_test :string , err_message : string ) => getTestResultEmbedding(name_test,getTestFailEmbedding,err_message)


namespace TestYup {
    export const getYupSuccessMessage = (json : t_json ) => getSuccessMessage(json)
    export const convertYupErrorsToString = (err : ValidationError ) => convertErrStackToString(err.errors)
    export const getYupErrorMessage = (err : ValidationError ) => getErrorMessage(convertYupErrorsToString(err))

    export const getYupTestPassMessage = (name_test :string , json : t_json ) => getTestPassMessage(name_test,getYupSuccessMessage(json))
    export const getYupTestFailErrorMessage = (name_test :string , err : ValidationError ) => getTestFailErrorMessage(name_test,getYupErrorMessage(err))

}
export const miscTest = {
    getTestEmbedding,
    getTestFailEmbedding,
    getTestPassEmbedding,
    getTestResultEmbedding,
    getSuccessMessage,
    convertErrStackToString,
    getErrorMessage,
    getTestPassMessage,
    getTestFailErrorMessageObj,
    getTestFailErrorMessage,
    TestYup
}