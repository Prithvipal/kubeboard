function getPods(){
    var nsName = document.getElementById("namespaces").value;
    k8sApi.listNamespacedPod(nsName).then((res) => {
    clearTable()
    res.body.items.forEach((pod, index)=>{
        console.log("value===", pod)
        insertRow(pod, index)
    });
});
}

function clearTable(){
    let podTable = document.getElementById("podtable")
    for(var i=podTable.rows.length-1; i>0; i--){
        podTable.deleteRow(i);
    }
    console.log(podTable.rows.length)
}
function insertRow(pod, index){
    let podTable = document.getElementById("podtable")
    let row = podTable.insertRow(index+1)
    let podNameCell =  row.insertCell(0)
    podNameCell.innerHTML = pod.metadata.name
    
    let nodeNameCell =  row.insertCell(1)
    nodeNameCell.innerHTML = pod.spec.nodeName

    let statusCell =  row.insertCell(2)
    statusCell.innerHTML = ""

    let restartCell =  row.insertCell(3)
    restartCell.innerHTML = getPodRestartCount(pod)

    let ageCell =  row.insertCell(4)
    ageCell.innerHTML = ""

    let actionCell =  row.insertCell(5)
    actionCell.innerHTML = ""
}



function getPodRestartCount(pod){
    let restartCount = 0
    pod.status.containerStatuses.forEach((containerStatus)=>{
        restartCount += containerStatus.restartCount
    });
    return restartCount;
}