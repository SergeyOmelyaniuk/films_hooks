import React, { Fragment } from 'react';
import styles from './CategoriesSort.module.scss';

function CategoriesSort(props) {
	const handler = (event) => {
		props.changeCategory(event.target.value);
	};

	return (
		<div className={styles.categoriesSort}>
			{props.categories.map((category) => {
				return (
					<Fragment key={category.id}>
						<input
							onClick={handler}
							id={`radio-${category.id}`}
							type='radio'
							name='sort'
							value={category.value}
							defaultChecked={category.value === props.categoryValue}
						/>
						<label htmlFor={`radio-${category.id}`}>{category.title}</label>
					</Fragment>
				);
			})}
		</div>
	);
}

export default CategoriesSort;
