import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {


	constructor(props) {
		super(props);
			// TODO Add a way to connect to the database

		this.state = {
			collections: SHOP_DATA
		}
	}

	render() {
		// destructure shop data
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{/* map and spread out */}
				{
				collections.map(({id, ...theRest}) => (
				<CollectionPreview key={id} {...theRest}/>
				))
				}

			</div>
		);
	}

}
export default ShopPage;