import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './ListActions';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.getItems();
    }

    render() {

        return (
            <div>
                {this.props.list.map(item => {
                    return(
                        <div>
                            <h1>{item.id}</h1>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
