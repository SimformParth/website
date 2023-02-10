const search = () => {
    let filter = document.getElementById('myinput').value;

    let table = document.getElementById('mytable');

    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const tdName = tr[i].getElementsByTagName('td')[1];
        const tdId = tr[i].getElementsByTagName('td')[0];
        const tdDegree = tr[i].getElementsByTagName('td')[2];
        if (tdId.textContent == filter || tdName.textContent.indexOf(filter) > -1 || tdDegree.textContent.indexOf(filter) > -1) {
            tr[i].style.display = "";

        } else {
            tr[i].style.display = "none";
        }

    }


} 