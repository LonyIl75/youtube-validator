

import { ValidationError } from "yup";
import { ytInitialPlayerResponse , ytInitialPlayerResponse_types , ytInitialPlayerResponse_validators} from "./ytInitialPlayerResponse/main.js";

import {t_json} from "@/shared/types.js";
import {scraping , types as t_scraping } from "@/shared/scraping/main.js";
import {regexp , type types as t_regexp } from "@/shared/regexp/main.js";
import { Page } from "puppeteer";
import { t_youtube_watch } from "./type.js";

export async function validateYtInitialPlayerResponseOfAddress(yt_address : t_youtube_watch ){
  console.log("ADDRESS ",yt_address )

  let page : Page = await scraping.getPageFromAddress(yt_address)

  const name_variable_toExtract = ytInitialPlayerResponse.name_variable;

  let json_matched : t_json = {} ;
  let error_stack = []
  let obj_stack = []

  const match_scripts = await scraping.getScriptsThatContainVarName(page , name_variable_toExtract)

  for (const match_script of match_scripts) {
    let res = await scraping.getNameAndValueOfVariableFromNode(page ,match_script,new scraping.ExtractedValue( name_variable_toExtract,/\{.+\}/))
    if(!regexp.isInvalidRegExpExecArray(res as any )){
      let {name , value } = res as Exclude<typeof res ,t_regexp.t_invalid_match>  ;
      if(!regexp.isInvalidGroupMatched(value)){
        json_matched= JSON.parse(value as Exclude<typeof value ,t_regexp.t_invalid_groupMatched>)
        try {
            ytInitialPlayerResponse_validators.YupVldSchOf_Response.validateSync({...json_matched})
            obj_stack.push(json_matched)
            break;
        } catch (err : unknown  ) {
          if(err instanceof ValidationError){
            error_stack.push(err)
            break;
          }
        }
      }
    }
  }
  return {obj_stack , error_stack}

}

