// const { log } = require("console");

let droparea = document.getElementById("dropbox");
var form = document.getElementById("form");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
const host="https://filesharing-blgk.onrender.com"
const uploadURL=`${host}/test`
const FILE = document.getElementById("fileinput");
const UPLOAD = document.getElementById("button");
const SUBMIT = document.getElementById("submitfile");
const textvalue=document.querySelector("download");
const bgProgress=document.querySelector(".bgProgess");
const upload=document.querySelector(".upload");
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
function openNav() {
  document.getElementById("sidebar").style.transition = "0.5s";
  document.getElementById("sidebar").style.visibility = "visible";
  document.getElementById("sidebar").style.width = "20%";
}
droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("dragged");
  droparea.style.backgroundColor = "rgb(160, 254, 215)";
});
droparea.addEventListener("dragleave", (e) => {
  droparea.classList.remove("dragged");
  droparea.style.backgroundColor = "white";
});
droparea.addEventListener("drop", (e) => {
  e.preventDefault();
  droparea.classList.remove("dragged");
  droparea.style.backgroundColor = "white";
  const files = e.dataTransfer.files;
  if (files.length) {
    fileinput.files = files;
    uploadfiles();
  }
});

fileinput.addEventListener("change", () => {
  uploadfiles();
});
document.getElementById("button").addEventListener("click", (e) => {
  fileinput.click();
});
function uploadfiles() {
  var file = fileinput.files[0];
  var formData=new FormData(droparea);
  formData.append('myfile', JSON.stringify(file[0]));
 
  console.log(formData.entries());
  const xhr = new XMLHttpRequest;
  upload.style.visibility="visible";
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === xhr.DONE  && xhr.status==200) {
      console.log(xhr.response);
        }
  }
  xhr.upload.onprogress=updateProgress;
  xhr.open('POST', uploadURL, true);
  xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
  xhr.setRequestHeader("Access-Control-Allow-Methods", "*");
  console.log(formData.entries());
  xhr.send(formData);
};
// const showLink=({file:url})=>{
//   console.log(url);
//   textvalue.value=url
// }
function updateProgress(e){
  const percent=Math.round((e.loaded/e.total)*100);
  console.log(percent);
  bgProgress.style.width=`${percent}%`;
}
