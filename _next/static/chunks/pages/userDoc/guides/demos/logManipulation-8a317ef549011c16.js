(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},5783:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(9600),n=s(7857),i=s(8802),a=s(5675),o=s.n(a),l=s(5893);function c(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{}),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"section",children:(0,l.jsxs)("div",{className:"row-userDoc",children:[(0,l.jsx)("h1",{children:"Log Manipulation"}),(0,l.jsx)("p",{children:"In this section, we will demonstrate the use of log manipulation. To be more precise, the usage of splitting and filtering the event log."}),(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/demo-simple-log-manipulation.PNG",width:"400px",height:"150px",alt:"demo-simple-discover.png",className:"img-fluid img-shadow"}),(0,l.jsxs)("div",{className:"new-wrapper",children:[(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/complettLog.jpg",width:"450px",height:"250px",alt:"complettLog.jpg",className:"img-fluid img-shadow"}),(0,l.jsx)("p",{children:'First, download the dataset from github, after that extract the event log file "running-examples.xes" from the downloaded dataset. Second, import "running-example-non-conforming.xes" and "running-example-just-two-cases.xes" with the "XES Reader" node. After that, connect the "XES Reader" to the "Filter Log By Frequency" node.'})]}),(0,l.jsxs)("div",{className:"new-wrapper",children:[(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/filterLogDialog.jpg",width:"350px",height:"150px",alt:"filterLogDialog.jpg",className:"img-fluid img-shadow"}),(0,l.jsx)("p",{children:'Now we connect the node that reads the "running-example-just-two-cases.xes",we configure our "Filter Log By Frequency" node.'})]}),(0,l.jsx)("p",{children:'The option "Keep trace" means that the chosen traces that match the following conditions will be kept. If not selected, the traces matching the conditions will be removed.'}),(0,l.jsxs)("p",{children:[" ",'The option "isForSingleTV" indicates (when checked) if we want to apply the filter on trace variant or on the whole event log(when unchecked).']}),(0,l.jsxs)("p",{children:[" ",'The option "Threshold" defines the threshold to filter. It accepts both percentage and absolute value. With value 0-1.0, it means the percentage in the whole event log size. When it is equal or greater than 1, it represents the absolute integer threshold.After configuration, it will be casted down into an integer value.The trace with equal or greater size than the threshold will be filtered.'," "]}),(0,l.jsx)("p",{children:"For that example we check both boxes and choose the threshold to be 0,1."}),(0,l.jsxs)("div",{className:"new-wrapper",children:[(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/filteredEventLog.jpg",width:"350px",height:"150px",alt:"filteredEventLog.jpg",className:"img-fluid img-shadow"}),(0,l.jsxs)("p",{children:[" ","After the execution, the log should be trace variant filtered, by a factor of 0,1. The filtered log can be viewed in the log view of the node."]}),(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/complettLog.jpg",width:"450px",height:"250px",alt:"complettLog.jpg",className:"img-fluid img-shadow"}),(0,l.jsx)("p",{children:'In the end, we merge the filtered log with the other "XES Reader". Considering our filtered and imported event log, we connect the output ports from the filtered and the imported event log into the "MergeLog" node.'}),(0,l.jsx)(o(),{style:{marginBottom:0},src:i.basePath+"/assets/images/logManipulation/LogMerge-configuration-internal-trace-02.png",width:"450px",height:"250px",alt:"LogMerge-configuration-internal-trace-02",className:"img-fluid img-shadow"}),(0,l.jsxs)("p",{children:['Inside of the "MergeLog" node we have several merge strategies.',(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Seperate Trace"})," it combines the traces from the two event logs together. Traces with the same caseID are allowed in the merged event log."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"IgnoreTrace"})," it ignores the traces from the second event log with the same caseID from the first event log."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Internal Trace Merge"}),", for the traces with the same caseID, it combines the events from the two traces together. The trace attributes can be chosen for the new attributes. An Example can be seen on the left."," "]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Internal Event Merge"}),", for the events with the same names in the traces with the same caseID, it creates one new event and with the chosen attributes."]})]})]})]}),(0,l.jsx)("p",{children:'The generated event log can observed in the view of "MergeLog" view.'})]})})}),(0,l.jsx)(n.Z,{})]})}},7857:function(e,t,s){"use strict";var r=s(5893);t.Z=function(e){return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,r.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,r.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,r.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,t,s){"use strict";var r=s(9499),n=(s(7294),s(8802)),i=s.n(n),a=s(4593),o=s(1664),l=s.n(o),c=s(634),h=s(9368),d=s(3210),g=s(5893);function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f=function(e){var t=e.style;return(0,g.jsxs)(c.Z,{className:"container-fluid color-nav",style:t,children:[(0,g.jsxs)(c.Z.Brand,{children:[(0,g.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,g.jsx)("img",{src:i().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,g.jsx)(l(),{href:"/",passHref:!0,children:(0,g.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,g.jsx)("img",{src:i().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,g.jsx)(c.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,g.jsxs)(c.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,g.jsx)(h.Z,{children:(0,g.jsx)(l(),{href:"/userDoc/",passHref:!0,children:(0,g.jsx)(h.Z.Link,{children:"Home"})})}),(0,g.jsx)(h.Z,{children:(0,g.jsxs)(d.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,g.jsx)(l(),{href:"/userDoc/guides/",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Introduction Guides"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/features",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"PM4KNIME Features"})}),(0,g.jsx)(d.Z.Divider,{}),(0,g.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Installation Instructions"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"KNIME Important Concepts"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Bug Report"})}),(0,g.jsx)(d.Z.Divider,{}),(0,g.jsx)(l(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,g.jsx)(h.Z,{children:(0,g.jsxs)(d.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,g.jsx)(l(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Introduction Demos"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Process Discovery"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Confromance"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Log Manipulation"})}),(0,g.jsx)(d.Z.Divider,{}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Repetitive Execution of Workflow (Legacy does not work)"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Parameter Optimization (Legacy does not work)"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Organization on Workflow"})}),(0,g.jsx)(d.Z.Divider,{}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"KNIME Nodes"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Working with Java"})}),(0,g.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,g.jsx)(d.Z.Item,{children:"Working with Python"})})]})})]})]})},u=function(){return(0,g.jsxs)(a.q,{children:[(0,g.jsx)("meta",{charSet:"UTF-8"}),(0,g.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,g.jsx)("title",{children:"PM4KNIME"}),(0,g.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:i().basePath+"/assets/pm4knimeLogo.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:i().basePath+"/assets/pm4knimeLogo.png"}),(0,g.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:i().basePath+"/assets/pm4knimeLogo.png"}),(0,g.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,g.jsx)("meta",{name:"google",content:"notranslate"})]})},x=function(){return(0,g.jsx)(f,{style:m({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};t.Z=function(e){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{}),(0,g.jsx)(x,{})]})}},3811:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/logManipulation",function(){return s(5783)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return t=3811,e(e.s=t);var t}));var t=e.O();_N_E=t}]);