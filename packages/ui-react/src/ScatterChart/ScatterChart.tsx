import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ChartElement from '../Chart';
import ScatterChartItemElement from '../ScatterChartItem';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-ScatterChart' });

export type IScatterChart = IChart & {

};

const ScatterChart: React.FC<IScatterChart> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyScatterChart?.props?.default, ...props_ };

  const Chart = theme?.elements?.Chart || ChartElement;

  const ScatterChartItem = theme?.elements?.ScatterChartItem || ScatterChartItemElement;

  const {
    values,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Chart
      values={values}

      className={classNames([
        staticClassName('ScatterChart', theme) && [
          'onesy-ScatterChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <ScatterChartItem
          key={index}

          {...item}
        />
      ))}
    </Chart>
  );
};

ScatterChart.displayName = 'onesy-ScatterChart';

export default ScatterChart;
