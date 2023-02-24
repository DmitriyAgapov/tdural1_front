import {SellBigSVG} from "#/components/Icons";

export const Badge = ({className = null, text}) => {
  return (
      <div className={`badge ${className}`}>
          <SellBigSVG />
        <span className={'badge__value'}>{text}</span></div>
  )
}