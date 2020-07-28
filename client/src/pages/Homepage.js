import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../components/List/ListActions';
import '../style.css';

class Homepage extends Component {

    componentDidMount() {
        this.props.getItems();
    }
  
    render() {

        const workoutItems = this.props.workouts.map(workout => (
            <div key={workout.id}>
                <h3>Calories: {workout.calories}</h3>
                <p>Protein: {workout.protein}</p>
            </div>
        ))
        
        return(
            <>
            <nav className="nav header-custom">
                <img src={require("../images/logo.png")} className="logo" alt={"logo"} />
            </nav>

            <div>
                <h1>Workouts</h1>
                {workoutItems}
            </div>
            </>
        );
    }
  
}

Homepage.propTypes = {
    getItems: PropTypes.func.isRequired,
    workouts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    workouts: state.list.items,
});
  
export default connect(mapStateToProps, { getItems })(Homepage);