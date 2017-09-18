function makeRequest(){
    /*$.ajax({
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json'
    })
    .done(function(response){
        $('body > p').text(
            JSON.stringify(response)
        );
    })
    .fail(function(){
        alert('An error has occured');
    });*/
    $.get({
        url: 'http://httpbin.org/user-agent',
        dataType: 'json'
    })
    .done( function (response) {
        alert(JSON.stringify(response));
        $('body > p').text(
            response['user-agent']
        );
    });
}
$(document).ready(function(){
    makeRequest();
});