import React, { Component } from 'react'
import Card from './component/Card'
import Serchbox from './component/Serchbox'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:[],
      searchbar:''
       
    }
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`).then(res=>res.json()).then(a=>
    this.setState({data:a.results}))
  }


  render() {
   let {data , searchbar} =this.state;
    let filter= data.filter((e)=>(e.original_title.toLowerCase().includes(searchbar.toLowerCase())))
// console.log(this.state.data);
    return (
      <>
    <div className="container">
      <div className="row">
        {/* <input type="text" placeholder='serch' onChange={(e)=>this.setState({searchbar:e.target.value})}/> */}
        <Serchbox change={(e)=>this.setState({searchbar:e.target.value})}/>
        {
      filter.map((e)=><Card img={e.backdrop_path} title={e.original_title} overview={e.overview}/>)
        }
      </div>
    </div>
      </>
    )
  }
}

export default App
