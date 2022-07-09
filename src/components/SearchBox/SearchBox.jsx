import React from 'react'
import Search from 'antd/lib/input/Search'

const SearchBox = () => {
  return (
    <div>
        <Search
            placeholder="account id or address"
            style={{
                width: 200,
            }}
        />
    </div>
  )
}

export default SearchBox