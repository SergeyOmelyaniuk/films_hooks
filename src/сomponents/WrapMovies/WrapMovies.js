import React from 'react';
import MovieCard from '../MovieCard';
import styles from './WrapMovies.module.scss';

function WrapMovies(props) {
	return (
		<div className={styles.wrapMovies}>
			{props.movies.map((movie) => {
				return (
					<div key={movie.id} className={styles.wrapMovie}>
						<MovieCard movie={movie} />
					</div>
				);
			})}
		</div>
	);
}

export default WrapMovies;
