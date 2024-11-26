import Deck from "../../components/Deck";
import styles from "./home.module.scss";
import decks from "../../data/decks";

const Home = () => {
	return (
		<div className={styles.root}>
			{decks.map((deck) => (
				<Deck deck={deck} key={deck.id} />
			))}
		</div>
	);
};

export default Home;
