const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
// console.log("dfsdfdaafasdfasdfasdf")
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

function getNamespaces(){
    k8sApi.listNamespace().then((res) => {
    let nsSelect = document.getElementById("namespaces")
    res.body.items.forEach((value)=>{
        var option = document.createElement("option");
        option.text = value.metadata.name;
        option.value = value.metadata.name;
        nsSelect.add(option);
    });
    getPods()
});
}