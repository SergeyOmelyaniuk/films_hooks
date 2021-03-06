import React, { useState } from 'react';
import styles from './LanguageBar.module.scss';

function LanguageBar(props) {
	const [currentlanguage, setCurrentlanguage] = useState(props.languages[0]);
	const [isPopupVisible, togglePopup] = useState(false);
	const handler = (lang) => {
		if (currentlanguage.title !== lang.title) {
			setCurrentlanguage(lang);
			togglePopup(false);
		}
	};

	return (
		<div className={styles.languageBar}>
			<div onClick={() => togglePopup(!isPopupVisible)} className={styles.menu}>
				{currentlanguage.title}
			</div>
			{isPopupVisible && (
				<ul className={styles.popup} role='menubar'>
					{props.languages.map((lang) => (
						<li
							onClick={() => handler(lang)}
							key={lang.title}
							className={styles.item}
							role='menuitem'
						>
							{lang.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default LanguageBar;
