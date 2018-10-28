import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  state = { loading: false, results: [] };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ loading: true });
    if (value.length > 0) { 
      axios.get('/search.json', { params: { query: value } })
        .then(res => this.setState({ loading: false, results: res.data }))
        .catch(() => this.setState({ loading: false, results: [] }));
    } else {
      this.setState({ loading: false, results: [] });
    }
  }

  render() {
    return (
      <div className="ui raised segment no padding">
        <form method="GET" action="search">
          <div className="ui fluid icon transparent large input">
            <input name="query" type="text" placeholder="Search apps..." onChange={this.onChange} autoComplete="off" />
            <button type="submit">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}



/* 

- To start, we defined our components state (and initial state) to include our search results and whether or not we’re currently loading/fetching new results.

- Next, we wrote our onChange function which gets called each time the value in the search field changes. We use axios to send an http request to our new /search.json endpoint with the current search field text. Axios will either successfully fetch results in which case we update our state to include the results, or it will fail and we update our state to have no results.

- Our render function stays almost the same. We alter the input field by adding an onChange handler and pointing to the onChange function we just wrote.

*/