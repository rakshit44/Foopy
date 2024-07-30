import React from 'react';
import {SparklineComponent, Inject,  
  SparklineTooltip, 
  } from '@syncfusion/ej2-react-charts';
 
  class SparkLine extends React.PureComponent{
    render(){const  {id,heigth,width,color,
      data,type,currentColor}= this.props;

    
  
    
  return (
    <SparklineComponent
        id={id}
        height={heigth}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{color:currentColor,width:2}}
        tooltipSettings={{
          visible: true,
          formate: '${x} :data${yval}',
          trackLineSettings: {
            visible :true,
          }
        }}
        markerSettings={{visible: ['All'],size:2.5,fill: currentColor}}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        >
      <Inject services={[SparklineTooltip]}  />
    </SparklineComponent>
  );
  
}
}


export default SparkLine;