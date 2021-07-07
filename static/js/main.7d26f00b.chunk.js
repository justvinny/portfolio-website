(this["webpackJsonpportoflio-website-react"]=this["webpackJsonpportoflio-website-react"]||[]).push([[0],{73:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(12),r=a.n(n),o=(a(73),a(62)),s=a(9),c=a(107),l=a(109),d=a(113),m=a(123),g=a(87),h=a(114),j=a(115),p=a(61),b=a.n(p),u=a(122),f=a(110),x=a(111),O=a(112),w=a(89),v=a(108),y=a(2),k=function(){var e=Object(c.a)({imageContainer:{flex:1,display:"flex",flexDirection:"row"},imageLink:{height:32,width:32}})();return Object(y.jsx)("div",{className:e.imageContainer,children:[{name:"Github",link:"https://github.com/justvinny",image:"/images/GitHub-Mark-32px.png",imageAlt:"Github Logo"},{name:"Instagram",link:"https://www.instagram.com/vinson.beduya/",image:"/images/Instagram_AppIcon_Aug2017.png",imageAlt:"Instagram Logo"},{name:"LinkedIn",link:"https://www.linkedin.com/in/vinson-beduya/",image:"/images/LI-In-Bug.png",imageAlt:"LinkedIn Logo"}].map((function(t){return Object(y.jsx)(v.a,{href:t.link,target:"_blank",rel:"noopener",children:Object(y.jsx)(l.a,{children:Object(y.jsx)("img",{className:e.imageLink,src:t.image,alt:t.imageAlt})})},t.name)}))})},I=function(){var e=Object(w.a)({socials:{display:"flex",flexDirection:"column",alignItems:"center"},boldText:{fontWeight:"900"}})();return Object(y.jsxs)("div",{className:e.socials,children:[Object(y.jsx)(g.a,{className:e.boldText,children:"SOCIALS"}),Object(y.jsx)(k,{})]})},N=a(18),S=a(46),D=function(e){var t=e.showDrawer,a=e.toggleDrawer,i=Object(c.a)({list:{width:250},listItem:{marginLeft:10},listItemSocials:{textAlign:"center"},topMargin:{marginTop:10}})();return Object(y.jsx)(u.a,{anchor:"right",open:t,onClose:a,children:Object(y.jsxs)(f.a,{className:i.list,children:[Object(y.jsx)(x.a,{className:i.marginTop}),Object(y.jsx)(O.a,{button:!0,onClick:a,children:Object(y.jsx)(N.b,{to:"/",className:"DrawerLink",children:"Home"})}),Object(y.jsx)(O.a,{button:!0,onClick:a,children:Object(y.jsx)(N.b,{to:"/projects",className:"DrawerLink",children:"Projects"})}),Object(y.jsx)(O.a,{button:!0,onClick:a,children:Object(y.jsx)(S.a,{to:"#Footer",className:"DrawerLink",children:"Contact Me"})}),Object(y.jsx)(x.a,{}),Object(y.jsx)(I,{})]})})},L=function(e){var t=e.responsiveMenuQuery,a=e.responsiveHeaderQuery,n=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",flexDirection:"row-reverse"},headerName:Object(s.a)({fontFamily:"Impact",letterSpacing:2},e.breakpoints.up("xl"),{fontSize:"1.5vw",fontWeight:900}),appBar:{backgroundColor:"#1e1f22",position:"sticky"},menuText:Object(s.a)({},e.breakpoints.up("xl"),{fontSize:".8vw",fontWeight:"bold"})}}))(),r=Object(i.useState)(!1),p=Object(o.a)(r,2),u=p[0],f=p[1],x=function(){return f(!u)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(h.a,{position:"sticky",className:n.appBar,children:Object(y.jsxs)(j.a,{className:n.root,children:[function(){var e=function(){return Object(y.jsx)(l.a,{color:"inherit",onClick:x,children:Object(y.jsx)(b.a,{})})};return t?Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",className:n.menuText,children:Object(y.jsx)(N.b,{to:"/",className:"MenuItem",children:"Home"})})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",className:n.menuText,children:Object(y.jsx)(N.b,{to:"/projects",className:"MenuItem",children:"Projects"})})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",className:n.menuText,children:Object(y.jsx)(S.a,{to:"#Footer",className:"MenuItem",children:"Contact Me"})})}),e()]}):e()}(),a?Object(y.jsx)(g.a,{variant:"h4",className:n.headerName,children:"PORTFOLIO"}):Object(y.jsx)(g.a,{variant:"h5",className:n.headerName,children:"PORTFOLIO"})]})}),Object(y.jsx)(D,{showDrawer:u,toggleDrawer:x})]})},T=a(118),C=a(119),A=a(120),R=a(121),M=a(116),P=a(124),B=a(117),G=function(e){var t=e.projects,a=Object(c.a)((function(e){var t,a,i;return{featured:(t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:10,marginLeft:10,marginRight:10},Object(s.a)(t,e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),Object(s.a)(t,e.breakpoints.up("lg"),{flexDirection:"row"}),t),featuredAlt:(a={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:10,marginLeft:10,marginRight:10},Object(s.a)(a,e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),Object(s.a)(a,e.breakpoints.up("lg"),{flexDirection:"row-reverse"}),a),featuredBody:Object(s.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),cardImg:(i={margin:0,padding:0},Object(s.a)(i,e.breakpoints.up("md"),{marginLeft:10,marginRight:10}),Object(s.a)(i,e.breakpoints.up("lg"),{width:450}),Object(s.a)(i,e.breakpoints.up("xl"),{width:"35vw"}),i),bodyText:Object(s.a)({},e.breakpoints.up("xl"),{fontSize:"1vw"}),boldText:Object(s.a)({},e.breakpoints.up("xl"),{fontWeight:900})}}))(),i=!1;return t.map((function(e){return i=!i,Object(y.jsxs)(M.a,{className:"".concat(i?a.featured:a.featuredAlt," landscapeView"),elevation:5,children:[Object(y.jsx)(B.a,{component:"img",image:e.image,alt:e.imageAlt,className:a.cardImg}),Object(y.jsxs)("div",{className:a.featuredBody,children:[Object(y.jsx)(g.a,{variant:"h6",className:"".concat(a.bodyText," ").concat(a.boldText),children:e.title}),Object(y.jsx)(g.a,{variant:"body2",className:a.bodyText,children:Object(y.jsx)(v.a,{href:e.link,target:"_blank",rel:"noopener",children:"Github Source Code"})}),Object(y.jsx)(g.a,{variant:"body2",paragraph:!0,className:a.bodyText,children:e.shortDescription}),Object(y.jsx)("ul",{children:e.detailedDescription.map((function(e){return Object(y.jsx)("li",{children:Object(y.jsx)(g.a,{variant:"body2",className:a.bodyText,children:e})},e)}))})]})]},e.title)}))},F=[{isFeatured:!1,title:"This Website",image:"images/website-screen.JPG",iamgeAlt:"Screenshot of this portfolio website.",link:"https://github.com/justvinny/justvinny.github.io",shortDescription:"Simple SPA portfolio website that uses HTML, CSS, Javascript, React, React Router, Material UI, and GitHub Pages.",detailedDescription:["HTML content is dynamically added through Javascript React.","CSS and JSS through Material UI. Most of the layouts are handled using CSS Flexbox.","Material UI is used for most of the components such as App Bar, Navigation Drawer, Card Layouts, Avatars, etc.","Menu navigation uses React Router so user won't have to load new pages from scratch.","Site is built mobile first but is responsive to larger screens such as Tablets and Desktops.","Site is hosted on Github pages."]},{isFeatured:!0,title:"Basic 2D RPG Game",image:"images/rpg-project-image.JPG",iamgeAlt:"RPG Game Screenshot with character and golem sprite.",link:"https://github.com/justvinny/rpg-game-pdc",shortDescription:"Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and Construction Paper.",detailedDescription:["Simple map exploration with a 2D animated character","Classic turn based combat reminescent of old school J-RPGs.","Random monster encounters.","Treasure hunting.","Challenging(?) boss battle.","Inventory system where you can equip your character with items to make it stronger or heal up with","Event log for player interactions with different game objects such as treasures, battles, and bosses.","Map generated from ASCII text.","Camera view that centers on player."]},{isFeatured:!0,title:"Password Manager (Android)",image:"images/password-manager-screens-p1.png",iamgeAlt:"Password Manager Android Application Screenshot",link:"https://github.com/justvinny/pass-vault-java-android",shortDescription:"Native android password manager application to manage all my passwords. No more getting locked out by Study Link!",detailedDescription:["Store accounts to persistent storage.","View accounts stored and copy password to clipboard.","Delete accounts from persistent storage.","Random password generator.","Username search feature.","Account sorting feature.","Import/Export CSV feature.","Create passcode and login feature using SharedPreferences."]},{isFeatured:!1,title:"Life Manager",image:"images/life-manager-screen.PNG",iamgeAlt:"Life Manager Application Screenshot",link:"https://github.com/justvinny/life-manager-app/tree/main",shortDescription:"Journal entry and weekly scheduler Desktop application made in Java and Swing where you can either write about your day or schedule events that will happen for that week. This application was made for a School Project where we were free to write any program we wish as long as we demonstrate our knowledge of OOP and core Java.",detailedDescription:["Write journal entries about your day and store them permanently to local storage.","Add events to your weekly scheduler so you can priorities things you should do in a week.","Various sortings option availalbe for the weekly scheduler such as sorting by date."]},{isFeatured:!1,title:"Pass Volt",image:"images/tk-pass-volt-screen.png",iamgeAlt:"Pass Volt Application Screenshot",link:"https://github.com/justvinny/tk_PassVolt",shortDescription:"This marks the start of my programming journey in 2019 where I made my very first destop GUI applicating using Python and Tkinter after self-teaching myself programming the past few months at the time.",detailedDescription:["Login page to avoid unauthorized users. Account is stored as key value pair using shelve module.","Store account passwords to local storage.","Easily retrieve account passwords stored by copying a password to the clipboard.","Remove old accounts that you don't need anymore."]}],J=F.filter((function(e){return e.isFeatured})),W=function(){var e=Object(c.a)((function(e){var t;return{home:{display:"flex",flexDirection:"column"},aboutMe:Object(s.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10,padding:10},e.breakpoints.up("md"),{flexDirection:"row",marginLeft:"10vw",marginRight:"10vw"}),avatarSize:Object(s.a)({width:250,height:250,marginRight:10,marginBottom:10},e.breakpoints.up("xl"),{width:"15vw",height:"15vw"}),photoSize:{width:500,height:350,marginRight:10,marginBottom:10},featured:Object(s.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),featuredHeader:Object(s.a)({marginLeft:10,marginRight:10,paddingTop:15,paddingBottom:15,borderRadius:0,backgroundColor:"#1e1f22"},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),featuredText:(t={textAlign:"center",marginLeft:10,marginRight:10,backgroundColor:"#1e1f22",color:"#fff",fontFamily:"Impact",letterSpacing:2},Object(s.a)(t,e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),Object(s.a)(t,e.breakpoints.up("xl"),{fontSize:"1.5vw"}),t),aboutMeText:Object(s.a)({},e.breakpoints.up("xl"),{fontSize:"1.0vw"})}}))(),t="images/profile-pic.jpg",a="A photo of myself.",i="Kia ora! I'm Vinson, a university student studying Computer Science and Software Development at\n        the Auckland University of Technology. I am particulary interested in either creating software\n        that is helpful to my daily life or making games that I find interesting. On my off days, if you\n        don't find me having a barbie with my mates or lifting iron in the gym, I'm most likely either making my\n        dream game project or upskilling my programming skills.";return Object(y.jsxs)("div",{className:e.home,children:[Object(y.jsxs)(M.a,{className:e.aboutMe,elevation:5,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(P.a,{src:t,alt:a,className:e.avatarSize}),Object(y.jsx)(I,{})]}),Object(y.jsx)(g.a,{variant:"body2",className:e.aboutMeText,children:i})]}),Object(y.jsx)(M.a,{className:e.featuredHeader,elevation:5,children:Object(y.jsx)(g.a,{variant:"h5",className:e.featuredText,children:"FEATURED PROJECTS"})}),Object(y.jsx)(G,{projects:J})]})},H=a(11),z=function(){var e=Object(c.a)({root:{marginTop:10}})();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(G,{projects:F})})},V=function(){return Object(y.jsx)("h1",{children:"Contact Me"})},U=function(){var e=Object(c.a)({profile:{width:"100vw",height:"30vh",backgroundColor:"white"},footer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"10vh"},footerText:{marginLeft:10},poweredByImages:{"& img":{marginLeft:10,width:32}},contactMe:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:10,paddingTop:10,paddingBottom:20,width:"100vw",border:"1px solid lightgrey"},boldText:{fontWeight:900},contactLinks:{display:"flex",flexDirection:"row","& *":{width:32,height:32,color:"#1e1f22"}}})(),t=Object(T.a)("(min-width:800px)"),a=Object(T.a)("(min-width:600px)");return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)(L,{responsiveMenuQuery:t,responsiveHeaderQuery:a}),Object(y.jsx)("main",{children:Object(y.jsxs)(H.c,{children:[Object(y.jsx)(H.a,{exact:!0,path:"/",children:Object(y.jsx)(W,{})}),Object(y.jsx)(H.a,{exact:!0,path:"/projects",children:Object(y.jsx)(z,{})}),Object(y.jsx)(H.a,{exact:!0,path:"/contact-me",children:Object(y.jsx)(V,{})})]})}),Object(y.jsxs)("footer",{className:e.footer,id:"Footer",children:[Object(y.jsxs)("div",{className:e.contactMe,children:[Object(y.jsx)(g.a,{variant:"overline",className:e.boldText,children:"Contact Me"}),Object(y.jsxs)("div",{className:e.contactLinks,children:[Object(y.jsx)(g.a,{variant:"body2",children:Object(y.jsx)(v.a,{href:"mailto: vinsonemb.151994@gmail.com",children:Object(y.jsx)(C.a,{})})}),Object(y.jsx)(g.a,{variant:"body2",children:Object(y.jsx)(v.a,{href:"https://www.instagram.com/vinson.beduya/",target:"_blank",rel:"noopener",children:Object(y.jsx)(A.a,{})})}),Object(y.jsx)(g.a,{variant:"body2",children:Object(y.jsx)(v.a,{href:"https://www.linkedin.com/in/vinson-beduya/",target:"_blank",rel:"noopener",children:Object(y.jsx)(R.a,{})})})]})]}),Object(y.jsx)(g.a,{variant:"overline",children:"Powered by"}),Object(y.jsxs)("div",{className:e.poweredByImages,children:[Object(y.jsx)("img",{src:"/images/GitHub-Mark-32px.png",alt:"Github Logo"}),Object(y.jsx)("img",{src:"/images/js-logo.png",alt:"Javascript Logo"}),Object(y.jsx)("img",{src:"/logo192.png",alt:"React Logo"}),Object(y.jsx)("img",{src:"/images/material-ui-logo.png",alt:"Material UI Logo"})]}),Object(y.jsx)(g.a,{variant:"overline",children:"\xa9 Copyright 2021 Vinson Beduya"})]})]})})};r.a.render(Object(y.jsx)(U,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.7d26f00b.chunk.js.map