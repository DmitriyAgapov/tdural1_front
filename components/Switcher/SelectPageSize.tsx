'use client'
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import {usePathname, useRouter} from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import {useState} from "react";
const SelectPageSize = ({pageSize}) => {
    // console.log('pageSize', pageSize)
    const router = useRouter();
    const store = useStore(OrderStore)
    const [value, setValue] = useState(pageSize||25)
    let searchParams = useSearchParams();
    const pathname = usePathname();
    // const pageSize = searchParams.get('pageSize');
    const handleChange = (event) => {
        router.push(`${pathname}?pageSize=${event.target.value}`)
        store.setPageSize(event.target.value);
        setValue(event.target.value);
    }
  return (
      <div className={'select-page-size'}>
          <label className="block">
              <span className="text-slate-500 text-sm">На странице</span>
              <select className="block w-full mt-1" value={value} onChange={handleChange}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
              </select>
          </label>
      </div>
  )
}

export default SelectPageSize