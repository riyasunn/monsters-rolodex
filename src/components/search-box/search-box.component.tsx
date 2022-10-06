// import { Component } from "react";
import './search-box.style.css';
import { ChangeEvent, ChangeEventHandler } from 'react';

type SearchBoxProps = {
  className:string;
  placeholder?:string;
  // onChangeHandler:ChangeEventHandler<HTMLInputElement>;
  onChangeHandler:(event:ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}:SearchBoxProps) => (
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