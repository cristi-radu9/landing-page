(this["webpackJsonplanding-pange"]=this["webpackJsonplanding-pange"]||[]).push([[0],{34:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i.n(c),s=i(25),r=i.n(s),n=(i(54),i(48)),l=(i(34),i(8)),o=i(9),d=i(11),h=i(10),j=(i(55),i(1)),b=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={},c}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.showNav,i=e.setShowNav;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"overlay overlay-slide-".concat(t?"right":"left"),children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"slide-".concat(t?"in":"out","-1"),onClick:function(){return i(!t)},children:Object(j.jsx)("a",{href:"#home",children:"Home"})}),Object(j.jsx)("li",{className:"slide-".concat(t?"in":"out","-2"),onClick:function(){return i(!t)},children:Object(j.jsx)("a",{href:"#about",children:"About"})}),Object(j.jsx)("li",{className:"slide-".concat(t?"in":"out","-3"),onClick:function(){return i(!t)},children:Object(j.jsx)("a",{href:"#resume",children:"Resume"})}),Object(j.jsx)("li",{className:"slide-".concat(t?"in":"out","-4"),onClick:function(){return i(!t)},children:Object(j.jsx)("a",{href:"#projects",children:"Projects"})}),Object(j.jsx)("li",{className:"slide-".concat(t?"in":"out","-5"),onClick:function(){return i(!t)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})})})}}]),i}(c.Component),u=(i(57),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={name:"CR Resume",description:"I am web developer and I use React and .Net to develop pages"},c}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state,t=e.name,i=e.description;return Object(j.jsx)("section",{id:"home",children:Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsxs)("h3",{children:[i,"."]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{className:"social",children:[Object(j.jsxs)("a",{href:"https://github.com/cristi-radu9/landing-page",target:"_blank",className:"button btn project-btn",children:[Object(j.jsx)("i",{className:"fa fa-book"})," Project"]}),Object(j.jsxs)("a",{href:"https://github.com/cristi-radu9?tab=repositories",target:"_blank",className:"button btn github-btn",children:[Object(j.jsx)("i",{className:"fab fa-github"})," Github"]})]})]})})})}}]),i}(c.Component));i(58);var p=function(e){var t=e.showNav,i=e.setShowNav;return Object(j.jsxs)("div",{className:"menu-bars ".concat(t?"change":""),onClick:function(){return i(!t)},children:[Object(j.jsx)("div",{className:"bar1"}),Object(j.jsx)("div",{className:"bar2"}),Object(j.jsx)("div",{className:"bar3"})]})},m=i.p+"static/media/profile.db897b11.jpg",g=(i(59),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={name:"Radu Cristian-Marian",city:"Bucharest",country:"Romania",mail:"cristiradu1605@yahoo.com"},c}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state,t=e.name,i=e.city,c=e.country,a=e.mail;return Object(j.jsx)("section",{id:"about",className:"h-100-responsive",children:Object(j.jsxs)("div",{className:"row about-responsive",children:[Object(j.jsx)("div",{className:"profile-image",children:Object(j.jsx)("img",{src:m,alt:"Profile Pic",className:"profileImage"})}),Object(j.jsxs)("div",{className:"two-columns",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsx)("p",{children:"I'm a junior developer graduated of computer science with experience working across the full-stack of software development. I have built 20+ personal projects on different technologies and i'm planning to work on a lot more continuously developing my skills and learning new things. I'm an positive person full of energy and fun, who never gets tired."}),Object(j.jsxs)("div",{className:"row about-responsive",children:[Object(j.jsxs)("div",{className:"column about-responsive",children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("p",{className:"column about-responsive",children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)("span",{children:i}),Object(j.jsx)("span",{children:c}),Object(j.jsx)("span",{children:a})]})]}),Object(j.jsx)("div",{className:"download about-responsive",children:Object(j.jsx)("p",{children:Object(j.jsxs)("a",{href:"",className:"button",download:"Radu_Cristian-Marian_CV.pdf",children:[Object(j.jsx)("i",{className:"fa fa-download"})," Download Resume"]})})})]})]})]})})}}]),i}(c.Component)),x=(i(60),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={},c}return Object(o.a)(i,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"resume",className:"column h-100",children:[Object(j.jsxs)("div",{className:"row education-container column-responsive",children:[Object(j.jsxs)("div",{className:"resume-header column-responsive",children:[Object(j.jsx)("h1",{className:"m-0",children:"Education"}),Object(j.jsx)("div",{className:"bar"})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"mt15",children:[Object(j.jsx)("h1",{className:"m-0",children:"Bucharest University of Economic Studies"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{children:"Bachelor degree"}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"2020"})})]}),Object(j.jsx)("p",{className:"f15",children:"I've studied Economic Informatics the english program at Faculty of Cybernetics, Statistics and Informatics"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"m-0",children:"Bucharest University of Economic Studies"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{children:"Master"}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"Present"})})]}),Object(j.jsx)("p",{className:"f15",children:"I'm studying IT&C security master - cyber security master."})]})]})]}),Object(j.jsx)("div",{className:"dividing-bar"}),Object(j.jsxs)("div",{className:"row column-responsive",children:[Object(j.jsxs)("div",{className:"resume-header",children:[Object(j.jsx)("h1",{className:"m-0",children:"Work"}),Object(j.jsx)("div",{className:"bar work-bar"})]}),Object(j.jsx)("div",{className:"info",children:Object(j.jsxs)("div",{className:"mt15",children:[Object(j.jsx)("h1",{className:"m-0",children:"Softbinator Technologies"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"2020 - Present"})})}),Object(j.jsx)("p",{className:"f15",children:" Junior .Net developer, also doing front-end in React."})]})})]}),Object(j.jsx)("div",{className:"dividing-bar"}),Object(j.jsxs)("div",{className:"row column-responsive",children:[Object(j.jsxs)("div",{className:"resume-header",children:[Object(j.jsx)("h1",{className:"m-0",children:"Skills"}),Object(j.jsx)("div",{className:"bar skills-bar"})]}),Object(j.jsx)("div",{className:"info",children:Object(j.jsx)("div",{className:"mt15",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"C#"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"80%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"React"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"65%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"JavaScript"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"70%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"CSS"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"50%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"C++"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"40%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Java"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"45%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"C"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"30%",backgroundColor:this.getRandomColor()}})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Python"}),Object(j.jsx)("div",{className:"bar-expand",children:Object(j.jsx)("div",{style:{height:"42px",width:"20%",backgroundColor:this.getRandomColor()}})})]})]})})})]})]})}}]),i}(c.Component)),O=i(73),v=(i(61),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={},c}return Object(o.a)(i,[{key:"render",value:function(){return console.log(this.props.liveDisabled),Object(j.jsxs)("div",{className:"project",children:[Object(j.jsx)("h2",{className:"projectLabel",children:this.props.project.label}),Object(j.jsx)("img",{className:"projectImage",src:this.props.project.image,alt:this.props.project.label,width:"100%",height:"170px"}),Object(j.jsx)("a",{className:"projectInfo",href:this.props.project.git,target:"_blank",rel:"noopener noreferrer",children:"Git Project"}),Object(j.jsx)("button",{className:"projectButton",disabled:this.props.project.liveDisabled,children:Object(j.jsx)("a",{href:this.props.project.live,target:"_blank",rel:"noopener noreferrer",style:{color:"white",width:"100%"},className:this.props.project.liveDisabled?"isDisabled":"",children:"Live here"})})]})}}]),i}(c.Component)),f="data:image/jpeg;base64,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",N=[{label:"Animated Template",image:i.p+"static/media/animated-template.d724df07.JPG",live:"https://cristi-radu9.github.io/animated-template/",git:"https://github.com/cristi-radu9/animated-template",type:"JavaScript"},{label:"Book Keeper",image:i.p+"static/media/book-keeper.72e9209d.JPG",live:"https://cristi-radu9.github.io/book-keeper/",git:"https://github.com/cristi-radu9/book-keeper",type:"JavaScript"},{label:"Bro Science",image:i.p+"static/media/bro-science.7dd8207b.JPG",liveDisabled:!0,git:"https://github.com/cristi-radu9/bro-science",type:"JavaScript"},{label:"Calculator",image:i.p+"static/media/calculator.a7e5125c.JPG",live:"https://cristi-radu9.github.io/calculator/",git:"https://github.com/cristi-radu9/calculator",type:"JavaScript"},{label:"Custom Countdown",image:i.p+"static/media/custom-countdown.3941c583.JPG",live:"https://cristi-radu9.github.io/custom-countdown/",git:"https://github.com/cristi-radu9/custom-countdown",type:"JavaScript"},{label:"Face Detection",image:i.p+"static/media/face-detection.ae56dabd.JPG",live:"https://cristi-radu9.github.io/face-detection/",git:"https://github.com/cristi-radu9/face-detection",type:"JavaScript"},{label:"Flight Book App",image:i.p+"static/media/flight-book-app.d2141c58.JPG",liveDisabled:!0,git:"https://github.com/cristi-radu9/flight-booking-app",type:"C#"},{label:"Form Validation",image:i.p+"static/media/form-validation.be916a4f.JPG",live:"https://cristi-radu9.github.io/form-validations/",git:"https://github.com/cristi-radu9/form-validations",type:"JavaScript"},{label:"Infinite Scroll",image:i.p+"static/media/infinite-scroll.c9ef48d9.JPG",live:"https://cristi-radu9.github.io/infinite-scroll/",git:"https://github.com/cristi-radu9/infinite-scroll",type:"JavaScript"},{label:"Jira Board",image:i.p+"static/media/jira-board.aa440510.JPG",live:"https://cristi-radu9.github.io/project-management/",git:"https://github.com/cristi-radu9/project-management",type:"JavaScript"},{label:"Joke Teller",image:i.p+"static/media/joke-teller.87598232.JPG",live:"https://cristi-radu9.github.io/joke-teller/",git:"https://github.com/cristi-radu9/joke-teller",type:"JavaScript"},{label:"Light-Dark Mode",image:i.p+"static/media/light-dark-mode.11b2319a.JPG",live:"https://cristi-radu9.github.io/light-datk-mode/",git:"https://github.com/cristi-radu9/light-datk-mode",type:"JavaScript"},{label:"Marh Sprint Game",image:i.p+"static/media/math-sprint-game.552336c6.JPG",live:"https://cristi-radu9.github.io/math-sprint-game/",git:"https://github.com/cristi-radu9/math-sprint-game",type:"JavaScript"},{label:"Music Player",image:i.p+"static/media/music-player.864dced2.JPG",live:"https://cristi-radu9.github.io/music-player/",git:"https://github.com/cristi-radu9/music-player",type:"JavaScript"},{label:"Nasa Api",image:i.p+"static/media/nasa-api.b05a6b51.JPG",live:"https://cristi-radu9.github.io/nasa-api/",git:"https://github.com/cristi-radu9/nasa-api",type:"JavaScript"},{label:"Navigation Nation",image:i.p+"static/media/navigation-nation.fc0f990d.JPG",live:"https://cristi-radu9.github.io/navigation/",git:"https://github.com/cristi-radu9/navigation",type:"JavaScript"},{label:"Pain Clone",image:i.p+"static/media/paint-clone.5e540963.JPG",live:"https://cristi-radu9.github.io/paint-clone/",git:"https://github.com/cristi-radu9/paint-clone",type:"JavaScript"},{label:"Picture In Picture",image:i.p+"static/media/picture-in-picture.4a5214c3.JPG",live:" https://cristi-radu9.github.io/picture-in-picture/",git:"https://github.com/cristi-radu9/picture-in-picture",type:"JavaScript"},{label:"Pong",image:i.p+"static/media/pong.82b84051.JPG",live:"https://cristi-radu9.github.io/ping-pong/",git:"https://github.com/cristi-radu9/ping-pong",type:"JavaScript"},{label:"QuoteGenerator",image:i.p+"static/media/quote-generator.fbf78a9d.JPG",live:"https://cristi-radu9.github.io/quote-generator/",git:"https://github.com/cristi-radu9/quote-generator",type:"JavaScript"},{label:"Rock Paper Scissors",image:i.p+"static/media/rock-paper-scissors.d2ea2591.JPG",live:"https://cristi-radu9.github.io/rock-scissors-paper/",git:"https://github.com/cristi-radu9/rock-scissors-paper",type:"JavaScript"},{label:"Splash Page",image:i.p+"static/media/splash-page.9a9ced38.JPG",live:"https://cristi-radu9.github.io/splash-page/",git:"https://github.com/cristi-radu9/splash-page",type:"JavaScript"},{label:"Video Player",image:i.p+"static/media/VideoPlayer.5a6a7368.JPG",live:"https://cristi-radu9.github.io/video-player/",git:"https://github.com/cristi-radu9/video-player",type:"JavaScript"},{label:"Android Nutrition App",image:f,liveDisabled:!0,git:"https://github.com/cristi-radu9/android-project",type:"Other"},{label:"Offline Antivirus",image:f,liveDisabled:!0,git:"https://github.com/cristi-radu9/offline-antivirus",type:"Other"},{label:"PRNG - A5 LFSR",image:f,liveDisabled:!0,git:"https://github.com/cristi-radu9/PRNG-A5-LFSR",type:"Other"}],J=(i(62),i(63),i(28)),y=O.a.Panel,S=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={},c}return Object(o.a)(i,[{key:"onChange",value:function(e,t,i){console.log(e,t,i)}},{key:"render",value:function(){var e=[{width:1,itemsToShow:1,itemsToScroll:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3,itemsToScroll:3},{width:1200,itemsToShow:4,itemsToScroll:4}];return Object(j.jsxs)("section",{id:"projects",className:"h-100 column",children:[Object(j.jsx)("h1",{className:"project-header",children:"My Projects"}),Object(j.jsxs)(O.a,{className:"collapse",destroyInactivePanel:!0,expandIconPosition:"left",defaultActiveKey:["1"],children:[Object(j.jsx)(y,{className:"collapse",header:"Java Script/React Projects",children:Object(j.jsx)(J.a,{touchMove:!0,enableSwipe:!0,breakPoints:e,disableArrowsOnEnd:!0,easing:"ease",transitionMs:"2000",children:N!==[]&&N.map((function(e){if("JavaScript"===e.type)return Object(j.jsx)(v,{project:e},e.label)}))})},"1"),Object(j.jsx)(y,{className:"collapse",header:"C#/.Net Projects",children:Object(j.jsx)(J.a,{enableAutoPlay:!0,touchMove:!0,autoPlaySpeed:2500,enableSwipe:!0,breakPoints:e,children:N!==[]&&N.map((function(e){if("C#"===e.type)return Object(j.jsx)(v,{project:e},e.label)}))})},"2"),Object(j.jsx)(y,{className:"collapse",header:"Other Projects",children:Object(j.jsx)(J.a,{enableAutoPlay:!0,touchMove:!0,autoPlaySpeed:2500,enableSwipe:!0,breakPoints:e,children:N.map((function(e){if("Other"===e.type)return Object(j.jsx)(v,{project:e},e.label)}))})},"3")]})]})}}]),i}(c.Component),k=(i(69),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={},c}return Object(o.a)(i,[{key:"render",value:function(){return Object(j.jsx)("section",{id:"contact",className:"h-100",children:Object(j.jsxs)("div",{className:"contact-container",children:[Object(j.jsxs)("div",{className:"row contact-header w-100",children:[Object(j.jsx)("i",{class:"fas fa-envelope-open-text icon"}),Object(j.jsx)("h1",{children:"Send me an email!"})]}),Object(j.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Contact Info:"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(j.jsx)("span",{className:"required",children:"*"})]}),Object(j.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(j.jsx)("span",{className:"required",children:"*"})]}),Object(j.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(j.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(j.jsx)("span",{className:"required",children:"*"})]}),Object(j.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"submit",onClick:function(e){e.preventDefault(),alert("Not available yet!")},children:"Submit"})})]})})]})})}}]),i}(c.Component));var P=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(p,{showNav:i,setShowNav:a}),Object(j.jsx)(b,{showNav:i,setShowNav:a}),Object(j.jsx)(u,{}),Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(S,{}),Object(j.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,74)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),C()}},[[70,1,2]]]);
//# sourceMappingURL=main.972aada5.chunk.js.map