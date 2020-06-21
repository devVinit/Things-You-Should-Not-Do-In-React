import React, { Component, useState } from 'react';

export default class Case1 extends Component {
    constructor() {
        super();
        this.state = {
            array: [1, 2, 3, 4]
        }

        this.onClickRemoveElementFromArray = this.onClickRemoveElementFromArray.bind(this);
    }

    onClickRemoveElementFromArray() {

        // should not do
        // const _array = this.state.array;
        // _array.splice(1, 1);
        // this.setState({ array: _array });

        //should do 
        this.setState((prevState) => {
            const array = [...prevState.array];
            array.splice(1, 1);
            return {
                array
            }
        });
    }

    render() {
        return (
            <div>
                <span>{JSON.stringify(this.state)}</span>
                <button onClick={this.onClickRemoveElementFromArray}>Remove</button>
            </div>
        );
    }
}

// const Case1 = () => {
//     const [array, setArray] = useState([1, 2, 3, 4]);

//     const onClickRemoveElementFromArray = () => {
//         setArray(() => {
//             const _array = [...array];
//             _array.splice(1, 1);
//             return _array;
//         });
//     }

//     return <div>
//         <span>{JSON.stringify(array)}</span>
//         <button onClick={onClickRemoveElementFromArray}>Remove</button>
//     </div>
// }

// export default Case1;
