import Post from './post';
import PropTypes from 'prop-types';

const Posts = ( {posts} ) => {
	posts.sort( ( a, b ) => {
		const viewA = a?.node?.viewCount;
		const viewB = b?.node?.viewCount;
		return viewB - viewA;
	} );
	return (
		<div className="all-blog-posts-container container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
			{
				posts.map( ( post, index ) => {
					return (
						<div key={`${post?.node?.id}-${index}` ?? ''} className="post-box">
							<Post post={post?.node}/>
						</div>
					);
				} )
			}
		</div>
	);
};

Posts.propTypes = {
	posts: PropTypes.array
};

Posts.defaultProps = {
	posts: []
};

export default Posts;
