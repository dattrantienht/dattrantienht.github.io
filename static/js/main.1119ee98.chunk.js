(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{34:function(e,t,s){},40:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(23),i=s.n(c),n=(s(34),s(5)),r=s(6),l=s(8),j=s(7),o=s(19),d=s(24),h=s(10),b=s.n(h),m=s(14),u=s(26),O=s(27),x=s(28),p=(s(40),s(18)),v=s(9),f=s.n(v),g=s(15),N=s(1),w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,t=this.props.data.description,s=this.props.data.social.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:e.url,children:Object(N.jsx)(g.a,{icon:[e.iconPack,e.icon]})})},e.name)}));return Object(N.jsxs)("header",{id:"home",children:[Object(N.jsx)(p.a,{className:"pbg-l",type:"cobweb",color:"#00C8FF",bg:!0}),Object(N.jsxs)("nav",{id:"nav-wrap",children:[Object(N.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(N.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(N.jsxs)("ul",{id:"nav",className:"nav",children:[Object(N.jsx)("li",{className:"current",children:Object(N.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(N.jsx)("div",{className:"row banner",children:Object(N.jsxs)("div",{className:"banner-text",children:[Object(N.jsx)(f.a,{bottom:!0,children:Object(N.jsx)("h1",{className:"responsive-headline",children:e})}),Object(N.jsx)(f.a,{bottom:!0,duration:1200,children:Object(N.jsxs)("h3",{children:[t,"."]})}),Object(N.jsx)("hr",{}),Object(N.jsx)(f.a,{children:Object(N.jsx)("ul",{className:"social",children:s})})]})}),Object(N.jsx)("p",{className:"scrolldown",children:Object(N.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(N.jsx)("img",{src:"images/scroll-icon.gif"})})})]})}}]),s}(a.Component),y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:e.url,children:Object(N.jsx)(g.a,{icon:[e.iconPack,e.icon]})})},e.name)}));return Object(N.jsx)("footer",{children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)(f.a,{bottom:!0,children:Object(N.jsxs)("div",{className:"twelve columns",children:[Object(N.jsx)("ul",{className:"social-links",children:e}),Object(N.jsxs)("ul",{className:"copyright",children:[Object(N.jsx)("li",{children:"\xa9 Copyright 2022 Tran Tien Dat"}),Object(N.jsxs)("li",{children:["Design by"," ",Object(N.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(N.jsx)("div",{id:"go-top",children:Object(N.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(N.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(N.jsx)("section",{id:"about",children:Object(N.jsx)(f.a,{duration:1e3,children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"three columns",children:Object(N.jsx)("img",{className:"profile-pic",src:t,alt:"Tran Tien Dat Profile Pic"})}),Object(N.jsxs)("div",{className:"nine columns main-col",children:[Object(N.jsx)("h2",{children:"About Me"}),Object(N.jsx)("p",{children:s}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"columns contact-details",children:[Object(N.jsx)("h2",{children:"Contact Details"}),Object(N.jsxs)("p",{className:"address",children:[Object(N.jsx)("span",{children:e}),Object(N.jsx)("br",{}),Object(N.jsxs)("span",{children:[a,Object(N.jsx)("br",{}),c," ",i,", ",n]}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{children:r}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{children:l})]})]}),Object(N.jsx)("div",{className:"columns download",children:Object(N.jsx)("p",{children:Object(N.jsxs)("a",{href:j,className:"button",children:[Object(N.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:e.school}),Object(N.jsxs)("p",{className:"info",children:[e.degree," ",Object(N.jsx)("span",{children:"\u2022"}),Object(N.jsx)("em",{className:"date",children:e.graduated})]}),Object(N.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:e.company}),Object(N.jsxs)("p",{className:"info",children:[e.title,Object(N.jsx)("span",{children:"\u2022"})," ",Object(N.jsx)("em",{className:"date",children:e.years})]}),Object(N.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(N.jsx)("em",{children:t.name})]},t.name)}));return Object(N.jsxs)("section",{id:"resume",children:[Object(N.jsx)(f.a,{left:!0,duration:1300,children:Object(N.jsxs)("div",{className:"row education",children:[Object(N.jsx)("div",{className:"three columns header-col",children:Object(N.jsx)("h1",{children:Object(N.jsx)("span",{children:"Education"})})}),Object(N.jsx)("div",{className:"nine columns main-col",children:Object(N.jsx)("div",{className:"row item",children:Object(N.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(N.jsx)(f.a,{left:!0,duration:1300,children:Object(N.jsxs)("div",{className:"row work",children:[Object(N.jsx)("div",{className:"three columns header-col",children:Object(N.jsx)("h1",{children:Object(N.jsx)("span",{children:"Work"})})}),Object(N.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(N.jsx)(f.a,{left:!0,duration:1300,children:Object(N.jsxs)("div",{className:"row skill",children:[Object(N.jsx)("div",{className:"three columns header-col",children:Object(N.jsx)("h1",{children:Object(N.jsx)("span",{children:"Skills"})})}),Object(N.jsxs)("div",{className:"nine columns main-col",children:[Object(N.jsx)("p",{children:t}),Object(N.jsx)("div",{className:"bars",children:Object(N.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),s}(a.Component),S=s(12),D=s(20),F=s(29);Object(D.b)("user_Bvg7bYvsJQJ6X7Xl2aeM9");var E=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={name:"",email:"",subject:"",message:"",allowSubmit:!1},a.handleChangeName=a.handleChangeName.bind(Object(S.a)(a)),a.handleChangeEmail=a.handleChangeEmail.bind(Object(S.a)(a)),a.handleChangeSubject=a.handleChangeSubject.bind(Object(S.a)(a)),a.handleChangeMessage=a.handleChangeMessage.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a.onSuccess=a.onSuccess.bind(Object(S.a)(a)),a.onExpired=a.onExpired.bind(Object(S.a)(a)),a}return Object(r.a)(s,[{key:"onSuccess",value:function(e){this.setState({allowSubmit:!0}),console.log(e,"<= your recaptcha token")}},{key:"onExpired",value:function(){this.setState({allowSubmit:!1}),console.log("Captcha expired")}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"eight columns",children:[Object(N.jsx)("form",{onSubmit:this.handleSubmit,id:"contactForm",name:"contactForm",children:Object(N.jsxs)("fieldset",{children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(N.jsx)("span",{className:"required",children:"*"})]}),Object(N.jsx)("input",{required:!0,type:"text",size:"35",id:"contactName",name:"contactName",value:this.state.name,onChange:this.handleChangeName})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(N.jsx)("span",{className:"required",children:"*"})]}),Object(N.jsx)("input",{required:!0,type:"text",size:"35",id:"contactEmail",name:"contactEmail",value:this.state.email,onChange:this.handleChangeEmail})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(N.jsx)("input",{type:"text",size:"35",id:"contactSubject",name:"contactSubject",value:this.state.subject,onChange:this.handleChangeSubject})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(N.jsx)("span",{className:"required",children:"*"})]}),Object(N.jsx)("textarea",{required:!0,cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",value:this.state.message,onChange:this.handleChangeMessage})]}),Object(N.jsx)("div",{id:"captcha-box",children:Object(N.jsx)(F.a,{theme:"dark",sitekey:"6LdoFUoeAAAAAFZoKYTK3GEf8onng0hPaA9cT0HF",onChange:this.onSuccess,onExpired:this.onExpired})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{className:"submit",type:"submit",children:"Submit"}),Object(N.jsx)("span",{id:"image-loader",children:Object(N.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(N.jsx)("div",{id:"message-warning",children:" error "}),Object(N.jsxs)("div",{id:"message-success",children:[Object(N.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(N.jsx)("br",{})]})]})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangeSubject",value:function(e){this.setState({subject:e.target.value})}},{key:"handleChangeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.allowSubmit){b()("#image-loader").fadeIn(),console.log("data: "+this.state.name+" "+this.state.email+" "+this.state.subject+" "+this.state.message);var t={name:this.state.name,email:this.state.email,subject:this.state.subject,message:this.state.message};D.a.send("default_service","template_xgr1csm",t).then((function(){b()("#image-loader").fadeOut(),b()("#message-warning").hide(),b()("#contactForm").fadeOut(),b()("#message-success").fadeIn()}),(function(e){b()("#image-loader").fadeOut(),b()("#message-warning").html(e),b()("#message-warning").fadeIn()}))}else alert("Please complete the captcha")}}]),s}(a.Component),A=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(N.jsxs)("section",{id:"contact",children:[Object(N.jsx)(v.Fade,{bottom:!0,duration:1e3,children:Object(N.jsxs)("div",{className:"row section-head",children:[Object(N.jsx)("div",{className:"two columns header-col",children:Object(N.jsxs)("h1",{children:[Object(N.jsx)(g.a,{id:"letter-icon",icon:["fas","envelope"],size:"5x"}),Object(N.jsx)("span",{children:"Get In Touch."})]})}),Object(N.jsx)("div",{className:"ten columns",children:Object(N.jsx)("p",{className:"lead",children:n})})]})}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)(v.Slide,{left:!0,duration:1e3,children:Object(N.jsx)(E,{})}),Object(N.jsx)(v.Slide,{right:!0,duration:1e3,children:Object(N.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(N.jsxs)("div",{className:"widget widget_contact",children:[Object(N.jsx)("h4",{children:"Address and Phone"}),Object(N.jsxs)("p",{className:"address",children:[e,Object(N.jsx)("br",{}),t," ",Object(N.jsx)("br",{}),s,", ",a," ",c,Object(N.jsx)("br",{}),Object(N.jsx)("span",{children:i})]})]}),Object(N.jsxs)("div",{className:"widget widget_tweets",children:[Object(N.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(N.jsxs)("ul",{id:"twitter",children:[Object(N.jsxs)("li",{children:[Object(N.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(N.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(N.jsx)("b",{children:Object(N.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(N.jsxs)("li",{children:[Object(N.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(N.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(N.jsx)("b",{children:Object(N.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}]),s}(a.Component),M=(a.Component,s(53),0),q=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(N.jsx)("div",{className:"columns portfolio-item",children:Object(N.jsx)("div",{className:"item-wrap",children:Object(N.jsxs)("a",{href:e.url,title:e.title,children:[Object(N.jsx)("img",{alt:e.title,src:t}),Object(N.jsx)("div",{className:"overlay",children:Object(N.jsxs)("div",{className:"portfolio-item-meta",children:[Object(N.jsx)("h5",{children:e.title}),Object(N.jsx)("p",{children:e.category})]})}),Object(N.jsx)("div",{className:"link-icon",children:Object(N.jsx)("i",{className:"fa fa-link"})})]})})},M++)}));return Object(N.jsx)("section",{id:"portfolio",children:Object(N.jsx)(f.a,{left:!0,duration:1e3,distance:"40px",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"twelve columns collapsed",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"Check Out Some of My Works."}),Object(N.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves cf",children:e})]})})})})}}]),s}(a.Component);m.b.add(u.a,O.a,x.a);var I=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(w,{data:this.state.resumeData.main}),Object(N.jsx)(C,{data:this.state.resumeData.main}),Object(N.jsx)(k,{data:this.state.resumeData.resume}),Object(N.jsx)(q,{data:this.state.resumeData.portfolio}),Object(N.jsx)(A,{data:this.state.resumeData.main}),Object(N.jsx)(y,{data:this.state.resumeData.main}),Object(N.jsx)(d.a,{g:2,num:1,life:.9,radius:5,color:"#00C8FF",cull:"col,image-wrapper"})]})}}]),s}(a.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};i.a.render(Object(N.jsx)(I,{}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.1119ee98.chunk.js.map