(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},6244:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var i=t(9600),n=t(7857),a=t(8802),r=t(5675),o=t.n(r),c=t(5893);function l(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{}),(0,c.jsx)("div",{className:"section",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/conformance-check.png",width:"400px",height:"225px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:"In this part, the demand to do conformance checking is shown at first. Conformance checking needs a process model and an event log as inputs. In this we will provide a process model and event log to do a fitness and precision evaluation."}),(0,c.jsx)("h1",{children:"Preparations"}),(0,c.jsxs)("div",{className:"new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/conformance-check-wf.png",width:"1280px",height:"720px",alt:"demo-simple-conformance-check-wf",className:"img-fluid img-shadow"}),(0,c.jsxs)("p",{children:[" ","To create a workflow, which evaluates a process model, we first download the dataset Download the"," ",(0,c.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"dataset"}),". Extract the xes file ",(0,c.jsx)("code",{children:"running-example.xes"})," from the downloaded dataset."]}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/processDiscovery/XESReaderDialog.jpg",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:" Than we read the xes file with the help of the XES Reader"}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/processDiscovery/InspectEventLog.jpg",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:'The log should consist of the activities "decide", "check ticket" etc.'}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/reading PNML file.png",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ","Than we read to Petri Net from the giving dataset with the help of the PNML Reader."]})]}),"After the preparations we come to the actual conformance checking part. For that we first generate our alignments and feed them to our precision and fitness nodes respectfully. We first start with the fitness view.",(0,c.jsx)("h1",{children:"Fitness"}),(0,c.jsxs)("div",{className:"new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/alignmentbaseReplayer.png",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsx)("p",{children:'With the help of the Alignment-Based Replayer node we can create our alignments. For that example we take as "Classifier Name" "#Event Attribute #concept:name" and select replay strategy "ILP Replayer", with the default values. For further inside the replay results can be checked inside of the node.'}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/fitnessCheckerInformation.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'After executing the "Fitness Checker" we should get statistics about the fitness']}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/fitnessCheckerModelView.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'With the "Projection View" on the node it is also possible to see the fitness on the model.']})]}),(0,c.jsx)("h1",{children:"Precision"}),(0,c.jsxs)("div",{className:" new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/precisionCheckerDialog.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'The "Precision Checker" node should be run with the ETC Precision option for this example.']}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/precisionCheckerInformation.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsx)("p",{children:"In the view we can than observe the precision of our process."})]})]})}),(0,c.jsx)(n.Z,{})]})}},7857:function(e,s,t){"use strict";var i=t(5893);s.Z=function(e){return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,i.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,i.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,t){"use strict";var i=t(9499),n=(t(7294),t(8802)),a=t.n(n),r=t(4593),o=t(1664),c=t.n(o),l=t(634),h=t(9368),d=t(3210),m=t(5893);function p(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?p(Object(t),!0).forEach((function(s){(0,i.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var f=function(e){var s=e.style;return(0,m.jsxs)(l.Z,{className:"container-fluid color-nav",style:s,children:[(0,m.jsxs)(l.Z.Brand,{children:[(0,m.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,m.jsx)("img",{src:a().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,m.jsx)(c(),{href:"/",passHref:!0,children:(0,m.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,m.jsx)("img",{src:a().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,m.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,m.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,m.jsx)(h.Z,{children:(0,m.jsx)(c(),{href:"/userDoc/",passHref:!0,children:(0,m.jsx)(h.Z.Link,{children:"Home"})})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,m.jsx)(c(),{href:"/userDoc/guides/",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Introduction Guides"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/features",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"PM4KNIME Features"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(c(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Installation Instructions"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Important Concepts"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Bug Report"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(c(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,m.jsx)(c(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Introduction Demos"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Process Discovery"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Confromance"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Log Manipulation"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Repetitive Execution of Workflow"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Parameter Optimization"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Organization on Workflow"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Nodes"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Working with Java"})}),(0,m.jsx)(c(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Working with Python"})})]})})]})]})},x=function(){return(0,m.jsxs)(r.q,{children:[(0,m.jsx)("meta",{charSet:"UTF-8"}),(0,m.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,m.jsx)("title",{children:"PM4KNIME"}),(0,m.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:a().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:a().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:a().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,m.jsx)("meta",{name:"google",content:"notranslate"})]})},u=function(){return(0,m.jsx)(f,{style:g({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};s.Z=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(u,{})]})}},6645:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/conformance",function(){return t(6244)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return s=6645,e(e.s=s);var s}));var s=e.O();_N_E=s}]);