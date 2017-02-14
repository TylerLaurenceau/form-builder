function gather(callback){
    $.ajax({
    url: `http://json-data.herokuapp.com/forms/`,
    dataType: "json",
    success: callback
  })
}
function getInfo(data) {
  console.log(data)
  for (i=0; i < data.length; i++){
    if (data[i].type === "text" || data[i].type === "email" || data[i].type === "tel"){
$(".content").append(`<div><i class = "fa ${data[i].icon}"></i>
<input type= text "${data[i].label}" placeholder = "${data[i].label}" size = "65"></div>`)
}
  else if (data[i].type === "select"){
    $(".content").append(`<div><select>
      <option value = "Select Language...">Select Language...</option>
      <option value = "English">English</option>"
      <option value = "Spanish">Spanish</option>"
      <option value = "French">French</option>"
      <option value = "Japanese">Japanese</option>"</div>`)
      }
      else if (data[i].type === "textarea"){
        $(".content").append(`<div><i class = "fa ${data[i].icon}"></i>
        <textarea placeholder="Your comment" rows="4" cols="64"></textarea></div>`)
      }
    }
  }

gather(getInfo)
