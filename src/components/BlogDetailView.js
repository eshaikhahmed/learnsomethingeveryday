import React, { Component  } from 'react';
import FireBase from './../SetupFr';
import { withRouter } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite'
import './../css/blog_content.css';

class BlogDetailView extends Component{
    constructor(props){
        super(props)
        this.state = {
            blogDetails: [],
        }
        
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        const db = getFirestore(FireBase);

        const blogId = this.props.match.params.id;

        console.log(blogId)
        //Query
        const q = query(collection(db, "blogs"), where("id", "==", parseInt(blogId)));

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        //var usersCollectionRef = db.collection("blogs");
        var blogListResponse = querySnapshot.docs.map(doc => doc.data());
        console.log(blogListResponse);
        ///this.setState({blogs: blogListResponse});
        console.log("componentDidMount ");
        this.setState({blogDetails: blogListResponse});
        
    }

    render(){
        return (
            <main className="blog-section">
	{this.state.blogDetails.map(blog =>
    <section className="blog-content"> 
        <h1 className="blog-heading">{blog.title}</h1>
        <div className="author-info">
            <span>
                {blog.author}&nbsp;
            </span>
            <span href="#" className="blog-card__read-time">
                | {blog.blog_read_time}
            </span>
        </div>
       
        <img src={"../../"+blog.head_image} alt={blog.title} className="hsg-deferred" />

        <div  className="blog-body">
             
            <div dangerouslySetInnerHTML={{__html: blog.content}} />
        </div>
    </section>
	)}
    
</main>
        );
    }
}

export default withRouter(BlogDetailView);
