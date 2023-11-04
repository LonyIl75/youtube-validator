import {miscTest} from './misc.js'

const yupTest = miscTest.TestYup

export type t_testStack = any[]

export type t_testStacks = {obj_stack:t_testStack,error_stack:t_testStack}

export const getEmptyStack = () :t_testStack=>[]

export const init_testStacks =() :t_testStacks=>{
    return {obj_stack:getEmptyStack(),error_stack:getEmptyStack()}
}

export const clean_testStacks = (res:t_testStacks)=>{
    res.obj_stack = getEmptyStack()
    res.error_stack = getEmptyStack()
}

export function print_testStacks(name_test :string , res:t_testStacks){
    for (const obj of res.obj_stack) {
        console.log(`${yupTest.getYupTestPassMessage(name_test,/*obj*/{})}`)
    }
    for (const err of res.error_stack) {
        console.log(`${yupTest.getYupTestFailErrorMessage(name_test,err)}`)
    }
}