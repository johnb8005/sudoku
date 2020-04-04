import React from 'react';

import * as SudokuSolve from './lib/sudoku';

const createArraySeqInt = (n = 9 ) => Array(...Array(n)).map((_, i) => i);

const styleTd = {
  border: 'solid thin',
  height: '2.4em',
  width: '2.4em',
  textAlign: 'center',
  padding: 0
};

export default class SudokuLayout extends React.Component {
  constructor(props) {
    super(props);

    const s = [
      null, null, null, 4, null, null, null, 8, null,
      null, null, 6, null, 8, null, 1, null, 3,
      null, 8, null, 1, null, 3, null, 5, null,
      2, null, null, null, 6, null, 8, null, 1,
      null, 6, null, 8, null, 1, null, 3, 4,
      null, null, 1, null, 3, 4, null, 6, null,
      null, 4, null, 6, 7, null, 9, null, 2,
      6, null, null, 9, null, 2, null, 4, 5,
      null, null, 2, null, null, null, null, null, null
    ];

    this.state = {s};
  }

  onChange = (k, v) => {
    const x = v.target.value;

    if(x ==='') {
      const { s } = this.state;

      s[k] = Number(x);

      this.setState(s);
    }

    if (Number(x) && x > 0) {
      const { s } = this.state;

      s[k] = Number(x);

      this.setState(s);
    }
  }

  handleSolve = () => {
    console.log('solve!')

    const s = SudokuSolve.solveWithInit(this.state.s);

    this.setState({s});
  }

  render() {
    const { s } = this.state;

    return (<div>
      <table style={{borderCollapse: 'collapse', fontFamily: 'Calibri, sans-serif'}}>
        <tbody>
          {createArraySeqInt().map(i => <tr key={i} style={i%3 === 2 ? {borderBottom: 'solid medium'} : {}}>{createArraySeqInt().map(j => {
            const k = i*9 + j;
            const v = Number(s[k]) && s[k] > 0 ? s[k] : '';
            return (<td key={j + '-' + i} style={j%3 === 2 ? {...styleTd, borderRight: 'solid medium'} : styleTd}>
              <input type="text" step="false" onChange={(x) => this.onChange(k, x)} value={v} style={{width: '100%', 'MozAppearance': 'textfield', border: 0}}/>
            </td>);
          })}</tr>)}
        </tbody>
      </table>
    <br/>
    <button className="btn btn-primary" onClick={this.handleSolve}>Solve</button>
    </div>);
  }
}
