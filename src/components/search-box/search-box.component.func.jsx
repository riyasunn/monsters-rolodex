// import { Component } from "react";
import './search-box.style.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
        <div>
          <input
            className= {className}
            type="search"
            placeholder= {placeholder}
            onChange={onChangeHandler}
          />
        </div>
)
export default SearchBox;

// class SearchBox extends Component {
//     render() {
//       return (
//         <div>
//           <input
//             className= {this.props.className}
//             type="search"
//             placeholder= {this.props.placeholder}
//             onChange={this.props.onChangeHandler}
//           />
//         </div>
//       );
//     }
//   }