import React, {useEffect, useState} from 'react';
import style from '../../pages/HomePage/homePage.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {getFoodSearch} from "../../store/foodSearchSlice";
import {useParams, Link} from "react-router-dom";

function FoodSearch(props) {
    const dispatch = useDispatch()


    const { value } = useParams();
    const { foodSearch } = useSelector((state) => state.foodSearchReducer);

    const [searchValue, setSearchValue] = useState('');


    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getFoodSearch(searchValue));
        setSearchValue('')
    };

    useEffect(() => {
        dispatch(getFoodSearch(value));
    }, [dispatch, value]);

    return (
        <div>

            <h2 className={style.searchTitle}>Find your Meal</h2>
            <form className={style.searchBlock} onSubmit={handleSubmit}>
                <input
                    className={style.searchInput}
                    type="text"
                    placeholder='Find your meal'
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <button
                    className={style.searchBtn}
                    type='submit'
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </form>

            {
                foodSearch && foodSearch.meals && Array.isArray(foodSearch.meals) && foodSearch.meals.map((meal, key) =>
                    <div key={key}>
                        <Link to={`/${meal.idMeal}`}>
                            <div className={style.mealsBlock}>
                                <img className={style.mealImg} src={meal.strMealThumb} alt=""/>
                                <div>
                                    <h3 className={style.mealTitle}>{meal.strMeal}</h3>
                                    <p className={style.mealInfo}>{meal.strCategory} | {meal.strArea}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }



        </div>
    );
}

export default FoodSearch;