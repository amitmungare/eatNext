import Link from 'next/link';
import classes from './page.module.css';
import React, { Suspense } from 'react'
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

const MealsPage = () => {


  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '} <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<h2 className={classes.loading}>loading...</h2>}>
          <Meals/>
        </Suspense>
      </main> 
    </>
  )
}

export default MealsPage