const setLocalStorageData=(key,data)=>{

    if(key && data){

        localStorage.setItem(key,JSON.stringify(data))
        
    }
    
}

export {setLocalStorageData}