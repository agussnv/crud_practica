async function createReq() {
  const r1 = new Requester();
  try {
    await accionAsincrona();
    const req = await r1.request("https://jsonplaceholder.typicode.com/todos");
    const tableBody = document.getElementById("tableBody");
    req.forEach((book) => {
      const r = document.createElement("tr");
      const c1 = document.createElement("td");
      const c2 = document.createElement("td");
      const c3 = document.createElement("td");
      const c4 = document.createElement("td");
      c1.innerHTML = book.id;
      c2.innerHTML = book.userId;
      c3.innerHTML = book.title;
      if (book.completed) {
        c4.style.backgroundColor = "lightgreen";
      } else {
        c4.style.backgroundColor = "red";
      }
      c1.style.backgroundColor = c4.style.backgroundColor;
      c2.style.backgroundColor = c4.style.backgroundColor;
      c3.style.backgroundColor = c4.style.backgroundColor;
      c2.onclick = () => {
        let iduser = prompt("id usuario?");
        c2.innerHTML = iduser;
        book.userId = iduser;
        console.log(book);
      };
      c3.onclick = () => {
        let titlenew = prompt("titulo:");
        c3.innerHTML = titlenew;
        book.title = titlenew;
        console.log(book);
      };
      c4.onclick = () => {
        if (book.completed) {
          c4.style.backgroundColor = "red";
        } else {
          c4.style.backgroundColor = "lightgreen";
        }
        c1.style.backgroundColor = c4.style.backgroundColor;
        c2.style.backgroundColor = c4.style.backgroundColor;
        c3.style.backgroundColor = c4.style.backgroundColor;
        book.completed = !book.completed;
        console.log(book);
      };
      
      r.appendChild(c1);
      r.appendChild(c2);
      r.appendChild(c3);
      r.appendChild(c4);
      document.getElementById("loading").style.display="none";
      tableBody.appendChild(r);
    });
  } catch (error) {
    alert(error);
  }
}

const accionAsincrona = async () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, 1000);
});   
}