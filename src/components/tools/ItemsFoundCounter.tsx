import { useAppSelector } from "../../store/redux/hooks";

const ItemsFoundCounter = () => {

  const amountOfShowFound = useAppSelector(({ searchedShow }) => searchedShow.showList.length)

  return (
    <div>
      {amountOfShowFound ? amountOfShowFound : ''}
    </div>
  )
}
export default ItemsFoundCounter