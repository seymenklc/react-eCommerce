import { useSelector } from "react-redux";
// Components
import Favorite from "../components/Favorite/Favorite";
import Wrapper from "../components/styled/Wrapper";

export default function Favorites() {
    const { favorites } = useSelector(state => state.favorites);

    return (
        <div>
            {!favorites.length && <Wrapper>There is no favorite</Wrapper>}
            {favorites && favorites.map(favorite => (
                <Favorite key={favorite.id} favorite={favorite} />
            ))}
        </div>
    );
}