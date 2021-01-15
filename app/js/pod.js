function getPods(){
    var nsName = document.getElementById("namespaces").value;
    k8sApi.listNamespacedPod(nsName).then((res) => {
    res.body.items.forEach((value)=>{
        
        console.log("value===", value)
        let restartCount = 0
        value.status.containerStatuses.forEach((containerStatus)=>{
            restartCount += containerStatus.restartCount
        });
        
        console.log("Name=", value.metadata.name)
        console.log("Node=", value.spec.nodeName)
        console.log("restartCount=", restartCount)
    });
});
}