import puppeteer, { ElementHandle, Page } from "puppeteer";
import { regexp , type types as t_regexp } from "../regexp/main.js"
import {IExtractedValue} from "./types.js"

export async function getPageFromAddress (address : string) {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(address);
    return page ;
}


export class ExtractedValue implements IExtractedValue {
    name : string ;
    regex_value : RegExp ;
    constructor (name : string , regex_value : RegExp ) {
        this.name = name ;
        this.regex_value = regex_value ;
    }
    static idx_name_variable = 0;
    static idx_value_variable = 1;

    getMatchFromStrJsonContent (str_json_content : string  ) : t_regexp.t_match_regexExpExecArray {
        return (regexp.concatRegExp(ExtractedValue.getRegexThatMatchDeclarationStatement(this.name),regexp.embedInCapturingGroup(this.regex_value))).exec(str_json_content);
    }

    static getRegexThatMatchDeclarationStatement  (name_variable :string ) {
        return new RegExp(`(?:var|let|const)\\s+${regexp._embedInCapturingGroup(name_variable)}\\s+=\\s*`,"gm")
    }

}

export async function getScriptsThatContainVarName (page : Page  , name_variable_toExtract :string ) {
    return await page.$x(`//script[contains(., "${name_variable_toExtract}")]`)
}

export async function getInnerHtmlContentOfNode (page : Page , node : ElementHandle<any>) { //TODO : fix Node ElementHandle<Node> not recognized
    return await page.evaluate((el:any) => el.innerHTML,node);
}


export async function getNameAndValueOfVariableFromNode (page : Page , node : ElementHandle<any> , to_extracted_variable : ExtractedValue ) {
    let str_json_content = await getInnerHtmlContentOfNode(page, node)
    let matches_groups = to_extracted_variable.getMatchFromStrJsonContent(str_json_content)
    let [name_match , value_match] : t_regexp.t_groupMatched_regexExpExecArray[]= [regexp.getInvalidGroupMatched() , regexp.getInvalidGroupMatched() ]
    if(!regexp.isInvalidRegExpExecArray(matches_groups)){
        matches_groups = matches_groups as Exclude<t_regexp.t_match_regexExpExecArray , t_regexp.t_invalid_match>
        name_match = regexp.getMatchingGroupFromIdxAndRegexExecArray(matches_groups as RegExpExecArray ,ExtractedValue.idx_name_variable)
        value_match = regexp.getMatchingGroupFromIdxAndRegexExecArray(matches_groups as RegExpExecArray ,ExtractedValue.idx_value_variable)
    }
    return regexp.isInvalidGroupMatched(name_match ) ? regexp.getInvalidRegExpExecArray() : {name : name_match , value : value_match} ;
    
}