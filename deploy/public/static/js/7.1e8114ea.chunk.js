(this["webpackJsonpmern-socialapp"]=this["webpackJsonpmern-socialapp"]||[]).push([[7],{101:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n).a.createContext(),o=function(e,t){return null!=e?String(e):t||null};t.a=r},103:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),c=a(12),l=a.n(c);t.a=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))}))}},104:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(20),r=a.n(n),o=a(1),c=a(26),l=a(17),s=function(e){return function(t){t(b()),r.a.get("".concat("https://mern0social0app.herokuapp.com/api","/user/post/").concat(e)).then((function(e){return t({type:o.g,payload:e.data})})).catch((function(e){return t(Object(l.b)(e.response.data,e.response.status))}))}},i=function(){return function(e,t){e(b()),r.a.get("https://mern0social0app.herokuapp.com/api/people/posts",Object(c.e)(t)).then((function(t){return e({type:o.f,payload:t.data})})).catch((function(t){return e(Object(l.b)(t.response.data,t.response.status))}))}},u=function(e){return function(t,a){r.a.post("https://mern0social0app.herokuapp.com/api/user/post/add",e,Object(c.e)(a)).then((function(e){t({type:o.a,payload:e.data})})).catch((function(e){return t(Object(l.b)(e.response.data,e.response.status))}))}},d=function(e){return function(t,a){t(b()),r.a.delete("".concat("https://mern0social0app.herokuapp.com/api","/user/post/").concat(e),Object(c.e)(a)).then((function(a){return t({type:o.d,payload:e})})).then((function(e){t(Object(c.a)())})).catch((function(e){return t(Object(l.b)(e.response.data,e.response.status))}))}},f=function(e){return function(t,a){r.a.post("https://mern0social0app.herokuapp.com/api/people/like",e,Object(c.e)(a)).then((function(e){t({type:o.q,payload:e.data})})).then((function(e){t(i())})).catch((function(e){t(Object(l.b)(e.response.data,e.response.status))}))}},m=function(e){return function(t,a){r.a.post("https://mern0social0app.herokuapp.com/api/people/unlike",e,Object(c.e)(a)).then((function(e){t({type:o.r,payload:e.data})})).then((function(e){t(i())})).catch((function(e){t(Object(l.b)(e.response.data,e.response.status))}))}},p=function(e){return function(t,a){r.a.post("https://mern0social0app.herokuapp.com/api/people/comment",e,Object(c.e)(a)).then((function(e){t({type:o.p,payload:e.data})})).then((function(e){t(i())})).catch((function(e){t(Object(l.b)(e.response.data,e.response.status))}))}},b=function(){return{type:o.o}}},105:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(30);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},109:function(e,t,a){"use strict";var n,r=a(2),o=a(6),c=a(8),l=a(12),s=a.n(l),i=a(117),u=a(115),d=a(0),f=a.n(d),m=a(118),p=a(111),b=a(116),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var y=((n={})[m.c]="collapse",n[m.d]="collapsing",n[m.b]="collapsing",n[m.a]="collapse show",n),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=h[e];return a+parseInt(Object(i.a)(t,n[0]),10)+parseInt(Object(i.a)(t,n[1]),10)}},g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var a=t.getDimension();e.style[a]=t._getScrollDimensionValue(e,a)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var a=t.getDimension();e.style[a]=t.props.getDimensionValue(a,e)+"px",Object(b.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(c.a)(t,e);var a=t.prototype;return a.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},a._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},a.render=function(){var e=this,t=this.props,a=t.onEnter,n=t.onEntering,c=t.onEntered,l=t.onExit,i=t.onExiting,d=t.className,b=t.children,h=Object(o.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete h.dimension,delete h.getDimensionValue;var E=Object(p.a)(this.handleEnter,a),g=Object(p.a)(this.handleEntering,n),x=Object(p.a)(this.handleEntered,c),O=Object(p.a)(this.handleExit,l),v=Object(p.a)(this.handleExiting,i);return f.a.createElement(m.e,Object(r.a)({addEndListener:u.a},h,{"aria-expanded":h.role?h.in:null,onEnter:E,onEntering:g,onEntered:x,onExit:O,onExiting:v}),(function(t,a){return f.a.cloneElement(b,Object(r.a)({},a,{className:s()(d,b.props.className,y[t],"width"===e.getDimension()&&"width")}))}))},t}(f.a.Component);g.defaultProps=E,t.a=g},133:function(e,t,a){"use strict";var n=a(2),r=a(6),o=a(12),c=a.n(o),l=a(0),s=a.n(l),i=a(13),u=a(107),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,l=e.size,d=e.active,f=e.className,m=e.block,p=e.type,b=e.as,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(i.a)(a,"btn"),E=c()(f,y,d&&"active",y+"-"+o,m&&y+"-block",l&&y+"-"+l);if(h.href)return s.a.createElement(u.a,Object(n.a)({},h,{as:b,ref:t,className:c()(E,h.disabled&&"disabled")}));t&&(h.ref=t),b||(h.type=p);var g=b||"button";return s.a.createElement(g,Object(n.a)({},h,{className:E}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d},134:function(e,t,a){"use strict";var n=a(2),r=a(6),o=a(12),c=a.n(o),l=a(0),s=a.n(l),i=a(13),u=a(106),d=a(103),f=a(114),m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(i.a)(a,"card-img");return s.a.createElement(d,Object(n.a)({ref:t,className:c()(l?m+"-"+l:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,b=Object(d.a)("h5"),h=Object(d.a)("h6"),y=Object(u.a)("card-body"),E=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.bg,d=e.text,m=e.border,p=e.body,b=e.children,h=e.as,E=void 0===h?"div":h,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(a,"card"),O=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(f.a.Provider,{value:O},s.a.createElement(E,Object(n.a)({ref:t},g,{className:c()(o,x,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),p?s.a.createElement(y,null,b):b))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=p,E.Title=Object(u.a)("card-title",{Component:b}),E.Subtitle=Object(u.a)("card-subtitle",{Component:h}),E.Body=y,E.Link=Object(u.a)("card-link",{Component:"a"}),E.Text=Object(u.a)("card-text",{Component:"p"}),E.Header=Object(u.a)("card-header"),E.Footer=Object(u.a)("card-footer"),E.ImgOverlay=Object(u.a)("card-img-overlay");t.a=E},174:function(e,t,a){"use strict";var n=a(2),r=a(6),o=a(12),c=a.n(o),l=a(0),s=a.n(l),i=a(110),u=a(13),d=a(101),f=s.a.createContext(null);var m=s.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"button":a,c=e.children,i=e.eventKey,u=e.onClick,m=Object(r.a)(e,["as","children","eventKey","onClick"]),p=function(e,t){var a=Object(l.useContext)(f),n=Object(l.useContext)(d.a);return function(r){n(e===a?null:e,r),t&&t(r)}}(i,u);return"button"===o&&(m.type="button"),s.a.createElement(o,Object(n.a)({ref:t,onClick:p},m),c)})),p=a(109),b=s.a.forwardRef((function(e,t){var a=e.children,o=e.eventKey,c=Object(r.a)(e,["children","eventKey"]),i=Object(l.useContext)(f);return s.a.createElement(p.a,Object(n.a)({ref:t,in:i===o},c),s.a.createElement("div",null,s.a.Children.only(a)))}));b.displayName="AccordionCollapse";var h=b,y=s.a.forwardRef((function(e,t){var a=Object(i.a)(e,{activeKey:"onSelect"}),o=a.as,l=void 0===o?"div":o,m=a.activeKey,p=a.bsPrefix,b=a.children,h=a.className,y=a.onSelect,E=Object(r.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return p=Object(u.a)(p,"accordion"),s.a.createElement(f.Provider,{value:m},s.a.createElement(d.a.Provider,{value:y},s.a.createElement(l,Object(n.a)({ref:t},E,{className:c()(h,p)}),b)))}));y.Toggle=m,y.Collapse=h;t.a=y},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(97),c=a(98),l=a(96),s=a(134),i=a(133),u=a(100),d=a(104),f=a(26),m=a(16),p=a(27),b=a.n(p),h=a(174),y=a(105),E=Object(u.a)((function(e){var t={header:{backgroundColor:"#0c0c0C",color:"#29ff00",borderRadius:"20px"},cbody:{backgroundColor:"#333333",color:"#29ff00",padding:"20px",borderRadius:"20px"}},a=Object(n.useState)({body:"",user:[]}),o=Object(y.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){i(e.c)}),[]),r.a.createElement(l.a,{style:{marginTop:"20px"},sm:12},r.a.createElement(s.a.Body,{style:t.header},r.a.createElement(s.a.Title,{style:{textAlign:"center",textTransform:"uppercase"}},c.user.name),r.a.createElement(s.a.Text,{style:t.cbody},c.body)))})),g=Object(u.a)((function(e){var t={lightgreenColor:{color:"#29ff00"},col:{padding:"50px",borderRadius:"20px"},header:{backgroundColor:"#0c0c0C",color:"#29ff00",borderRadius:"20px"},button:{color:"#29ff00",fontWeight:"bold",backgroundColor:"#0c0c0C",border:"2px solid #0c0c0C"},card:{boxShadow:" 3px 3px #0c0c0C",width:"90%",margin:"0 auto",borderRadius:"20px"},cbody:{backgroundColor:"#333333",color:"#29ff00",padding:"20px",borderRadius:"30px"},FormControl:{backgroundColor:"#3333",color:"#29ff00"},commentA:{backgroundColor:"#0c0c0C",color:"#29ff00",textAlign:"end"},comments:{backgroundColor:"#333333",color:"#0c0c0C"},btn:{backgroundColor:"#3333",color:"#29ff00",marginLeft:"10px",border:"1px solid",marginTop:"20px",borderRadius:"20px"}};return r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{sm:12}," ",r.a.createElement(h.a,{style:{marginTop:"50px"},defaultActiveKey:"1"},r.a.createElement(s.a,{style:t.header},r.a.createElement(s.a.Body,{style:t.header},r.a.createElement(s.a.Title,{style:{textAlign:"center",textTransform:"uppercase"}},e.name),r.a.createElement(s.a.Text,{style:t.cbody},e.info.body),r.a.createElement(i.a,{style:t.btn,disabled:!0},e.info.likes.length,"  ",r.a.createElement("i",{className:"fa fa-thumbs-up"}," Likes")),r.a.createElement(i.a,{style:t.btn,disabled:!0},e.info.comments.length,"   ",r.a.createElement("i",{className:"fa fa-book"}," Comments")),r.a.createElement(i.a,{style:t.btn,onClick:function(){return e.delete(e.info._id)}},r.a.createElement("i",{className:"fa fa-trash"}))),r.a.createElement(h.a.Toggle,{as:s.a.Header,style:t.commentA,eventKey:"0"},r.a.createElement(i.a,{style:t.btn},r.a.createElement("i",{className:"fa fa-arrow-down"}))),r.a.createElement(h.a.Collapse,{eventKey:"0"},r.a.createElement(s.a.Body,{style:t.comments},r.a.createElement(o.a,{className:"m-3"},r.a.createElement(c.a,null,0!==e.info.comments.length?e.info.comments.map((function(e,t){return r.a.createElement(E,{key:t,c:e})})):null)))))))))})),x=Object(m.b)((function(e){return{user:e.auth.user,post:e.post}}),{getPosts:d.e,deletePost:d.c})((function(e){console.log(e.post.posts);var t,a=function(t){console.log("clicked??"),e.deletePost(t)};0===e.post.posts.length?t=r.a.createElement("h4",{style:{textAlign:"center",color:"#29ff00",marginTop:"100px"}},"No Posts found"):t=e.post.posts.map((function(t,n){return r.a.createElement(g,{key:n,info:t,name:e.user.name,delete:a})}));return r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{sm:12},e.post.loading?r.a.createElement(b.a,{type:"Circles",color:"#29ff00",height:100,width:100,timeout:3e3,style:{textAlign:"center"}}):t)))}));t.default=Object(m.b)((function(e){return{user:e.auth.user}}),{getPosts:d.e,loadUser:f.a})(Object(u.a)((function(e){var t={lightgreenColor:{color:"#29ff00"},col:{borderRadius:"20px"},header:{backgroundColor:"#0c0c0C",color:"#29ff00",fontWeight:"bold",borderRadius:"20px 20px"},button:{color:"#29ff00",fontWeight:"bold",backgroundColor:"#0c0c0C",border:"2px solid #29ff00",borderRadius:"20px"},card:{boxShadow:" 3px 3px #0c0c0C",width:"100%",margin:"0 auto",border:"2px solid"},cbody:{backgroundColor:"#333333",color:"#29ff00"}};return Object(n.useEffect)((function(){e.loadUser()}),[]),Object(n.useEffect)((function(){e.getPosts(e.user._id)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fluid:!0},r.a.createElement(c.a,null,r.a.createElement(l.a,{sm:12},r.a.createElement(s.a,{style:t.header,className:"text-center"},r.a.createElement(s.a.Header,null,r.a.createElement("i",{className:"fa fa-user"}),"  Profile"),r.a.createElement(s.a.Body,{style:t.cbody},r.a.createElement(s.a.Title,{style:t.cbody},e.user.name)),r.a.createElement(s.a.Footer,null,r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{style:t.button},e.user.followers.length," ",r.a.createElement("i",{className:"fa fa-users"},"Followers"))),r.a.createElement(l.a,null,r.a.createElement(i.a,{style:t.button},e.user.posts.length,"   ",r.a.createElement("i",{className:"fa fa-file-text-o"}," Posts"))),r.a.createElement(l.a,null,r.a.createElement(i.a,{style:t.button},e.user.followings.length,"    ",r.a.createElement("i",{className:"fa fa-users"},"Followings"))))))))),r.a.createElement(o.a,null,r.a.createElement(c.a,{style:{marginTop:"50px"}},r.a.createElement(l.a,{className:"text-center"},r.a.createElement(s.a,{style:t.header},r.a.createElement(s.a.Body,{style:t.button},"ALL POSTS"))))),r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{style:{padding:"20px"}},r.a.createElement(x,null)))))})))}}]);
//# sourceMappingURL=7.1e8114ea.chunk.js.map