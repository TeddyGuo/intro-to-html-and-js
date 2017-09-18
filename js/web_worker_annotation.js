var array = [7, 8, 9, 0, 1, 2, 3];

function processArray(){
    for(var i = 0;i < array.length;i++){
        var result = handleData(arrayOfData[i]);
        postMessage(result);
    }
}

function handleData(data){
    var response = sendToRemoveServer(data);
    return response;
}

var worker = new Worker('web_worker.js'); //To create a new instance of a web worker, you simply need to use the following code in a JavaScript file referenced by your web application

worker.terminate(); //to stop the web worker

worker.onmessage = function(event){
    console.log(event.data);
} //The web worker can send messages back to the web page that is invoking the worker. Your page can listen to these messages by handling the onmessage event
