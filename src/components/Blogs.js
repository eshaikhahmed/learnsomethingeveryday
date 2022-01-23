import React, { Component  } from 'react';
import FireBase from './../SetupFr';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import Article from './Article';
import './../css/blogs.css';

class Blogs extends Component {
      
    constructor(props){
        super(props)
        this.state = {
            blogs: [],
        }
        
    }
    
    async componentDidMount() {
     
        const db = getFirestore(FireBase);
        const citiesCol = collection(db, 'blogs');
        var citySnapshot = await getDocs(citiesCol);
        //var usersCollectionRef = db.collection("blogs");
        var blogListResponse = citySnapshot.docs.map(doc => doc.data());
        console.log(blogListResponse);
        this.setState({blogs: blogListResponse});
        console.log("componentDidMount ");
        
    }

     // Fetch the required data using the get() method
     fetchData() {
        //database.collection("blogs").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            // querySnapshot.forEach(element => {
            //     var data = element.data();
            //     //setInfo(arr => [...arr , data]);
                  
            // });
         //   console.log(querySnapshot);
       // });
    }

    render() {
        return (
            <div className="body-content">
                <div className="blog-section">
                    <section className="blog-content">  
                    {this.state.blogs.map(blog =>
                    
                        <Article blg={blog} />
                
                        
                    )}
                    </section>
                </div>
            
            </div>
        );
    }
}

export default Blogs;