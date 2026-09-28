import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              {item.q}<Plus size={20} />
            </button>
            <div className="faq__a"><div><p>{item.a}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}
