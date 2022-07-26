import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <img src="https://www.themoviedb.org/t/p/original/tyQo080tijexyUHBvWPwQt26bZa.jpg" alt="" />
        <div className="bgcon">
            <div className="info">
                <img src="https://www.themoviedb.org/t/p/original/gV3a7KuOxN3KvwRtc1eW2tsRBAy.png" alt="" />
                <span className="disc">
                    Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more_info">
                        <InfoOutlined/>
                        <span>More info</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured