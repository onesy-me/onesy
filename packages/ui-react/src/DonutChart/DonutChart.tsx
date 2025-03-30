import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import PieChartElement from '../PieChart';
import { IPieChart } from '../PieChart/PieChart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .onesy-Chart-legend-icon': {
      position: 'relative',
      background: 'none !important',
      border: '2px solid currentColor'
    }
  }
}), { name: 'onesy-DonutChart' });

export type IDonutChart = IPieChart & {

};

const DonutChart: React.FC<IDonutChart> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDonutChart?.props?.default, ...props_ }), [props_]);

  const PieChart = React.useMemo(() => theme?.elements?.PieChart || PieChartElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <PieChart
      ref={ref}

      innerOffset={0.64}

      className={classNames([
        staticClassName('DonutChart', theme) && [
          'onesy-DonutChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DonutChart.displayName = 'onesy-DonutChart';

export default DonutChart;
