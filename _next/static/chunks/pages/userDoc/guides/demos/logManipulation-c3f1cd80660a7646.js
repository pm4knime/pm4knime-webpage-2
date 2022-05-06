(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:"/pm4knime-webpage",assetPrefix:"/pm4knime-webpage/"}},5783:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}});var i=t(9600),r=t(7857),n=t(5893);function a(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"section",children:(0,n.jsx)("div",{class:"Layout-main","data-view-component":"true",children:(0,n.jsx)("div",{id:"wiki-body",class:"gollum-markdown-content",children:(0,n.jsx)("div",{class:"markdown-body",children:(0,n.jsx)("div",{class:"Layout-main","data-view-component":"true",children:(0,n.jsx)("div",{id:"wiki-body",class:"gollum-markdown-content",children:(0,n.jsxs)("div",{class:"markdown-body",children:[(0,n.jsxs)("p",{children:["In this part, the demand to manipulate an event log is shown at first. Next, the concrete workflow is provided as one sample to solve a similar problem."," ",(0,n.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-log-manipulation.PNG",alt:"",width:"500px",height:"100px",className:"img-fluid img-shadow"})]}),(0,n.jsx)("p",{children:"One example workflow with PM4KNIME is shown below:"}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-log-manipulation-wf.PNG",alt:"",width:"600px",height:"400px",className:"img-fluid img-shadow"})}),(0,n.jsx)("p",{children:"The steps to create the workflow above are"}),(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Download the"," ",(0,n.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"dataset"})," ","from github. Extract the event log file"," ",(0,n.jsx)("code",{children:"running-example.xes"})," from the downloaded dataset."]}),(0,n.jsxs)("li",{children:["Import ",(0,n.jsx)("code",{children:"running-example-non-conforming.xes"})," ","and ",(0,n.jsx)("code",{children:"running-example-just-two-cases.xes"})," ","into KNIME with two nodes"," ",(0,n.jsx)("strong",{children:"Event Log Reader"}),"."]}),(0,n.jsxs)("li",{children:["Filter the event log"," ",(0,n.jsx)("code",{children:"running-example-non-conforming.xes"})," with node ",(0,n.jsx)("strong",{children:"Filter Event Log"}),'. Here, to filter the traces with Resource "Pete", meanwhile, the traces without the Resource "Pete" are ignored, the configuration is set in the next figure.',(0,n.jsx)("br",{})," ",(0,n.jsx)("img",{title:"Filter Configuration",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-configuration-01.PNG",alt:"image",className:"img-fluid img-shadow"})]})]}),(0,n.jsxs)("p",{children:["After execution, it splits the log into two logs, one is the log to keep, the other is to dispose."," ",(0,n.jsx)("img",{title:"Kept event log",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-result-keep.PNG",alt:"image",className:"img-fluid img-shadow"})]}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{title:"Disposed event log",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-result-dispose.PNG",alt:"image",className:"img-fluid img-shadow"})}),(0,n.jsx)("ol",{start:"4",children:(0,n.jsxs)("li",{children:["Merge two event logs with node"," ",(0,n.jsx)("strong",{children:"Merge Log"})]})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("p",{children:"Connect the output ports from the filtered event logs and the imported event log."})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Configure with Merge Strategy"," ",(0,n.jsx)("strong",{children:"Separate Trace"}),", it simply combines the traces from the two event logs together. Traces with the same caseID are allowed in the merged event log."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Configure with Merge Strategy"," ",(0,n.jsx)("strong",{children:"IgnoreTrace"}),", it ignored the traces from the second event log with the same caseID from the first event log."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Configure with Merge Strategy"," ",(0,n.jsx)("strong",{children:"Internal Trace Merge"}),", for the traces with the same caseID, it combines the events from the two traces together. The trace attributes can be chosen for the new attributes. The next figure shows the configuration example."," ",(0,n.jsx)("img",{title:"Merge Log with Strategy Internal Trace Merge",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogMerge-configuration-internal-trace-02.PNG",alt:"image",className:"img-fluid img-shadow"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Configure with Merge Strategy"," ",(0,n.jsx)("strong",{children:"Internal Event Merge"}),", for the events with the same names in the traces with the same caseID, it creates one new event and with the chosen attributs."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Choose strategy"," ",(0,n.jsx)("strong",{children:"Internal Trace Merge"})," and execute the node. It results in the merged event log."," ",(0,n.jsx)("img",{title:"Merge Log with Strategy Internal Trace Merge",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogMerge-result-internal-trace-02.PNG",alt:"image",className:"img-fluid img-shadow"})]})})]}),(0,n.jsx)("ol",{start:"5",children:(0,n.jsx)("li",{children:"Classify the traces in the event log with certain attributes."})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Configure"}),(0,n.jsx)("li",{children:"Execute the nodes. It outputs the result as following."})]}),(0,n.jsx)("h4",{children:"\xa0"}),(0,n.jsx)("h4",{children:"Notice"}),(0,n.jsx)("p",{children:"The event log manipulation can be achieved by applying the KNIME manipulation on Data Table which is converted from the event log. However, those operations can be simplified with the node provided before."})]})})})})})})})}),(0,n.jsx)(r.Z,{})]})}},7857:function(e,s,t){"use strict";var i=t(5893);s.Z=function(e){return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,i.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,i.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,t){"use strict";t(7294);var i=t(8802),r=t.n(i),n=t(4593),a=t(1664),o=t.n(a),l=t(634),c=t(3977),h=t(9368),d=t(3210),m=t(5893),g=function(){return(0,m.jsxs)(n.q,{children:[(0,m.jsx)("meta",{charSet:"UTF-8"}),(0,m.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,m.jsx)("title",{children:"PM4KNIME"}),(0,m.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,m.jsx)("meta",{name:"google",content:"notranslate"})]})},x=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l.Z,{className:"mx-auto color-nav",collapseOnSelect:!0,expand:"lg",variant:"light",fixed:"top",children:(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)(l.Z.Brand,{children:[(0,m.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,m.jsx)("img",{src:r().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,m.jsx)(o(),{href:"/",passHref:!0,children:(0,m.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,m.jsx)("img",{src:r().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:""}),"PM4KNIME"]})})]}),(0,m.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,m.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,m.jsx)(h.Z,{className:"ms-auto",children:(0,m.jsx)(o(),{href:"/userDoc/",passHref:!0,children:(0,m.jsx)(h.Z.Link,{children:"Home"})})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Guideline for normal user",id:"collasible-nav-dropdown",children:[(0,m.jsx)(o(),{href:"/userDoc/guides/",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Introduction Guides"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/features",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"PM4KNIME Features"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(o(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Installation Instructions"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Important Concepts"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Bug Report"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(o(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Usage Examples",id:"collasible-nav-dropdown",children:[(0,m.jsx)(o(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Introduction Demos"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Process Discovery"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Confromance"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Log Manipulation"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Repetitive Execution of Workflow"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Parameter Optimization"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Organization on Workflow"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"KNIME Nodes"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Working with Java"})}),(0,m.jsx)(o(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Working with Python"})})]})})]})]})})})};s.Z=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{}),(0,m.jsx)(x,{})]})}},3811:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/logManipulation",function(){return t(5783)}])}},function(e){e.O(0,[929,774,888,179],(function(){return s=3811,e(e.s=s);var s}));var s=e.O();_N_E=s}]);