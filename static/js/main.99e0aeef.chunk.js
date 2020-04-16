(this.webpackJsonpbetterme=this.webpackJsonpbetterme||[]).push([[0],{27:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(5),s=a.n(i),c=a(3),l=(a(37),a(38),a(24)),u=a(2),p=a(25),m=Object(u.combineReducers)({repositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_REPOSITORIES_SUCCESS":return t.payload.repositories;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.payload.page;default:return e}},totalPages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOTAL_PAGES":return t.payload.pages;default:return e}},searchQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_QUERY":return t.payload.query;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_REPOSITORIES_START":return null;case"GET_REPOSITORIES_ERROR":return t.payload.error;default:return e}}}),h=Object(u.combineReducers)({searcher:m}),d=Object(p.composeWithDevTools)(Object(u.applyMiddleware)(l.a)),g=Object(u.createStore)(h,d),f=(g.dispatch,a(6)),E=a(7),y=a(9),S=a(8),b=a(10),v=a.n(b),O=v.a.CancelToken,R=(a(56),function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(f.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleChangeQuery=function(t){e.setState({query:t.target.value})},e.handleCancelRequest=function(t){t.preventDefault(),n("Operation canceled by the user."),e.setState({query:""})},e.handleSubmitSearchForm=function(t){t.preventDefault();var a=e.state.query;a?(0,e.props.onSearch)(a.toLowerCase()):alert("Type some query")},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.query;return o.a.createElement("section",{className:"Searchbar"},o.a.createElement("form",{onSubmit:this.handleSubmitSearchForm,className:"SearchForm"},o.a.createElement("input",{onChange:this.handleChangeQuery,className:"SearchForm-input",value:e,type:"text",placeholder:"Search repositories...",autoComplete:"off"}),o.a.createElement("button",{type:"submit",className:"SearchForm-button"},o.a.createElement("span",{className:"SearchForm-button-label"},"Search"))),o.a.createElement("button",{type:"button",className:"Searchbar-cancel",onClick:this.handleCancelRequest},o.a.createElement("span",{className:"Searchbar-cancel-label"},"Cancel")))}}]),a}(r.Component)),C=Object(c.b)(null,(function(e){return{onSearch:function(t){return e(function(e){return{type:"SET_SEARCH_QUERY",payload:{query:e}}}(t))}}}))(R),N=a(26),T=a.n(N),_=function(e){return e.searcher.repositories},P=function(e){return e.searcher.page},j=function(e){return e.searcher.totalPages},k=function(e){return e.searcher.searchQuery},w=(a(60),Object(c.b)((function(e){return{page:P(e),totalPages:j(e)}}),(function(e){return{setPage:function(t){return e(function(e){return{type:"SET_PAGE",payload:{page:e}}}(t))}}}))((function(e){e.page;var t=e.totalPages,a=e.setPage;return o.a.createElement("section",{className:"pagination"},o.a.createElement(T.a,{pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){a(e.selected+1)},containerClassName:"pagination-list",pageClassName:"pagination-list-item",previousClassName:"pagination-list-item",nextClassName:"pagination-list-item",breakClassName:"pagination-list-item",disabledClassName:"pagination-list-item_disabled",activeClassName:"pagination-list-item_active",pageLinkClassName:"pagination-list-link",previousLinkClassName:"pagination-list-link",nextLinkClassName:"pagination-list-link"}))}))),I=(a(61),function(e){var t=e.repository;return o.a.createElement("li",{className:"repository"},o.a.createElement("article",{className:"repository-header"},o.a.createElement("a",{href:t.html_url,className:"repository-header-link"},t.name),o.a.createElement("div",{className:"star-wrapper"},o.a.createElement("span",{className:"repository-star"}),o.a.createElement("p",{className:"repository-star-counter"},t.stargazers_count))),o.a.createElement("p",{className:"repository-description"},t.description))}),q=(a(62),Object(c.b)((function(e){return{repositories:_(e)}}),{})((function(e){var t=e.repositories,a=void 0===t?[]:t;return o.a.createElement("section",{className:"repositories"},o.a.createElement("ul",{className:"repositories-list"},a.map((function(e){return o.a.createElement(I,{key:e.id,repository:e})}))))}))),A=function(e,t){return function(a){a({type:"GET_REPOSITORIES_START"}),function(e,t){return v.a.get("https://api.github.com/search/repositories?page=".concat(e,"&q=").concat(t,"&sort=stars"),{cancelToken:new O((function(e){n=e}))}).catch((function(e){if(!v.a.isCancel(e))throw new Error(e);console.log("Request canceled",e.message)}))}(e,t).then((function(e){a({type:"GET_REPOSITORIES_SUCCESS",payload:{repositories:e.data.items}}),a(function(e){return{type:"TOTAL_PAGES",payload:{pages:e}}}(Math.ceil(e.data.total_count/30)))})).catch((function(e){return a({type:"GET_REPOSITORIES_ERROR",payload:{error:e}})}))}},G=(a(63),{getRepositories:A}),Q=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.page,n=t.searchQuery,r=t.getRepositories;e.page===a&&e.searchQuery===n||r(a,n)}},{key:"render",value:function(){var e=this.props.repositories;return o.a.createElement("div",{className:"main-wrapper"},o.a.createElement("header",{className:"main-header"},o.a.createElement(C,null),e.length>0&&o.a.createElement(q,null),e.length>0&&o.a.createElement(w,null)))}}]),a}(r.Component),D=Object(c.b)((function(e){return{repositories:_(e),page:P(e),searchQuery:k(e)}}),G)(Q);s.a.render(o.a.createElement(c.a,{store:g},o.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.99e0aeef.chunk.js.map