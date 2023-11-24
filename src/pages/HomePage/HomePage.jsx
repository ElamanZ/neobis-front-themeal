import React, {useEffect, useState} from 'react';
import style from './homePage.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {getRandomFoods} from "../../store/foodSlice";
import loadingGif from '../../assets/images/PulseLoading.gif'
import {Link} from "react-router-dom";
import FoodSearch from "../../components/FoodSearch/FoodSearch";

function HomePage(props) {
    const dispatch = useDispatch()
    const {food, error} = useSelector(state => state.randomFoodReducer)

    useEffect(() => {
        dispatch(getRandomFoods())
    }, []);





    const mealPresent = food && food.meals && food.meals.length > 0;
    const meal = mealPresent ? food.meals[0] : null;
    const strMeal = mealPresent ? meal.strMeal : '';
    const strMealThumb = mealPresent ? meal.strMealThumb : '';
    const strCountry = mealPresent ? meal.strArea : '';
    const strCategory = mealPresent ? meal.strCategory : '';
    const strMealId = mealPresent ? meal.idMeal : '';
    return (
        <div className={style.container}>
            {mealPresent ? (
                    <div>
                        <div className={style.randomFoodBlock}>

                            <div className={style.randomFoodBlockText}>
                                <h2 className={style.randomFoodBlockTitle}>Meal of the Day</h2>
                                <p className={style.randomFoodTitleFood}>
                                    <Link to={`/${strMealId}`}>{strMeal}</Link>

                                </p>
                                <p className={style.randomFoodInfo}>{strCategory} | {strCountry}</p>
                            </div>
                            <div className={style.randomFoodBlockImg}>
                                <img src={strMealThumb} alt="strMealThumbLogo"/>
                            </div>
                        </div>

                        <FoodSearch/>

                    </div>

            ) : (
                <div className={style.loadingGif}>
                    <img  src={loadingGif} alt="loadingGif"/>
                </div>
            )}

        </div>
    );
}

export default HomePage;