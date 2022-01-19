import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";
import { useGetShowListQuery } from '../../store/services/show';
import { searchResults } from '../../store/slices/searchShowSlice';
import ErrorWhileLoading from "../../components/errors/ErrorWhileLoading";
import ContentIsLoading from "../../components/loading/ContentIsLoading";
import DisplayInformation from "../../components/tools/DisplayInformation";
import Header from "../../components/header/Header";
import Show from "./Show";
import './showList.scss'

const ShowList = () => {
  const showListAvailable = useAppSelector(({ searchedShow }) => searchedShow.showList)
  const searchInput = useAppSelector(({ searchedShow }) => searchedShow.searchInput)
  const showGrid = useAppSelector(({ searchedShow }) => searchedShow.showGrid)
  const dispatch = useAppDispatch()

  const {
    data, error, isLoading, isError,
  } = useGetShowListQuery(searchInput);

  useEffect(() => {
    dispatch(searchResults(data))
  }, [data, dispatch])

  if (error || isError) {
    return (
      <ErrorWhileLoading />
    );
  }

  if (isLoading || !showListAvailable) {
    return (
      <ContentIsLoading />
    );
  }

  return (
    <div className="show-section">
      <Header />

      {showListAvailable.length > 0 && <DisplayInformation />}
      <div className={`show-container ${!showGrid && 'list-show'}`}>
        {showListAvailable.map(({ show: {
          id, name, image, genres, summary
        } }) => {
          return (
            <Show
              key={id}
              id={id}
              title={name}
              imgLink={image}
              genres={genres}
              summary={summary}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShowList
