// styles
import './SelectCategory.css';

export default function SelectCategory({ categories, setCategory, category }) {
    const handleChange = (e) => {
        setCategory(prevState => prevState = e.target.value);
    };

    return (
        <div>
            <label>Category: </label>
            <select className='dropdown' value={category} onChange={handleChange}>
                {categories.map(category => (
                    <option key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}