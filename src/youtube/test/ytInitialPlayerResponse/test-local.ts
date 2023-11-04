import Yup , { ValidationError } from "yup";


import {miscTest} from "../lib/misc.js"
import { YupVldSchOf_PlayerResponse , YupVldSchOf_AdSlotsEntity} from "../../src/ytInitialPlayerResponse/validators.js";
import { t_json } from "@/shared/types.js";

const yupTest = miscTest.TestYup

function ju_test_local(name_test :string , json : t_json , yupVldSch : Yup.ObjectSchema<any> =YupVldSchOf_PlayerResponse, is_reversed :boolean = false ){
  const fct_success = (_json : t_json ) => yupTest.getYupTestPassMessage(name_test,_json)
  const fct_error = (err : ValidationError ) => yupTest.getYupTestFailErrorMessage(name_test,err)


  try {
      yupVldSch.validateSync(json)
      let success_message = is_reversed ? fct_error(new ValidationError("NO ERROR" ,{}/*json*/ )) : fct_success({}/*json*/)
      console.log(success_message)
    } catch (err : unknown  ) {
      let err_message =""
      if(err instanceof ValidationError){
        err_message =is_reversed ? fct_success({message:yupTest.convertYupErrorsToString(err)}) : fct_error(err)
      }/*else {
          err_message =`${miscTest.getTestFailErrorMessageObj(name_test,err)}`
      }*/
    console.log(err_message)
  }
  
}

export async function ytInitialData_test_local( ){

  let arr_prom = []
  let curr_prom = Promise.resolve()

  curr_prom = import ("../../data/ytInitialPlayerResponse/1.js").then((json)=>{
    const testLocal_1_YtInitialData  =json.default
    return ju_test_local("testLocal_1_YtInitialData",testLocal_1_YtInitialData,YupVldSchOf_PlayerResponse,true)
  })

  arr_prom.push(curr_prom)

  curr_prom = import ("../../data/ytInitialPlayerResponse/2.js").then((json)=>{
    const testLocal_2_YtInitialData  =json.default
    return ju_test_local("testLocal_2_YtInitialData",testLocal_2_YtInitialData)
  })

  arr_prom.push(curr_prom)

  curr_prom = import ("../../data/ytInitialPlayerResponse/3.js").then((json)=>{
    const testLocal_3_YtInitialData  =json.default
    return ju_test_local("testLocal_3_YtInitialData",testLocal_3_YtInitialData, Yup.object({adSlots:Yup.array().of(YupVldSchOf_AdSlotsEntity)}))
  })

  arr_prom.push(curr_prom)

  return Promise.allSettled(arr_prom)

}