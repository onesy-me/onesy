import React from 'react';

import { clamp, is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ChartElement from '../Chart';
import ColumnChartItemElement from '../ColumnChartItem';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-ColumnChart' });

export type IColumnChart = IChart & {

};

const ColumnChart: React.FC<IColumnChart> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyColumnChart?.props?.default, ...props_ };

  const Chart = theme?.elements?.Chart || ChartElement;

  const ColumnChartItem = theme?.elements?.ColumnChartItem || ColumnChartItemElement;

  const {
    values,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [rects, setRects] = React.useState<any>();

  const onUpdateRects = (valueNew: any) => {
    setRects(valueNew);
  };

  const wrapperRect = rects?.wrapper;

  const widthItem = wrapperRect ? clamp(wrapperRect?.width / (values.length * 2), undefined, 40) : undefined;

  return (
    <Chart
      ref={ref}

      values={values}

      pointsVisibility='hidden'

      elementTooltip

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('ColumnChart', theme) && [
          'onesy-ColumnChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <ColumnChartItem
          key={index}

          width={widthItem}

          {...item}
        />
      ))}
    </Chart>
  );
});

ColumnChart.displayName = 'onesy-ColumnChart';

export default ColumnChart;
