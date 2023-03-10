import React from "react";
import details from "../data/details";
import Search from "./Search";
import TopCircle from "./TopCircle";

class Main extends React.Component{
    constructor(props){
      super(props);
      this.state={
        table1:[{id:11,name:"test1",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:12,name:"",position:"",team:"",project:"",class:"top-circle"},
                {id:13,name:"",position:"",team:"",project:"",class:"bottom-circle"},
                {id:14,name:"test4",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"}],
        table2:[{id:21,name:"test1",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:22,name:"test2",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:23,name:"test3",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"},
                {id:24,name:"test4",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"}],
        table3:[{id:31,name:"test1",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:32,name:"",position:"",team:"",project:"",class:"top-circle"},
                {id:33,name:"test3",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"},
                {id:34,name:"test4",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"}],
        table4:[{id:41,name:"",position:"",team:"",project:"",class:"top-circle"},
                {id:42,name:"",position:"",team:"",project:"",class:"top-circle"},
                {id:43,name:"test3",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"},
                {id:44,name:"test4",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"}],
        table5:[{id:51,name:"test1",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:52,name:"",position:"",team:"",project:"",class:"top-circle"},
                {id:53,name:"test3",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"},
                {id:54,name:"",position:"",team:"",project:"",class:"bottom-circle"}],
        table6:[{id:61,name:"test1",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:62,name:"test2",position:"software design",team:"ui/ux",project:"voice assistant",class:"top-circle"},
                {id:63,name:"",position:"",team:"",project:"",class:"bottom-circle"},
                {id:64,name:"test4",position:"software design",team:"ui/ux",project:"voice assistant",class:"bottom-circle"}]
              }
      }
    componentDidMount(){
        const active1=this.state.table1.filter(elem=>elem.name!="");
        active1.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
        const active2=this.state.table2.filter(elem=>elem.name!="");
        active2.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
        const active3=this.state.table3.filter(elem=>elem.name!="");
        active3.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
        const active4=this.state.table4.filter(elem=>elem.name!="");
        active4.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
        const active5=this.state.table5.filter(elem=>elem.name!="");
        active5.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
        const active6=this.state.table6.filter(elem=>elem.name!="");
        active6.map(elem=>{document.getElementById(`${elem.id}`).style.backgroundColor="black"})
      }
    render(){
      return(
        <div className="container-card">
          <Search details={details}/>
        <div className="container">
        <div className="rect">
          <div className="circle-container">
          {this.state.table1.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          <div className="rect">
          <div className="circle-container">
          {this.state.table2.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          <div className="rect">
          <div className="circle-container">
          {this.state.table3.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          <div className="rect">
          <div className="circle-container">
          {this.state.table4.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          <div className="rect">
          <div className="circle-container">
          {this.state.table5.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          <div className="rect">
          <div className="circle-container">
          {this.state.table6.map(elem=>{return(
            <TopCircle id={elem.id} name={elem.name} position={elem.position} team={elem.team} project={elem.project} class={elem.class}/>
          )})}
          </div>
          </div>
          </div>
          </div>
      );
  }
  }
  
  export default Main;