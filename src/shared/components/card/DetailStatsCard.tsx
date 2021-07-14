import { useEffect, useState } from 'react'
import { ReactComponent as Up } from '../../icons/icon-up.svg'
import { ReactComponent as Down } from '../../icons/icon-down.svg'
import './DetailStatsCard.scss'

type TrendState = 'no-change' | 'increase' | 'decrease'

export default function DetailStatsCard({
  icon,
  statsName,
  statsCount,
  statsPercentageDelta,
}: {
  icon: JSX.Element
  statsName: string
  statsCount: number
  statsPercentageDelta: number
}) {
  const [trendState, setTrendState] = useState<TrendState>('no-change')

  useEffect(() => {
    if (statsPercentageDelta > 0) {
      setTrendState('increase')
    } else if (statsPercentageDelta < 0) {
      setTrendState('decrease')
    }
  }, [statsPercentageDelta])

  const displayNumber = (x: number) => {
    let notationMode = x < 10000 ? 'standard' : 'compact'
    return new Intl.NumberFormat('en-US', { notation: notationMode }).format(
      Math.abs(x),
    )
  }

  return (
    <div className="detail-stats__item">
      <div>
        <p>{statsName}</p>
      </div>
      <div className="icon">{icon}</div>
      <div>
        <p>{displayNumber(statsCount)}</p>
      </div>
      <div className={trendState}>
        {trendState !== 'no-change' && (
          <div>
            {trendState === 'increase' && <Up height="10px" width="10px" />}
            {trendState === 'decrease' && <Down height="10px" width="10px" />}
          </div>
        )}
        <p>{displayNumber(statsPercentageDelta)}%</p>
      </div>
    </div>
  )
}
