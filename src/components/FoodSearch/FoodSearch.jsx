import React from 'react';
import style from '../FoodSearch/foodSearch.module.css'
function FoodSearch(props) {
    return (
        <div>
            <h2 className={style.searchTitle}>Find your Meal</h2>
            <form className={style.searchBlock}>
                <input className={style.searchInput} type="text" placeholder='Find your meal'/>
                <button className={style.searchBtn} type='submit'>Search</button>
            </form>
        </div>
    );
}

export default FoodSearch;