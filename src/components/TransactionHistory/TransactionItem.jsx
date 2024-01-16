import css from './TransactionHistory.module.css'

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr className={css.row}>
          <td className={css.data}>{type}</td>
          <td className={css.data}>{amount}</td>
          <td className={css.data}>{currency}</td>
        </tr>
    )
}