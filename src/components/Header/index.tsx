import { NavLink } from "react-router";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<NavLink to="" className={styles.logo}>
					<h2>Revicer</h2>
				</NavLink>

				<nav>
					<ul className={styles.nav}>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${styles.active} ${styles.link}` : styles.link
								}
								to="">
								Колоды
							</NavLink>
						</li>

						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${styles.active} ${styles.link}` : styles.link
								}
								to="/add-deck">
								Добавить колоду
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${styles.active} ${styles.link}` : styles.link
								}
								to="/words">
								Список слов
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
