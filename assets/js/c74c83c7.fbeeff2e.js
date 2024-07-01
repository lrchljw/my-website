"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8135],{9753:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=s(4848),t=s(8453);const r={title:"Chat"},l="Chat",c={id:"system-design/chat",title:"Chat",description:"Questions",source:"@site/docs/system-design/chat.md",sourceDirName:"system-design",slug:"/system-design/chat",permalink:"/my-website/docs/system-design/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/lrchljw/my-website/tree/main/docs/system-design/chat.md",tags:[],version:"current",frontMatter:{title:"Chat"},sidebar:"docSidebar",previous:{title:"System Design",permalink:"/my-website/docs/category/system-design"},next:{title:"Tricks",permalink:"/my-website/docs/system-design/tricks"}},o={},h=[{value:"Questions",id:"questions",level:2},{value:"Requirements and Scope",id:"requirements-and-scope",level:2},{value:"Tech requirements",id:"tech-requirements",level:3},{value:"Architecture from simple to complex",id:"architecture-from-simple-to-complex",level:2},{value:"Single Server",id:"single-server",level:3},{value:"Techniques that enables Server sending messages to clients",id:"techniques-that-enables-server-sending-messages-to-clients",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"chat",children:"Chat"}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsx)(n.p,{children:"One to one, or group chat\nHow many users in one group\nHow many messages per seconds\nWhat is the size of one message?\nHow many delays can accept?\nShould users receive notification when they are not online."}),"\n",(0,i.jsx)(n.h2,{id:"requirements-and-scope",children:"Requirements and Scope"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Search by words from message history"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tech-requirements",children:"Tech requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Exactly once delivery"}),"\n",(0,i.jsx)(n.li,{children:"Max size of one message limited to 1MB"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"architecture-from-simple-to-complex",children:"Architecture from simple to complex"}),"\n",(0,i.jsx)(n.h3,{id:"single-server",children:"Single Server"}),"\n",(0,i.jsx)(n.p,{children:"Client A -> Chat Service -> Client B"}),"\n",(0,i.jsx)(n.p,{children:"SPOF"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Client connects to the nearest server based on latency"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Do reseach on how CDN providers achieve this"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reconnect when connection is lost"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reasons for disconnection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Client network issue"}),"\n",(0,i.jsx)(n.li,{children:"Server network issue"}),"\n",(0,i.jsx)(n.li,{children:"Server is down"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"techniques-that-enables-server-sending-messages-to-clients",children:"Techniques that enables Server sending messages to clients"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Polling"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Long Polling"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"WebSockets"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://discord.com/blog/how-discord-stores-trillions-of-messages",children:"How Discord Stores Trillions of Messages"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(2988).A+"",width:"1080",height:"863"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://highscalability.com/how-league-of-legends-scaled-chat-to-70-million-players-it-t/",children:"How League of Legends Scaled Chat to 70 million Players"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://centrifugal.dev/blog/2020/11/12/scaling-websocket",children:"Scaling WebSocket in Go and beyond"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.atlassian.com/engineering/why-we-chose-kafka",children:"Why we chose Kafka for the Trello socket architecture"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://hackernoon.com/tarantool-when-it-takes-500-lines-of-code-to-notify-a-million-users-11d340523493",children:"Tarantool: when it takes 500 lines of code to notify a million users"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.freecodecamp.org/news/million-websockets-and-go-cc58418460bb/",children:"A Million WebSockets and Go"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ddh4r4m.medium.com/nats-unveiled-the-secret-to-scalable-chat-apps-on-ios-721df3593147",children:"NATS Unveiled: The Secret to Scalable Chat Apps on iOS"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ribice.medium.com/building-a-live-chat-with-go-nats-redis-and-websockets-cb3edbc940ca",children:"Building a live chat with Go, NATS, Redis and Websockets"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2988:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/how-discord-stores-billions-of-messages-e30bf0c186949af777a5e6b62d756e65.jpeg"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);