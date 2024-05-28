"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[408],{3843:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=t(4848),r=t(8453);t(6540),t(2303);const o={sidebar_position:1},a="Syntax Comparison",l={id:"programming-languages/syntax-comparison",title:"Syntax Comparison",description:"Entry point",source:"@site/docs/programming-languages/syntax-comparison.md",sourceDirName:"programming-languages",slug:"/programming-languages/syntax-comparison",permalink:"/my-website/docs/programming-languages/syntax-comparison",draft:!1,unlisted:!1,editUrl:"https://github.com/lrchljw/my-website/tree/main/docs/programming-languages/syntax-comparison.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Programming Languages",permalink:"/my-website/docs/category/programming-languages"},next:{title:"Go",permalink:"/my-website/docs/category/go"}},s={},m=[{value:"Entry point",id:"entry-point",level:2},{value:"Loop",id:"loop",level:2},{value:"For",id:"for",level:3},{value:"Labeled Break/Continue",id:"labeled-breakcontinue",level:3},{value:"For Each",id:"for-each",level:3},{value:"While loop",id:"while-loop",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Enum",id:"enum",level:3}];function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"syntax-comparison",children:"Syntax Comparison"}),"\n",(0,i.jsx)(e.h2,{id:"entry-point",children:"Entry point"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:'package main\n\nimport "fmt"\n\nfunc main() {\n   fmt.Println("Hello, World!")\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"loop",children:"Loop"}),"\n",(0,i.jsx)(e.h3,{id:"for",children:"For"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:'// for (initialization; condition; post statement)\nfor (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}\n\n// Infinite loop\nfor (;;) {\n    System.out.println("Infinite loop");\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:'// for initialization; condition; post statement\nfor i := 0; i < 5; i++ {\n    fmt.Println(i)\n\n    // break and continue\n    if i == 3 {\n        continue\n    }\n    if i == 4 {\n        break\n    }\n}\n\n// initialization, condition, post statement are optional\ni := 0\nfor ; i < 5; {\n    fmt.Println(i)\n    i++\n}\n\n// Infinite loop\nfor {\n    fmt.Println("This will run forever")\n    break // must use break to exit the loop\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"labeled-breakcontinue",children:"Labeled Break/Continue"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:'outerLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            break outerLoop; // Break out of the outer loop\n        }\n        System.out.println("i: " + i + ", j: " + j);\n    }\n}\n\nSystem.out.println("End of labeled break example.");\n\nouterLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            continue outerLoop; // Continue with the next iteration of the outer loop\n        }\n        System.out.println("i: " + i + ", j: " + j);\n    }\n}\n\nSystem.out.println("End of labeled continue example.");\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:'// continue will iterate from the next i\nouter:\nfor i := 0; i < 3; i++ {\n    for j := 0; j < 3; j++ {\n        if i == 1 && j == 1 {\n            continue outer\n        }\n        fmt.Printf("i: %d, j: %d\\n", i, j)\n    }\n}\n\n// break will break the outer loop and jump to `fmt.Println("Loop exited")`\nouter:\nfor i := 0; i < 3; i++ {\n    for j := 0; j < 3; j++ {\n        if i == 1 && j == 1 {\n            break outer\n        }\n        fmt.Printf("i: %d, j: %d\\n", i, j)\n    }\n}\nfmt.Println("Loop exited")\n'})}),"\n",(0,i.jsx)(e.h3,{id:"for-each",children:"For Each"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:'// over Array\nint[] arr = {1, 2, 3, 4, 5};\nfor (int num : arr) {\n    System.out.println(num);\n}\n\n// over ArrayList\nArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\nfor (Integer num : list) {\n    System.out.println(num);\n}\n\n// over Map\nimport java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Integer> map = new HashMap<>();\nmap.put("A", 1);\nmap.put("B", 2);\nmap.put("C", 3);\n// over entrySet\nfor (Map.Entry<String, Integer> entry : map.entrySet()) {\n    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());\n}\n// over keySet\nfor (String key : map.keySet()) {\n    System.out.println("Key: " + key);\n}\n// over values\nfor (Integer value : map.values()) {\n    System.out.println("Value: " + value);\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:'// over Array/Slice\narr := []int{1, 2, 3, 4, 5}\nfor i, v := range arr {\n    fmt.Printf("Index: %d, Value: %d\\n", i, v)\n}\n// only index\nfor i := range arr {\n    fmt.Println("Index:", i)\n}\n// only value\nfor _, v := range arr {\n    fmt.Println("Value:", v)\n}\n// over the array without using index or value\nfor range arr {\n    fmt.Println("Iterating...")\n}\n\n// over Map\nm := map[string]int{"a": 1, "b": 2}\nfor k, v := range m {\n    fmt.Printf("Key: %s, Value: %d\\n", k, v)\n}\n\n// over String\ns := "Hello"\nfor i, r := range s {\n    fmt.Printf("Index: %d, Rune: %c\\n", i, r)\n}\n\n// over Channel\nch := make(chan int, 2)\nch <- 1\nch <- 2\nclose(ch)\nfor v := range ch {\n    fmt.Println(v)\n}\n// Output:\n// 1\n// 2\n'})}),"\n",(0,i.jsx)(e.h3,{id:"while-loop",children:"While loop"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:'import java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Iterator;\n\nArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));\nIterator<String> iterator = list.iterator();\n\nwhile (iterator.hasNext()) {\n    String item = iterator.next();\n    System.out.println(item);\n}\n\nint i = 10;\ndo {\n    System.out.println(i);\n    i--;\n} while (i >= 0);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:"// Go doesn't have while loop, use for loop with only condition\ni := 0\nfor i < 5 {\n    fmt.Println(i)\n    i++\n}\n\n// Go doesn't have do-while loop.\n"})}),"\n",(0,i.jsx)(e.h2,{id:"data-types",children:"Data Types"}),"\n",(0,i.jsx)(e.h3,{id:"enum",children:"Enum"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",metastring:'title="Java" showLineNumbers',children:"// TODO\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:'title="Go" showLineNumbers',children:'// There is no built-in enum type in Go.\n// Simulate enum using a new type and constants of that type.\n\n// Below is an example of string enum.\ntype Color string\n\nconst (\n    Red   Color = "red"\n    Green Color = "green"\n)\n\nvar c Color = Red\nfmt.Println(c) // Output: red\n\nswitch c {\ncase Red:\n    fmt.Println("Color is Red")\ncase Green:\n    fmt.Println("Color is Green")\n}\n\n// Below is an example of int enum.\ntype Day int\n\nconst (\n    Sunday Day = iota // iota simplyfies the initialization of the enum values\n    Monday\n)\n\nvar today Day = Sunday\nfmt.Println(today) // Output: 0\n\nswitch today {\ncase Sunday:\n    fmt.Println("Today is Sunday")\ncase Monday:\n    fmt.Println("Today is Monday")\n}\n'})})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var i=t(6540);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);