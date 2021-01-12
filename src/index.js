import React from 'react'
import ReactDOM from 'react-dom'
//import k8s from  '@kubernetes/client-node'
const k8s = require('@kubernetes/client-node');

class App extends React.Component{
    render(){
       const kc = new k8s.KubeConfig();
        kc.loadFromDefault();
       const k8sApi = kc.makeApiClient(k8s.CoreV1Api)
        k8sApi.listNamespacedPod('default').then((res) => {
            console.log(res.body);
        });
        return <div>dasfasdf</div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))