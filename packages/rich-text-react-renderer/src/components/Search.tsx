import React from 'react'

type SearchProps = {
    node: any;
    children: any;
}

export default function Search({node, children}: SearchProps) {
    console.log({node, children});
    
  return (
    <div>Search</div>
  )
}
