var arrays = JSON.parse(localStorage.getItem("name")) || [];
function Sinup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let users = {
        email,
        password
    }

    window.localStorage.setItem("name", JSON.stringify(arrays));
    //  localStorage.getItem("name")
    // localStorage.clear("name");
    let isFound = true;
    for (let i = 0; i < arrays.length; i++) {
        if (email === arrays[i].email) {
            alert("User Exsit");
            isFound = false;
        }

    }
    if (isFound === true) {
        arrays.push(users);
        console.log(arrays);
        window.open("login.html");
    }
}

function loginfnc() {
    let LEmail = document.getElementById("LEmail").value;
    // let Lpassword=document.getElementById("Lpassword").value;
    isFound = true;
    for (let i = 0; i < arrays.length; i++) {
        if (LEmail == arrays[i].email) {
            window.open("page1.html");
            isFound = false;
        }
    }
    if (isFound = true) {
        alert("pleace sinup ")
    }
}


let blogesData = [];
function bloges() {
    let blognameinp = document.getElementById('blogTittle').value;
    let blogConentinp = document.getElementById('blogContent').value;
    let authorNameinp = document.getElementById('authorName').value;
    let file = document.getElementById("image").value;
    // image.setAttribute(`src.${url}`)
    form.style.display = "none";
    if (blognameinp == "") {
        return console.log("not value")
    }  


    let blogD = {
        blognameinp,
        blogConentinp,
        authorNameinp,
        file
    }
    console.log(blogD);
    window.localStorage.setItem("Blog", JSON.stringify(blogesData));
    blogesData.push(blogD)




    // Dom Section

    let mainPage = document.querySelector('.mainPage');
    let mainBox = document.createElement("div");
    mainBox.setAttribute('class', 'mainBox')
    mainPage.append(mainBox);

    // console.log(mainPage);


    // div 

    let div = document.createElement('div');
    div.setAttribute('class', 'blogTittle');
    mainBox.append(div);

    let blogdesc = document.createElement("div");
    // blogdesc.innerText = blogConentinp;
    blogdesc.setAttribute('class', 'decription');
    mainBox.append(blogdesc);

    let other = document.createElement("div");
    other.setAttribute('class', 'autherName');
    mainBox.append(other);

    let para1 = document.createElement("p");
    para1.innerText = blognameinp;
    div.append(para1);

    let para2 = document.createElement("p");
    para2.innerText = blogConentinp;
    blogdesc.append(para2);

    let para3 = document.createElement("p");
    para3.innerText = authorNameinp;
    other.append(para3);



    let icon1 = document.createElement("div");
    icon1.setAttribute('class', 'icon')
    div.append(icon1);

    icon1.addEventListener('click', function () {
        let changeBlog = prompt("ente the change value");
        para1.innerText = changeBlog;
    });






    let icon2 = document.createElement("div");
    icon2.setAttribute('class', 'icon');
    blogdesc.append(icon2);

    icon2.addEventListener('click', function () {
        let changeDesc = prompt("enter the change value");
        para2.innerText = changeDesc;
    });




    // console.log(other);


    let icon3 = document.createElement("div");
    icon3.setAttribute('class', 'icon');
    other.append(icon3);


    icon3.addEventListener('click', function () {
        let edit = prompt("enter the change value");
        para3.innerText = edit;
    })


    let image = document.createElement("img");
    image.style.height = "130px";
    image.style.width = "100%";
    image.setAttribute("src", `${file}`)
    mainBox.append(image)


    let like = document.createElement("div");
    like.setAttribute("class", "like")
    mainBox.append(like)

    let icon = document.createElement("div");
    icon.style.color=""
    icon.style.fontSize="30px"
    icon.innerHTML=`<i class="fa-solid fa-heart"></i>`
    like.append(icon);

    let btnBox = document.createElement("div");
    btnBox.setAttribute('class', 'btnBox');
    mainBox.append(btnBox);


    let Edit = document.createElement("button");
    Edit.innerText = "Edit All";
    Edit.setAttribute('class', 'editBtn');
    btnBox.append(Edit);

    Edit.addEventListener('click', function () {
        let change1 = prompt("Enter The blog Title");
        para1.innerText = change1;
        let change2 = prompt("Enter the description");
        para2.innerText = change2;
        let change3 = prompt("Enter the autherName");
        para3.innerText = change3;
    })


    let DeleteBtn = document.createElement("button");
    DeleteBtn.innerText = "Delete Blog"
    DeleteBtn.setAttribute('class', 'Dbtn')
    btnBox.append(DeleteBtn);

    DeleteBtn.addEventListener('click', function () {
        mainBox.remove()
    })
    window.localStorage.setItem("Blog", JSON.stringify(blogesData));
    blogesData.push(blogD)


}

// let Get=[]
function Viewblog(){
   let Blog=JSON.parse(localStorage.getItem("Blog"));
    console.log(Blog)
}
function panel() {
    let form = document.getElementById("form");
    form.style.display = "flex";
}

function blLogout() {

    window.open("login.html")
}