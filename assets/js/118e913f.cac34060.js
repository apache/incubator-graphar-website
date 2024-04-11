"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[7979],{5022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=t(1527),s=t(395);const o={id:"concepts",title:"Concepts",sidebar_position:3},i=void 0,d={id:"overview/concepts",title:"Concepts",description:"Glossary of relevant concepts and terms.",source:"@site/docs/overview/concepts.md",sourceDirName:"overview",slug:"/overview/concepts",permalink:"/docs/overview/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar/edit/main/docs/overview/concepts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"concepts",title:"Concepts",sidebar_position:3},sidebar:"documentation",previous:{title:"Motivation",permalink:"/docs/overview/motivation"},next:{title:"Specification",permalink:"/docs/category/specification"}},a={},c=[];function l(e){const n={em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Glossary of relevant concepts and terms."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Property Group"}),": GraphAr splits the properties of vertex/edge into groups to allow for efficient storage\nand access without the need to load all properties. Also benefits appending of new properties. Each property\ngroup is the unit of storage and is stored in a separate directory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Adjacency List"}),": The storage method to store the edges of certain vertex type. Which include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"ordered by source vertex id"}),": the edges are ordered and aligned by the source vertex"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"ordered by destination vertex id"}),": the edges are ordered and aligned by the destination vertex"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"unordered by source vertex id"}),": the edges are unordered but aligned by the source vertex"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"unordered by destination vertex id"}),": the edges are unordered but aligned by the destination vertex"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compressed Sparse Row (CSR)"}),": The storage layout the edges of certain vertex type. Corresponding to the\nordered by source vertex id adjacency list, the edges are stored in a single array and the offsets of the\nedges of each vertex are stored in a separate array."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compressed Sparse Column (CSC)"}),": The storage layout the edges of certain vertex type. Corresponding to the\nordered by destination vertex id adjacency list, the edges are stored in a single array and the offsets of the\nedges of each vertex are stored in a separate array."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Coordinate List (COO)"}),": The storage layout the edges of certain vertex type. Corresponding to the unordered\nby source vertex id or unordered by target vertex id adjacency list, the edges are stored in a single array and\nno offsets are stored."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Vertex Chunk"}),": The storage unit of vertex. Each vertex chunk contains a fixed number of vertices and is stored\nin a separate file."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Edge Chunk"}),": The storage unit of edge. Each edge chunk contains a fixed number of edges and is stored in a separate file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Highlights"}),":\nThe design of property group and vertex/edge chunk allows users to"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Access the data without reading all the data into memory"}),"\n",(0,r.jsx)(n.li,{children:"Conveniently append new properties to the graph without the need to reorganize the data"}),"\n",(0,r.jsx)(n.li,{children:"Efficiently store and access the data in a distributed environment and parallel processing"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},395:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(959);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);