$(document).ready(function(){
  var lang = "chn";
  if(lang == 'eng') {
    $(".chn").hide();
    $(".eng").show();
  } else {
    $(".eng").hide();
    $(".chn").show();
  }
  var persons = [{
    id: 1,
    name: 'Jade Hou',
    chnName: 'Jade Hou',
    job: 'Founder',
    chnJob: '创始人',
    text: 'Jade graduated from NYU and has degree in math. She worked for Goldman Sachs HK, in the department of trading and sales. After returning to China, she had the experience of founding JM Finance, a supply chain fintech company. She is currently in charge of research, product developing, and token economy design at BES. ',
    chnText: '毕业于纽约大学数学系，曾任职于高盛香港销售交易部，后回国创立企业服务及互联网金融公司芥末金融并任CEO。作为BES的项目发起人及CEO，目前负责行业研究，产品开发，经济机制及商业模式设计等。',
  },{
    id: 2,
    name: 'Sky He',
    chnName: 'Sky He',
    job: 'Co-Founder',
    chnJob: '创始人',
    text: 'Sky had a degree in engineering from Imperial College London. After graduation he founded Besound, a NLP smart hardware company at Shenzhen, before he co-founded token fund Spark Capital. He is experienced in cryptocurrency mining, investing and projects incubation. He is now leading technology, business development, community growth at BES. ',
    chnText: '毕业于帝国理工大学机械工程系，曾创立智能硬件品牌 BESOUND。他曾作为数字货币基金 Spark Capital 创始合伙人，投资了 Vechain 等多个明星项目，并在虚拟货币挖矿，投资和早期项目孵化方面都有很深的经验。目前负责BES项目的技术解决方案，商业化和社区增长等方面。',
  }];

  // 顶部导航
  $(".menu").on("click", function(e) {
    $(".daohang").fadeIn();
  })
  $(".hrefTo").on("click", function(e) {
    $(".daohang").hide();
    $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);
  })

  // 切换中英文
  $(".change").on("click", function() {
    if(lang == 'eng') {
      $(".eng").hide();
      $(".chn").show();
      lang = 'chn';
    } else {
      $(".chn").hide();
      $(".eng").show();
      lang = 'eng';
    }
  });

  // 箭头上下跳动
  setInterval("abc()", 1200);

  // 更多 按钮hover效果 鼠标进入
  $(".more").mouseenter(function(e) {
    $(e.currentTarget).css("color", "#ffffff");
    $(e.currentTarget).css("background", "#000000");

    var src1 = $($(e.currentTarget).find("img")).attr("src1");
    var src = $($(e.currentTarget).find("img")).attr("src");
    $($(e.currentTarget).find("img")).attr("src", src1);
    $($(e.currentTarget).find("img")).attr("src1", src);
  });

  // 更多 按钮hover效果 鼠标离开
  $(".more").mouseleave(function(e) {
    $(e.currentTarget).css("color", "#000000");
    $(e.currentTarget).css("background", "#ffffff");

    var src1 = $($(e.currentTarget).find("img")).attr("src1");
    var src = $($(e.currentTarget).find("img")).attr("src");
    $($(e.currentTarget).find("img")).attr("src", src1);
    $($(e.currentTarget).find("img")).attr("src1", src);
  });

  $(".close").click(function(){
    $(".man_desc").fadeOut();
  });

  // 人物簡介
  $(".headers img").hover(function(e) {
    var src1 = $(e.currentTarget).attr("src1");
    var src = $(e.currentTarget).attr("src");
    $(e.currentTarget).attr("src", src1);
    $(e.currentTarget).attr("src1", src);
  });
  $(".headers img").click(function(e) {
    var manId = $(e.currentTarget).attr("manId");
    var img = $(e.currentTarget).attr("src");
    for(var i=0; i<persons.length; i++) {
      if(manId == persons[i].id) {
        if(lang == "chn") {
          $(".man_desc .head img").attr('src', img);
          $(".man_desc .head .name").text(persons[i].chnName);
          $(".man_desc .head .job").text(persons[i].chnJob);
          $(".man_desc .head .desc").text(persons[i].chnText);
        } else {
          $(".man_desc .head img").attr('src', img);
          $(".man_desc .head .name").text(persons[i].name);
          $(".man_desc .head .job").text(persons[i].job);
          $(".man_desc .head .desc").text(persons[i].text);
        }
        $(".man_desc").fadeIn();
      }
    }
  });

  // 底部图标
  $(".contact .con").hover(function(e) {
    var src1 = $(e.currentTarget).attr("src1");
    var src = $(e.currentTarget).attr("src");
    $(e.currentTarget).attr("src", src1);
    $(e.currentTarget).attr("src1", src);
  });
});


function abc() {
  $('.down_wrap').animate({position: 'absolute', bottom:"-=10px"},300)
  .animate({position: 'absolute', bottom:"+=10px"},300)
  .animate({position: 'absolute', bottom:"-=10px"},300)
  .animate({position: 'absolute', bottom:"+=10px"},300)
}