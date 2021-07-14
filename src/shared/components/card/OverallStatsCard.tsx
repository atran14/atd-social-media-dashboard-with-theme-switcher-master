import { useEffect, useState } from 'react'
import './OverallStatsCard.scss'
import { ReactComponent as Up } from '../../icons/icon-up.svg'
import { ReactComponent as Down } from '../../icons/icon-down.svg'

type TrendState = 'no-change' | 'increase' | 'decrease'

export default function OverallStatsCard({
  icon,
  primaryColor,
  handleName,
  statsCount,
  statsDelta,
  altStatsUnit,
}: {
  icon: JSX.Element
  primaryColor: string
  handleName: string
  statsCount: number | string
  statsDelta: number
  altStatsUnit?: string
}) {
  const [trendState, setTrendState] = useState<TrendState>('no-change')

  useEffect(() => {
    if (statsDelta > 0) {
      setTrendState('increase')
    } else if (statsDelta < 0) {
      setTrendState('decrease')
    }
  }, [statsDelta])

  return (
    <div
      style={{
        position: 'relative',
        background: primaryColor,
        padding:"3px 0 0 0",
        borderRadius: "5px",
        overflow:'hidden'
      }}
    >
      <div className="overall-stats__item">
        <div>
          {icon}
          <p>{handleName}</p>
        </div>
        <p>{statsCount}</p> <p>{altStatsUnit ?? 'Followers'}</p>
        <div className={`${trendState}`}>
          {trendState !== 'no-change' && (
            <div style={{ paddingTop: '0.5rem' }}>
              {trendState === 'increase' && <Up height="10px" width="10px" />}
              {trendState === 'decrease' && <Down height="10px" width="10px" />}
            </div>
          )}
          <p>{Math.abs(statsDelta)} Today</p>
        </div>
      </div>
    </div>
  )
}
