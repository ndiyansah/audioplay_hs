import React from 'react'
import Icon from '../Icon'
import { SearchBarWrapper, SearchInputStyled, Wrapper} from "../../theme/MainStyle/Search"

const ItunesSearch = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  onSearch,
  style,
  instant,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (onSearch !== undefined) {
          onSearch()
        }
      }}
    >
      <SearchBarWrapper style={style}>
        <Wrapper>
          <SearchInputStyled
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              onChange(e.target.value)

              if (instant && onSearch) {
                onSearch()
              }
            }}
            onKeyDown={onKeyDown}
            onSubmit={onSearch}
          />
           <Icon name="search" />
        </Wrapper>
      </SearchBarWrapper>
    </form>
  )
}

export default ItunesSearch;
