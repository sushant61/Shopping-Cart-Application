import React from "react";
class Add extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            productname:"",
            productprice:0
        }
    }
  render() {
    return (
      <div>
        <form className='row mb-5'onSubmit={(e)=>{
            e.preventDefault();
            this.props.add(this.state.productname,Number(this.state.productprice));
          }}>
          <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inpitName"
              aria-describedby="name"
              name="productname"
              onChange={(e)=>{
                  this.setState({productname:e.currentTarget.value})
              }}
              value={this.state.productname}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label" >
              Price
            </label>
            <input type="number" className="form-control" id="inputPrice" name="productprice"
            onChange={(e)=>{
                this.setState({productprice:Number(e.currentTarget.value)})
            }}
            value={this.state.productprice}/>
          </div>
          <button type="submit" className="btn btn-primary col-7">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Add;
