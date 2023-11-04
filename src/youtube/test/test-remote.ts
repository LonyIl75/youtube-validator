import {ytInitialData_test_remote}  from "./ytInitialPlayerResponse/test-remote.js"

let arr_prom : Promise<PromiseSettledResult<void>[]>[]= []
let curr_prom : Promise<PromiseSettledResult<void>[]> ;

curr_prom = ytInitialData_test_remote()
arr_prom.push(curr_prom)

await Promise.allSettled(arr_prom)