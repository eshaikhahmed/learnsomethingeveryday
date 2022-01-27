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