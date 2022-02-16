import React from 'react';
import './menu-item.styles.css';
import {   useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';

// this is a simulated withRouter
// v6 react-routed-dom doesn't have it
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	  let location = useLocation();
	  let navigate = useNavigate();
	  let params = useParams();
	  return (
		<Component
		  {...props}
		  router={{ location, navigate, params }}
		/>
	  );
	}

	return ComponentWithRouterProp;
}

const Menuitem = ({ title, imageUrl, size, history, linkUrl}) => {
	const navigate = useNavigate();

	return(
	<div className={`${size} menu-item`}
			onClick={() => navigate(`${linkUrl}`)}>
			{/* okay, so here we use navigate instead of history.push as we use v6 react-router-dom
			notice the need to use blank arrow function with onClick */}
		<div className="background-image"
		style={{
		backgroundImage:`url(${imageUrl})`
		}}/>


		<div className="content">
			<div className="title">{title.toUpperCase()}</div>
			<span className="subtitle">BUY NOW!</span>
		</div>
		</div>
		)
}

export default withRouter(Menuitem);