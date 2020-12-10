import React from 'react';
import PostItem from './PostItem';

function PostList(props){           
        
        return (
            <div>
                <h2>Posts list:</h2>
                {props.posts.map((post) => {
                    return (                     
                        <PostItem
                            key={post.id}
                            title={post.title}  
                            body={post.body}                        
                        />                        
                    )
                })}
            </div>
        );    
}

export default PostList;