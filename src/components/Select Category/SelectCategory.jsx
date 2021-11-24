import './SelectCategory.css';

export default function SelectCategory({ categories, setCategory, category }) {
    return (
        <div>
            <label>Category: </label>
            <select
                className='dropdown'
                value={category}
                onChange={(e) => setCategory(prevState => prevState = e.target.value)}
            >
                {categories.map(category => (
                    <option key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
