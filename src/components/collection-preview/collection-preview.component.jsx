import React from 'react';
import './collection-preview.styles.css';
import CollectionItem from '../collection-item/collection-item.component'
//* Here we use a simple function call const instead of class, as we don't need state
const CollectionPreview = ({ title, items}) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{/*//*  Here we deconstruct or map the items
			//*Also, we use filter to only show four items*/}
			{items
				.filter((item, idx) => idx < 4)
				//*.map(item => ( previously we used this, destructuring the props below
					.map(({id, ...otherItemProps}) => (

					//* <div key={item.id}>{item.name}</div> check out how we map below
					<CollectionItem key={id} {...otherItemProps}/>
			))}

		</div>
	</div>
);
//* note that every time this gets rendered we do the filter, meaning anonymous function call () =>
//* So if the array is large, performance drops
export default CollectionPreview;