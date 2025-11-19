import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ChartElement from '../Chart';
import { IChart } from '../Chart/Chart';
import AreaChartItemElement from '../AreaChartItem';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-AreaChart' });

export type IAreaChart = IChart & {
  smooth?: boolean;

  smoothRatio?: number;

  linearGradient?: boolean;
};

const AreaChart: React.FC<IAreaChart> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAreaChart?.props?.default, ...props_ };

  const Chart = theme?.elements?.Chart || ChartElement;

  const AreaChartItem = theme?.elements?.AreaChartItem || AreaChartItemElement;

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
        staticClassName('AreaChart', theme) && [
          'onesy-AreaChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <AreaChartItem
          key={index}

          {...item}
        />
      ))}
    </Chart>
  );
};

AreaChart.displayName = 'onesy-AreaChart';

export default AreaChart;
