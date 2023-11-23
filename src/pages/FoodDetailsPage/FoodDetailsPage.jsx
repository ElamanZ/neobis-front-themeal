import React, {useEffect} from 'react';
import style from '../FoodDetailsPage/foodDetails.module.css'
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {getFoodsDetails} from "../../store/foodDetailSlice";
import loadingGif from "../../assets/images/PulseLoading.gif";

function FoodDetailsPage(props) {

    const dispatch = useDispatch()
    const {food, error} = useSelector(state => state.randomFoodReducer)

    useEffect(() => {
        dispatch(getFoodsDetails())
    }, []);


    const mealPresent = food && food.meals && food.meals.length > 0;
    const meal = mealPresent ? food.meals[0] : null;
    const strMeal = mealPresent ? meal.strMeal : '';
    const strMealThumb = mealPresent ? meal.strMealThumb : '';
    const strCountry = mealPresent ? meal.strArea : '';
    const strCategory = mealPresent ? meal.strCategory : '';
    const strYoutube = mealPresent ? meal.strYoutube : '';
    const strInstructions = mealPresent ? meal.strInstructions : '';


    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (mealPresent && meal[ingredientKey] && meal[ingredientKey].trim() !== '') {
            ingredients.push(
                <div key={i}>
                    <p>{meal[ingredientKey]}: <b>{meal[measureKey]}</b></p>
                </div>
            );
        }
    }



    return (
        <div className={style.foodDetails}>
            {mealPresent ? (
            <div className={style.foodDetailsBlock}>
                <div className={style.foodInfoBlock}>
                    <div className={style.foodDetailText}>
                        <p className={style.foodDetailTitle}>{strMeal}</p>
                        <p className={style.foodDetailInfo}>{strCategory} | {strCountry}</p>
                        <div className={style.ingredients}>
                            <p>{ingredients}</p>
                        </div>
                    </div>
                    <div className={style.foodDetailImg}>
                        <img src={strMealThumb} alt={strMeal}/>
                    </div>
                </div>
                <div className={style.foodInstruction}>
                    <h2 className={style.foodInstructionTitle}>Instruction</h2>
                    <p className={style.foodInstructionText}>{strInstructions}</p>
                    <Link to={strYoutube} className={style.foodInstructionBtnYouTube}>Watch on YouTube</Link>
                </div>
            </div>


            ) : (
            <div className={style.loadingGif}>
                <img  src={loadingGif} alt="loadingGif"/>
            </div>
            )}
        </div>
    );
}

export default FoodDetailsPage;