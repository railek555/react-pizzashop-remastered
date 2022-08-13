import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

  const [items, setItems] = React.useState([]);
  const [isLoadng, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(555);
  const [sortType, setSortType] = React.useState(0);
  
  
  React.useEffect(() => {
    fetch('https://62d932349eedb6996355eec9.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
      window.scrollTo(0,0);
  }, []);

  return (
    <>
          <div className="content__top">
            <Categories value={categoryId} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoadng
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        
        </>
  )
}

export default Home;