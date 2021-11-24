import { useSelector } from "react-redux";

// Components
import Favorite from "../components/Favorite/Favorite";
import Wrapper from "../components/styled/Wrapper";

export default function Favorites() {
    const { favorites } = useSelector(state => state.favorites);

    if (!favorites.length) return <Wrapper>There is no favorite</Wrapper>;

    return favorites && (
        <div>
            {favorites.map(favorite => (
                <Favorite key={favorite.id} favorite={favorite} />
            ))}
        </div>
    );
}
