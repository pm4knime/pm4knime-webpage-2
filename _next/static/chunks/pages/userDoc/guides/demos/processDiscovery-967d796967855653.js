(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},1796:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return o}});var t=i(9600),n=i(7857),r=i(5893);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Z,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"section",children:(0,r.jsx)("div",{class:"Layout-main","data-view-component":"true",children:(0,r.jsx)("div",{id:"wiki-body",class:"gollum-markdown-content",children:(0,r.jsxs)("div",{class:"markdown-body",children:[(0,r.jsxs)("p",{children:["In this part, the demand to discover a process model is shown at first. Next, the concrete workflow is provided as one sample to solve a similar problem."," ",(0,r.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-discover.PNG",alt:"",width:"400px",height:"100px",className:"img-fluid img-shadow"})]}),(0,r.jsx)("p",{children:"One example workflow with PM4KNIME is shown below:"}),(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-discover-wf.PNG",alt:"",width:"600px",height:"250px",className:"img-fluid img-shadow"})}),(0,r.jsx)("p",{children:"The following steps will guide you to accomplish the task and discover a Petri net from an event log."}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Download the"," ",(0,r.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"dataset"}),". Extract the event log ",(0,r.jsx)("code",{children:"running-example.xes"})," ","from the downloaded dataset."]}),(0,r.jsx)("li",{children:'Create a workflow in KNIME called "PM4KNIME-Release-01-WF-Discovery".'}),(0,r.jsxs)("li",{children:["Import the event log running-example.xes",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Drag the node ",(0,r.jsx)("strong",{children:"Event Log Reader"})," from the category ",(0,r.jsx)("strong",{children:"ProcessMining->IO"}),' or by searching the related name, like "Event" in Node Repository.']})})]})]}),(0,r.jsx)("p",{children:(0,r.jsx)("img",{title:"Node Search in KNIME",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-search-node.PNG",alt:"image",className:"img-fluid img-shadow"})}),(0,r.jsx)("div",{class:"snippet-clipboard-content position-relative overflow-auto",children:(0,r.jsx)("pre",{class:"notranslate",children:(0,r.jsx)("code",{class:"notranslate",children:"* Configure the **Event Log Reader** with the path to file running-example.xes and click OK to close the dialog."})})}),(0,r.jsx)("p",{children:(0,r.jsx)("img",{title:"Event Log Reader COnfiguration Dialog",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-configuration-01.PNG",alt:"image",className:"img-fluid img-shadow"})}),(0,r.jsx)("div",{class:"snippet-clipboard-content position-relative overflow-auto",children:(0,r.jsx)("pre",{class:"notranslate",children:(0,r.jsx)("code",{class:"notranslate",children:"* Execute the node by right-clicking the node and choosing **Execute** option. * Inspect the event log by choosing the Output port, which is always located as the last option by right-clicking."})})}),(0,r.jsx)("p",{children:(0,r.jsx)("img",{title:"Event log Overview",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-result-summary.PNG",alt:"image",className:"img-fluid img-shadow"})}),(0,r.jsxs)("p",{children:["Click the graph to show different perspectives on the event log."," ",(0,r.jsx)("img",{title:"Event Log with Traces",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-result-trace-01.PNG",alt:"image",className:"img-fluid img-shadow"})]}),(0,r.jsx)("ol",{start:"4",children:(0,r.jsxs)("li",{children:["Drag the node ",(0,r.jsx)("strong",{children:"Inductive Miner"})," into the KNIME and connect it with the output port of the event log.",(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Configure the settings with the following values."})})]})}),(0,r.jsx)("blockquote",{children:(0,r.jsxs)("p",{children:["Select Inductive Miner Type: Inductive Miner - Infrequent Write the Noise Threshold: 0.2 Select Event Classifier: Event Name"," ",(0,r.jsx)("img",{title:"IM Configuration",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-configuration-01.PNG",alt:"image",className:"img-fluid img-shadow"})]})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Click OK to close the configuration dialog."}),(0,r.jsx)("li",{children:"Execute the nodes."}),(0,r.jsxs)("li",{children:["Check the generated Petri net in output port. An accepting Petri net is given as the result."," ",(0,r.jsx)("img",{title:"Generated Petri net from Inductive Miner",src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-result-01.PNG",alt:"image",className:"img-fluid img-shadow"})]})]}),(0,r.jsx)("ol",{start:"5",children:(0,r.jsxs)("li",{children:["Export the generate Petri net with node"," ",(0,r.jsx)("strong",{children:"Petrinet Writer"}),".",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:["Connect the input port of"," ",(0,r.jsx)("strong",{children:"Petrinet Writer"})," with the output port of node ",(0,r.jsx)("strong",{children:"Inductive Miner"}),"."]})}),(0,r.jsxs)("li",{children:[(0,r.jsx)("p",{children:"Choose the file path, like"}),(0,r.jsx)("p",{children:(0,r.jsx)("code",{children:"\\Generated\\running-im-pn.pnml"})})]}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:"Execute the node to save the Petri net."})})]})]})}),(0,r.jsx)("p",{children:'Following those steps, hopefully, you get more familiar with task of process discovery. More miners are found in the category "Process Mining->Discovery". The node and option settings descriptions are listed on the right site if you click the node.'})]})})})})}),(0,r.jsx)(n.Z,{})]})}},7857:function(e,s,i){"use strict";var t=i(5893);s.Z=function(e){return(0,t.jsx)("footer",{className:"footer",children:(0,t.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,t.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,t.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,t.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,i){"use strict";i(7294);var t=i(8802),n=i.n(t),r=i(4593),o=i(1664),a=i.n(o),l=i(634),c=i(3977),d=i(9368),h=i(3210),m=i(5893),p=function(){return(0,m.jsxs)(r.q,{children:[(0,m.jsx)("meta",{charSet:"UTF-8"}),(0,m.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,m.jsx)("title",{children:"PM4KNIME"}),(0,m.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,m.jsx)("meta",{name:"google",content:"notranslate"})]})},g=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l.Z,{className:"mx-auto color-nav",collapseOnSelect:!0,expand:"lg",variant:"light",fixed:"top",children:(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)(l.Z.Brand,{children:[(0,m.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,m.jsx)("img",{src:n().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,m.jsx)(a(),{href:"/",passHref:!0,children:(0,m.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,m.jsx)("img",{src:n().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:""}),"PM4KNIME"]})})]}),(0,m.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,m.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,m.jsx)(d.Z,{className:"ms-auto",children:(0,m.jsx)(a(),{href:"/userDoc/",passHref:!0,children:(0,m.jsx)(d.Z.Link,{children:"Home"})})}),(0,m.jsx)(d.Z,{children:(0,m.jsxs)(h.Z,{title:"Guideline for normal user",id:"collasible-nav-dropdown",children:[(0,m.jsx)(a(),{href:"/userDoc/guides/",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Introduction Guides"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/features",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"PM4KNIME Features"})}),(0,m.jsx)(h.Z.Divider,{}),(0,m.jsx)(a(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Installation Instructions"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"KNIME Important Concepts"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Bug Report"})}),(0,m.jsx)(h.Z.Divider,{}),(0,m.jsx)(a(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,m.jsx)(d.Z,{children:(0,m.jsxs)(h.Z,{title:"Usage Examples",id:"collasible-nav-dropdown",children:[(0,m.jsx)(a(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Introduction Demos"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Process Discovery"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Confromance"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Log Manipulation"})}),(0,m.jsx)(h.Z.Divider,{}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Repetitive Execution of Workflow"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Parameter Optimization"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Organization on Workflow"})}),(0,m.jsx)(h.Z.Divider,{}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"KNIME Nodes"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Working with Java"})}),(0,m.jsx)(a(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,m.jsx)(h.Z.Item,{children:"Working with Python"})})]})})]})]})})})};s.Z=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(g,{})]})}},7129:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/processDiscovery",function(){return i(1796)}])}},function(e){e.O(0,[929,774,888,179],(function(){return s=7129,e(e.s=s);var s}));var s=e.O();_N_E=s}]);