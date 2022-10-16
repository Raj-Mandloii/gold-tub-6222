const getLocalStorageData=(key)=>{

    if(key){

        const data=localStorage.getItem(key)
        return data

    }

}

export {getLocalStorageData}