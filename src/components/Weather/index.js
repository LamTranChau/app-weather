import { useMemo } from 'react'
import './styles.css'
import { getWeather } from '../../apis/weather'
const Weather = () => {
  // tim trong du lieu tra ve icon 
  // const src = useMemo(() => {
  //   return `http://openweathermap.org/img/wn/${}@2x.png`
  // }, [data])

  return (
    <div className='weather'>
      <div className='general'>
        <div className='location'></div>
        <div></div>
        <img alt='' />
        <div className='temperature'><sup>o</sup></div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>temperature min</h6>
            <div className='value'><sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>temperature max</h6>
            <div className='value'><sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>Visibility</h6>
            <div className='value'>kaka</div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>pressure</h6>
            <div className='value'>Bobo</div>
          </div>
          <div className='detail'>
            <h6 className='label'>humidity</h6>
            <div className='value'>Hello</div>
          </div>
          <div className='detail'>
            <h6 className='label'>Wind speed</h6>
            <div className='value'>Sức gió</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather




/*
  v control
  Git (cmd / sourcetree)
  Github / Gitlab

  Quy trinh` lam viec
  Agile (Scrum / Kanban)
  Jira / ClickUp / Asana

  Javascrip (Typecript): Giỏi Javascrip, có thể code được tất cả. 

  fontend
  React 
  React Router  : Điều hướng
  Redux : Hỗ trợ truyền dữ liệu. 

  CSS (Scss,Less) : style cho thẻ Dom
  HTML5
  API (GrapQL)

  Luyện tập : HackerRank (Logic), Doulingo (tiếng anh).


  Font end, Back end, mobile, dev Op, 
*/