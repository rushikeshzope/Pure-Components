import { PureComponent } from "react";

export default class PureCounterComponent extends PureComponent {

    constructor() {
        super();
        this.state = {
            toggle: false,
            count : 0
        }
    }

    render() {
        console.log("This is Pure Component")
        let {toggle, count} = this.state

        let handleToggle = () =>{
            this.setState({toggle:!toggle})
        }

        let handleCount = () =>{
            if(toggle){
                this.setState({count:count+1})
            }
            else{
                this.setState({count:count})
            }
        }

        return(
            <>
                <div>
                    <h1>Pure Components</h1>
                    <h2>{count}</h2>
                    <div className='button'>
                        <button onClick={handleToggle} style={{backgroundColor: `${toggle ? 'green' : 'blue'}`}}>Toggle</button>
                        <button onClick={handleCount}>Counter</button>
                    </div>
                </div>
            </>
        )
    }
}