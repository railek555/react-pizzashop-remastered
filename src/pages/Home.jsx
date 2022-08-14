import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

  const [items, setItems] = React.useState([]);
  const [isLoadng, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sort: 'rating'});
  
  console.log(categoryId, sortType)

const order = sortType.sort.includes('-') ? 'desc' : 'asc';
const sortBy = sortType.sort.replace('-','');
const category = categoryId > 0 ? `category=${categoryId}` : '';
  
  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://62d932349eedb6996355eec9.mockapi.io/pizzas?
    ${category}
    &sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
      window.scrollTo(0,0);
  }, [categoryId, sortType]);



  return (
    <>
          <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
            <Sort value={sortType} onClickSortType={(id) => setSortType(id)}/>
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