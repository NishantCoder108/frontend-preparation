import React, { useRef } from "react";

/*
class Controlled extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
              this.setState({value:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <>
            <form>
            <input type='text' value ={this.state.value} onChange={this.handleChange} />
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
             </form></>       )
    }
}

export default Controlled;


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`My Name is : ${this.input.current.value}`);
  }
  render() {
    return (
      <>
        <form>
          <label>
            <input ref={this.input} type="text" />
          </label>
          <button type="submit" onClick={this.handleSubmit}></button>
        </form>
      </>
    );
  }
}
*/
function NameForm(){

    const ref = useRef();
    function submitForm(e){
        e.preventDefault()
        alert(`My Name is ${ref.current.value}`)
    }
    return(
<form>
    <input type='text' ref={ref} />
    <button type="submit" onClick={submitForm}>Submit</button>
</form>
    )
}