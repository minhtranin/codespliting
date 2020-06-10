import React from 'react';
import { connect } from 'react-redux';
class Data extends React.Component{
    render(){
        console.log(this.props.data);
        return (
            <div>
                data: {this.props.data.map(e => {
                    return <div>{e}</div>
                })}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({ data: state.data })
export default connect(mapStateToProps)(Data)