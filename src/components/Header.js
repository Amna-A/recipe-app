
import Button from "./Button";
import PropTypes from 'prop-types';

const Header = ({title, onAdd,  showAdd,onSearch, showSearch}) => {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <Button onClick={onAdd} className={showAdd ? 'btn btn-close': 'btn btn-1'} text={showAdd ? 'Close': 'Add'}/>
            <Button onClick={onSearch} className={showSearch ? 'btn btn-close': 'btn btn-2'} text={showSearch ? 'Close': 'Search'}/>
        </header>
    )
}
Header.defaultProps ={
    title: "Amina Recipes"
}
Header.propTypes ={
    title: PropTypes.string.isRequired
}
export default Header
