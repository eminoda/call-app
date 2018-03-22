# callApp

## what is callApp
call native app function,if err then use h5 function

## use
````
window.callApp('fooEventName',{data:123}).then(function(data){
    //native
}).catch(function(err){
    //some err,use h5 function
})
````

## maybe
include promise lib
implement native function
