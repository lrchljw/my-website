"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[870],{2356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=n(4848),r=n(8453);const s={title:"cli"},i="cli",l={id:"programming-languages/go/go-cli",title:"cli",description:"Frequently used commands for my reference.",source:"@site/docs/programming-languages/go/go-cli.md",sourceDirName:"programming-languages/go",slug:"/programming-languages/go/go-cli",permalink:"/my-website/docs/programming-languages/go/go-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/lrchljw/my-website/tree/main/docs/programming-languages/go/go-cli.md",tags:[],version:"current",frontMatter:{title:"cli"},sidebar:"docSidebar",previous:{title:"Go",permalink:"/my-website/docs/category/go"},next:{title:"fmt",permalink:"/my-website/docs/programming-languages/go/go-fmt"}},c={},a=[{value:"test",id:"test",level:2},{value:"Specific test in a file",id:"specific-test-in-a-file",level:3},{value:"HTML coverage report",id:"html-coverage-report",level:3},{value:"godoc",id:"godoc",level:2},{value:"go mod tidy",id:"go-mod-tidy",level:2},{value:"publish",id:"publish",level:2}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"cli",children:"cli"}),"\n",(0,o.jsx)(t.p,{children:"Frequently used commands for my reference."}),"\n",(0,o.jsx)(t.h2,{id:"test",children:"test"}),"\n",(0,o.jsx)(t.h3,{id:"specific-test-in-a-file",children:"Specific test in a file"}),"\n",(0,o.jsxs)(t.p,{children:["Run only the tests that starts with ",(0,o.jsx)(t.code,{children:"Example"})," in the file ",(0,o.jsx)(t.code,{children:"example_test.go"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"go test -v -run Example ./example_test.go\n"})}),"\n",(0,o.jsx)(t.h3,{id:"html-coverage-report",children:"HTML coverage report"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Run all tests and generate coverage report."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"go test -coverprofile=coverage.out\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Generate HTML coverage report base on the coverage.out file."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"go tool cover -html=coverage.out -o coverage.html\n"})}),"\n",(0,o.jsx)(t.h2,{id:"godoc",children:"godoc"}),"\n",(0,o.jsxs)(t.p,{children:["Generate documentation for the project, and open the documentation in the browser.",(0,o.jsx)(t.br,{}),"\n","e.g.: ",(0,o.jsx)(t.a,{href:"http://localhost:6060/pkg/github.com/ppc-games/ppcerrors/",children:"http://localhost:6060/pkg/github.com/ppc-games/ppcerrors/"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"godoc -http=:6060\n"})}),"\n",(0,o.jsx)(t.h2,{id:"go-mod-tidy",children:"go mod tidy"}),"\n",(0,o.jsx)(t.p,{children:"Automatically tidy and update the dependency list of the project, ensuring that only the libraries actually needed by the project are present in the go.mod and go.sum files, and removing unused libraries."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n",(0,o.jsx)(t.h2,{id:"publish",children:"publish"}),"\n",(0,o.jsx)(t.p,{children:"Refresh the module cache and publish the module to the proxy server."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"GOPROXY=proxy.golang.org go list -m github.com/ppc-games/ppcerrors@v0.1.2\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);