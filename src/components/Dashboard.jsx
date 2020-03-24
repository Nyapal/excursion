import React from 'react';
import Navbar from './Navbar';
import '../views/Dashboard.css';
import firebase from '../firebase';

const db = firebase.firestore();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('Trips')
      .get()
      .then((querySnapshot) => {
        const Trips = [];

        querySnapshot.forEach((doc) => {
          // console.log(doc.id, '=>', doc.data())
          Trips.push({
            destination: doc.data().end,
            //  Starting: doc.data().starting
          });
        });
        // console.log(this.state.trips)
        this.setState({ trips: Trips });
      });
  }

  // getTrips() {
  //   db.collection('Trips').get().then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //     })
  //   })
  //   let tripsCollectionRef = db.collection('Trips');
  //   let allTrips = tripsCollectionRef.get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         console.log(doc.id, '=>', doc.data());
  //       })
  //     })
  //     .catch(err => {
  //       console.log('Error getting documents', err)
  //     })
  //   this.setState({trips: allTrips})
  //   console.log(allTrips)
  // }

  render() {
    return (
      <div>
        <Navbar />
        <h1> Dashboard </h1>
        <div>
          {this.state.trips.map((el, indx) => (
            <p
              key={indx}
            >
              {el.destination}
              Trip
            </p>
          ))}
        </div>
      </div>
    );
  }
}
// const Dashboard = () => (
//   <div className="dashboard">
//     <h1> Dashboard </h1>
//     <p> My saved trips </p>
//   </div>
// );

export default Dashboard;
