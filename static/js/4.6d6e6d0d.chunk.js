(this["webpackJsonpcgonzalez26-portfolio"]=this["webpackJsonpcgonzalez26-portfolio"]||[]).push([[4],{82:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var a=r(5),i=r(0),c=[{id:1,title:"FreeSalta",category:"Web Site",img:r.p+"static/media/Home_Freesalta.3f3cd4a2.jpg",ProjectHeader:{title:"Project Management",publishDate:"Jul 26, 2021",tags:"Frontend / Wordpress"},urlgit:"https://github.com/cgonzalez26/FreeSalta"},{id:2,title:"Secytec",category:"Web Site",img:r.p+"static/media/Home_Secytec.0b94f40c.jpg",urlgit:"https://github.com/cgonzalez26/Secytec"},{id:3,title:"Sms Admin",category:"Web Application",img:r.p+"static/media/Login_SmsAdmin.bda24615.jpg",urlgit:"https://github.com/cgonzalez26/SmsGestion"},{id:4,title:"Libreria del Estudiante",category:"Web Site",img:r.p+"static/media/Home_libdelestudiante.0dcd3637.jpg",urlgit:"https://github.com/cgonzalez26/libreriadelestudiante.com"},{id:5,title:"Web del Ciudadano",category:"Web Site",img:r.p+"static/media/Home_CiudadanoWeb.738cf1ab.jpg",urlgit:"https://github.com/cgonzalez26/Ciudadano.Web"},{id:6,title:"API Rest de la Web del Ciudadano",category:"API Rest",img:r.p+"static/media/CiudadanoApi.9ca541de.jpg",urlgit:"https://github.com/cgonzalez26/Ciudadano.api"}],s=r(2),n=Object(i.createContext)(),l=function(e){var t=Object(i.useState)(c),r=Object(a.a)(t,2),l=r[0],d=r[1],o=Object(i.useState)(""),m=Object(a.a)(o,2),g=m[0],x=m[1],j=Object(i.useState)(""),b=Object(a.a)(j,2),u=b[0],p=b[1],h=l.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())||""===g?e:""})),y=l.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(s.jsx)(n.Provider,{value:{projects:l,setProjects:d,searchProject:g,setSearchProject:x,searchProjectsByTitle:h,selectProject:u,setSelectProject:p,selectProjectsByCategory:y},children:e.children})}},83:function(e,t,r){"use strict";var a=r(0),i=r(9),c=r(80),s=r(2),n={id:1,icon:Object(s.jsx)(i.e,{})},l=function(e){var t=e.title,r=e.category,a=e.image,i=e.urlgit;return Object(s.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(s.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r}),Object(s.jsx)("ul",{className:"flex justify-center",children:Object(s.jsx)("a",{href:i,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(s.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:n.icon})},n.id)})]})]})})},d=r(82),o=r(30),m=["Web Application","Web Site","API Rest"],g=function(e){var t=e.setSelectProject,r=Object(o.b)().t;return Object(s.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(s.jsx)("option",{value:t,className:"text-sm sm:text-md",children:r("project.all_proyects")}),m.map((function(e){return Object(s.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(o.b)().t,t=Object(a.useContext)(d.a),r=t.projects,c=t.searchProject,n=t.setSearchProject,m=t.searchProjectsByTitle,x=t.selectProject,j=t.setSelectProject,b=t.selectProjectsByCategory;return Object(s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:e("project.title")})}),Object(s.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(s.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:e("project.title_search")}),Object(s.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(s.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(s.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(s.jsx)(i.m,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(s.jsx)("input",{onChange:function(e){n(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:e("project.textbox_search"),"aria-label":"Name"})]}),Object(s.jsx)(g,{setSelectProject:j})]})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:x?b.map((function(e){return Object(s.jsx)(l,{title:e.title,category:e.category,image:e.img,urlgit:e.urlgit},e.id)})):c?m.map((function(e){return Object(s.jsx)(l,{title:e.title,category:e.category,image:e.img,urlgit:e.urlgit},e.id)})):r.map((function(e){return Object(s.jsx)(l,{title:e.title,category:e.category,image:e.img,urlgit:e.urlgit},e.id)}))})]})}},92:function(e,t,r){"use strict";r.r(t);var a=r(5),i=r(51),c=r(9),s=r.p+"static/media/developer.3f53d42f.svg",n=r(80),l=r(30),d=r(2),o=function(){var e=Object(i.a)(),t=(Object(a.a)(e,1)[0],Object(l.b)().t);return Object(d.jsxs)(n.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsxs)(n.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:[t("banner.title")," \ud83d\udc4b"]}),Object(d.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:t("banner.introduction")}),Object(d.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"CV-CristianGonzalez.pdf",href:"/files/CV-CristianGonzalez.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Descargar mi CV",children:[Object(d.jsx)(c.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:t("banner.download")})]})})]}),Object(d.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:s,alt:"Developer"})})]})},m=r(83),g=r(82);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(o,{}),Object(d.jsx)(g.b,{children:Object(d.jsx)(m.a,{})})]})}}}]);
//# sourceMappingURL=4.6d6e6d0d.chunk.js.map