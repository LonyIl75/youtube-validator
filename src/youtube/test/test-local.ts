import {ytInitialData_test_local}  from "./ytInitialPlayerResponse/test-local.js"

let arr_prom : Promise<PromiseSettledResult<void>[]>[]= []
let curr_prom : Promise<PromiseSettledResult<void>[]> ;

curr_prom = ytInitialData_test_local()
arr_prom.push(curr_prom)

await Promise.allSettled(arr_prom)