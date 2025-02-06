import React from 'react';

type GreetClassProps={
    name:string;
}
class GreetClass extends React.Component<GreetClassProps>
{

    clickhandler(){
        alert("clciked");
    }
    render=()=>
    {
        return (
            <>
            <div>Class Component -{this.props.name}</div>
            <button onClick={this.clickhandler}>Send</button>
            </>
        )
    }
}
export default GreetClass;
