import React from 'react';

class CityInformation extends React.Component {
    render(){
      const { cityInfo } = this.props;

        return(
            <div className='card'>
                <div className='card-header bg-info'>City Information</div>
                <div className='card-body text-center'>
                  <h1 className='card-title'>{ cityInfo.name } </h1>
                  <p className='card-text'> { cityInfo.name ? 'Lat/Lon: ' + cityInfo.coord.lat + ',' + cityInfo.coord.lon : 'Coord' }</p>
                  <hr className='m-1' />
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Temperature</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.main.temp + 'F': 'temp' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Pressure</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.main.pressure : 'pressure' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Humidity</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.main.humidity + '%' : '%' }</h5>
                    </div>
                  </div>
                  <div className='buffer'></div>
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Lowest Temp</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.main.temp_min + 'F': 'F' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Highest Temp</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.main.temp_max + 'F': 'F' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Wind Speed</p>
                      <h5 className='values'>{ cityInfo.name ? cityInfo.wind.speed + 'mph' : 'mph' }</h5>
                    </div>
                  </div>
                </div>
              </div>

        );
    }
}

export default CityInformation;