import React from "react";
type StateProps={
    name:string,
    
}
type StateType={
    data:string,
    years:number;
}
//const [data,setData]=useState("");
//this.state.data
//setState
//type testProps={}

class State extends React.Component<StateProps,StateType>
{
    state={data:"Test Code",years:10};


    clickHandler=()=>{
       // this.setState({data:"Hi"});
    //    this.setState({years:this.state.years+1});
    //    this.setState({years:this.state.years+1});
    //    this.setState({years:this.state.years+1});

    this.setState((prev)=>{return {years:prev.years+1}})
    this.setState((prev)=>{return {years:prev.years+1}})
    this.setState((prev)=>{return {years:prev.years+1}})





    }
    //props
    //state -object
    render()
    {
        return (
            <>
            {this.state.years}
              <div>  {this.state.data}</div>

                {this.props.name}
                <button onClick={this.clickHandler}>Change</button>
            </>
        )
    }
}
export default State;
