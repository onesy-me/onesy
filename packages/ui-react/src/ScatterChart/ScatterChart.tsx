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

export interface IScatterChart extends IChart {

}

const ScatterChart: React.FC<IScatterChart> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyScatterChart?.props?.default, ...props_ }), [props_]);

  const Chart = React.useMemo(() => theme?.elements?.Chart || ChartElement, [theme]);

  const ScatterChartItem = React.useMemo(() => theme?.elements?.ScatterChartItem || ScatterChartItemElement, [theme]);

  const {
    values,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Chart
      ref={ref}

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
});

ScatterChart.displayName = 'onesy-ScatterChart';

export default ScatterChart;
