import { TransactionItem } from "./TransactionItem";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <div className={css.container}>
            <table className={css.table}>
             <thead className={css.head}>
               <tr className={css.row}>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
              </tr>
             </thead>
             <tbody className={css.body}>
            {items.map(({ type, amount, currency, id }) => {
                return  <TransactionItem
                    type={type}
                    amount={amount}
                    currency={currency}
                    key={id}
                />;
                    })}
             </tbody>
            </table>
        </div>
    )
}

