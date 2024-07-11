function getData(dataId, getNextData){

    setTimeout(()=>{
        console.log("Data", dataId);
        if (getNextData){
            getNextData();
        }
    },4000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    });
});