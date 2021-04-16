source_list = []
for (i of document.querySelectorAll("section")){
    
    var imgs = []
    if (i.querySelector(".list_image") != null) imgs = Array.prototype.map.call(i.querySelectorAll("img"), (i => i.src))
    var content = {imgs : imgs}
    if (i.querySelector(".stick_label.space") != null) content.lab = i.querySelector(".stick_label.space").innerText
    if (i.querySelector(".dotdot.line3") != null) content.title = i.querySelector(".dotdot.line3").innerText
    if (i.querySelector(".src.space") != null) content.src = i.querySelector(".src.space").innerText
    if (i.querySelector(".cmt.space") != null) content.cmt = i.querySelector(".cmt.space").innerText
    if (i.querySelector(".time") != null) content.time = i.querySelector(".time").innerText
    source_list.push(
      content
    )
  
}