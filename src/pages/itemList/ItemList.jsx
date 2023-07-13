// import Item from "../../components/common/item/Item"
import ItemCard from "../../components/common/item/ItemCard"

const ItemList = ({ items, category }) => {

  console.log(category)
  return (

    <section style={{ padding: '5em', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '5em', backgroundColor: 'black' }}>


      {/* {category === undefined ? console.log(12) : console.log('nada')} */}
      {
        category === undefined ?
          items.map((item) => (
            <ItemCard key={item.id} item={item} />
          )) :
          items.filter((item) => item.category === category).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
      }

    </section>

  );

};

export default ItemList