import React from 'react';
import Data from './redux';
import { connect } from 'react-redux';
class Admin extends React.Component{
    render(){
        return (
            <>
            <div className='header'>
                <button onClick={()=>{
                    this.props.dispatch({
                        type: 'ADD_TODO',
                    })
                }}>getData</button>
            </div>
            <div>
                <Data/>
            </div>
        </>
        )}
}
const mapDispatchToProps = (dispatch) => ({dispatch})
const mapStateToProps = (state) => ({ data: state.data })
export default connect(mapStateToProps, mapDispatchToProps)(Admin)