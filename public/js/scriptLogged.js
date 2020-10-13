$(() => {
    //let a = 0;
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        console.log(data.username);
        navbar.append(`
        <form class="form-inline my-2 my-lg-0" method="GET" action="/profile" style="margin-left: 360px ">
            <button type="submit" class="btn btn-outline-warning form-inline my-2 my-lg-0">${data.username}</button>
        `)
        addSingleManData();
    })
    let divAdd = $('#divAdd');

    function addSingleManData() {

    }
})