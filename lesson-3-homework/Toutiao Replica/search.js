source_list = []
for (i of document.querySelector(".feed-list").querySelectorAll("div.no-mode, div.single-mode")){
    var title = i.querySelector("a")
    var footbar = i.querySelector(".footer-bar-left")
    source_list.push({
      type : i.className,
      title : title.innerText,
      title_link : title.href,
      footbar : footbar.innerText
    })
  
}

    // var time = i.querySelector("span")
    // switch(i.className){
    //   case "no-mode":
    //     source_list.push({
    //       "type" : "no",
    //       "title" : title.innerText,
    //       "title_link" : title.href,
    //       "tag_link" : footbar[0].href,
    //       "tag_link" : footbar[0].innerText,
    //       "avatar_link" : footbar[2].children[0].src,
    //       "author_link" : footbar[3].href,
    //       "author" : footbar[3].innerText,
    //       "comment_link" : footbar[4].href,
    //       "comment" : footbar[4].innerText,
    //       "rel_time" : time.innerText,
    //     })
    //     break
    //   case "single-mode":
    //     source_list.push({
    //       "type" : "single",
    //       "title" : title.innerText,
    //       "title_link" : title.href,
    //       "tag_link" : footbar[0].href,
    //       "tag_link" : footbar[0].innerText,
    //       "avatar_link" : footbar[2].children[0].src,
    //       "author_link" : footbar[3].href,
    //       "author" : footbar[3].innerText,
    //       "comment_link" : footbar[4].href,
    //       "comment" : footbar[4].innerText,
    //       "rel_time" : time.innerText,
    //     })
    //     break
    // }
}
