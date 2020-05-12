(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),i=a.n(r),c=(a(37),a(6)),l=a(7),s=a(9),m=a(8),u=a(10),d=a(13),p=a(1),h=a(30),v=a(14),f=a.n(v),b={getBooks:function(){return f.a.get("/api/books")},getBook:function(e){return f.a.get("/api/books/"+e)},deleteBook:function(e){return f.a.delete("/api/books/"+e)},saveBook:function(e){return f.a.post("/api/books",e)},searchBook:function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=").concat("AIzaSyD-kLO4ZVaw6JJFyv79j07u1v3fsVygH_w"))}};a(55);var g=function(e){return o.a.createElement("form",{className:"form-inline justify-content-center"},o.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:e.name,type:"text",className:"form-control mr-2 col-md-6",id:"searchInput",placeholder:"Search Books Here..."}),o.a.createElement("button",{onClick:e.handleFormSubmit,type:"submit",className:"btn btn-primary"},"Search"))},k=(a(56),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={saved:"",disabled:!1,saveText:"Save"},a.makeBook=function(){var e={};e.title=a.props.title,e.authors=a.props.authors,e.description=a.props.description,e.id=a.props.id,e.image=a.props.image,e.link=a.props.link,a.saveBook(e),a.setState({saveText:"Saved",disabled:!0})},a.saveBook=function(e){b.saveBook(e).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.getBook=function(e){b.getBook(e).then(function(e){if(null!==e.data)return a.setState({saved:!0});a.setState({saved:!1})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBook(this.props.title)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:this.props.id,className:"media mediaBox"},o.a.createElement("img",{src:this.props.image,className:"align-self-center mr-3 bookImg",alt:"..."}),o.a.createElement("div",{className:"media-body align-self-center"},o.a.createElement("h4",{className:"my-0"},this.props.title),o.a.createElement("p",null,o.a.createElement("small",null," - ",this.props.authors)),o.a.createElement("p",{className:"mediaText"},this.props.description),o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm ml-2"},"Visit")),e.state.saved?o.a.createElement("button",{type:"button",className:"btn btn-success btn-sm ml-2",disabled:!0},"Saved"):o.a.createElement("button",{onClick:function(){return e.makeBook()},type:"button",className:"btn btn-success btn-sm ml-2",disabled:e.state.disabled},e.state.saveText)))}}]),t}(n.Component));a(57);var E=function(e){return o.a.createElement("div",{className:"container"},e.children)},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",books:[],error:!1},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(h.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault();var t=[];b.searchBook(a.state.input).then(function(e){if(!e.data.items)return a.setState({input:"",error:!0,books:[]});e.data.items.forEach(function(e,a){var n={};n.id=a,n.title=e.volumeInfo.title,n.authors=e.volumeInfo.authors,e.volumeInfo.description?n.description=e.volumeInfo.description:n.description="No description available.",e.volumeInfo.imageLinks?n.image=e.volumeInfo.imageLinks.thumbnail:n.image="https://via.placeholder.com/120x180?text=No+Image",n.link=e.volumeInfo.infoLink,t.push(n)}),console.log(t),a.setState({input:"",books:t,error:!1})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement(g,{name:"input",value:this.state.input,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),this.state.books.length?this.state.books.map(function(e){return o.a.createElement(k,{key:e.id,id:e.id,title:e.title,authors:e.authors,description:e.description,link:e.link,image:e.image})}):this.state.error?o.a.createElement("div",{className:"alert alert-warning mt-4",role:"alert"},o.a.createElement("p",{className:"mt-2 text-center"},"No Books Found")):o.a.createElement("div",{className:"alert alert-info mt-4",role:"alert"},o.a.createElement("p",{className:"mt-2 text-center"},"Please use the form above to search by author or title.")))}}]),t}(o.a.Component),y=(a(58),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).deleteBook=function(e){b.deleteBook(e).then(function(e){a.props.loadSavedBooks()}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:this.props.id,className:"media mediaBox"},o.a.createElement("img",{src:this.props.image,className:"align-self-center mr-3 bookImg",alt:"..."}),o.a.createElement("div",{className:"media-body align-self-center"},o.a.createElement("h4",{className:"my-0"},this.props.title),o.a.createElement("p",null,o.a.createElement("small",null," - ",this.props.authors)),o.a.createElement("p",{className:"mediaText"},this.props.description),o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm ml-2"},"Visit")),o.a.createElement("button",{onClick:function(){return e.deleteBook(e.props.id)},type:"button",className:"btn btn-secondary btn-sm ml-2"},"Delete")))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.loadSavedBooks=function(){var e=[];b.getBooks().then(function(t){t.data.forEach(function(t){var a={};a.id=t._id,a.title=t.title,a.authors=t.authors,a.description=t.description,a.link=t.link,a.image=t.image,e.push(a)}),console.log(e),a.setState({books:e})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(E,null,o.a.createElement("div",{className:"alert alert-primary text-center",role:"alert"},o.a.createElement("h4",null,"Saved Books")),this.state.books.map(function(t){return o.a.createElement(y,{key:t.id,id:t.id,title:t.title,authors:t.authors,description:t.description,link:t.link,image:t.image,loadSavedBooks:e.loadSavedBooks})}))}}]),t}(o.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement("div",{className:"alert alert-danger pb-1",role:"alert"},o.a.createElement("h4",{className:"alert-heading text-center"},"404: File not found"),o.a.createElement("p",{className:"text-center"},"This page doesn't exist")))}}]),t}(o.a.Component);a(59);var O=function(e){var t,a;return"/"===Object(p.f)().pathname?(t="active",a=""):(t="",a="active"),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(d.b,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:"./img/logo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:""})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item ".concat(t)},o.a.createElement(d.b,{className:"nav-link",to:"/"},"Search")),o.a.createElement("li",{className:"nav-item ".concat(a)},o.a.createElement(d.b,{className:"nav-link",to:"/saved"},"Saved"))))))};a(65);var B=function(e){return o.a.createElement("div",{className:"jumbotron mt-4"},o.a.createElement("img",{id:"logo",src:"./img/header.png",alt:""}),e.children)},S=(a(66),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(E,null,o.a.createElement(O,null),o.a.createElement(B,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:N}),o.a.createElement(p.a,{exact:!0,path:"/books",component:N}),o.a.createElement(p.a,{exact:!0,path:"/saved",component:w}),o.a.createElement(p.a,{component:j})))))}}]),t}(n.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):I(e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.de9bc7a6.chunk.js.map