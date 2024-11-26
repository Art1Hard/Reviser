import { NavLink } from "react-router";
import styles from "./deck.module.scss";
import { IDeck } from "../../interfaces/deck";

interface DeckProps {
	deck: IDeck;
}

const Deck = ({ deck }: DeckProps) => {
	return (
		<div className={styles.root}>
			<NavLink className={styles.title} to="">
				<h3>{deck.title}</h3>
			</NavLink>
			<div className={styles.content}>
				<div className={styles.counts}>
					<p className={styles.countRepeat}>Повтор: 0</p>
					<p className={styles.countNew}>Новые: 0</p>
				</div>
				<button className={styles.button}>Действия</button>
			</div>
		</div>
	);
};

export default Deck;
