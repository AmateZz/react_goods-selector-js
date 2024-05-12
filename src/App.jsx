import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goodText, setGoodText] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodText.length ? null : `No goods selected`}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {goodText.length ? `${goodText} is selected` : null}
        {goodText.length ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGoodText('');
            }}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                goodText === good ? 'has-background-success-light' : null
              }
            >
              <td>
                <button
                  data-cy={goodText === good ? `RemoveButton` : `AddButton`}
                  type="button"
                  className={`button ${goodText === good ? `is-info` : null}`}
                  onClick={() => {
                    if (goodText === good) {
                      setGoodText('');
                    } else {
                      setGoodText(good);
                    }
                  }}
                >
                  {goodText === good ? `-` : `+`}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
