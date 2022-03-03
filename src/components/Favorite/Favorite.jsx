import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";

export default function Favorite({ favorite }) {
    const dispatch = useDispatch();

    const handleRemove = () => dispatch(removeFromFavorites(favorite.id));

    return (
        <div id="container">
            <div className="product-details">
                <h1>{favorite.title.substring(0, 15)}...</h1>
                <p className="information">{favorite.description.substring(0, 100)}...</p>
                <div className="control">
                    <button className="btn">
                        <span className="buy" onClick={handleRemove}>
                            Remove from favorites
                        </span>
                    </button>
                </div>
            </div>
            <Link to={`/product/${favorite.id}`}>
                <div className="product-image">
                    <img src={favorite.image} alt={favorite.title} />
                    <div className="info">
                        <h2>Description</h2>
                        <ul>
                            <li><strong>Category: </strong>{favorite.category}</li>
                            <li><strong>Count: </strong>{favorite.rating.count}</li>
                            <li><strong>Rate: </strong>{favorite.rating.rate}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}