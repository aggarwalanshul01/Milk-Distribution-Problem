$(() => {
    //let a = 0;
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        console.log(data.username);
        navbar.append(`
        <form class="form-inline my-2 my-lg-0" method="GET" action="/profile" style="margin-left: 445px ">
            <button type="submit" class="btn btn-outline-warning form-inline my-2 my-lg-0">${data.username}</button>
        `)
        addSingleManData();
    })
    let divAdd = $('#divAdd');

    function addSingleManData() {
        $.get('/add/getAll', (data) => {
            let r = 1;
            for (let i of data) {

                if (r == 1) {
                    divAdd.prepend(`
                <button type="button" title="THIS IS YOUR PREVIOUS GRAPH" class="graph btn btn-outline-primary" value="${i.id}" style="padding: 20px;margin-left: 440px; width: 600px; display: block;">THIS IS YOUR ${r}th GRAPH </button>
            
            `);
                } else {
                    divAdd.prepend(`
                <button type="button" title="THIS IS YOUR PREVIOUS GRAPH" class="graph btn btn-outline-primary" value="${i.id}" style="padding: 20px;margin-left: 440px; width: 600px; display: block;">THIS IS YOUR ${r}th GRAPH </button>
            
            <br>`);
                }
                r += 1;
            }
            ifClicked();
        })
    }

    function ifClicked() {
        let graphh = $('.graph');
        graphh.click((event) => {
            $.post('/open', { id: graphh.val() }, (data) => {
                window.location.replace("/components/openGraph.html");
            });

        })
    }
})