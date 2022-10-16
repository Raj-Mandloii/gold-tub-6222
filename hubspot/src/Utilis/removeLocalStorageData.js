

const removeLocalStorageData=(key)=>{

    if(key){
        localStorage.removeItem(key)
    }

}

export {removeLocalStorageData}