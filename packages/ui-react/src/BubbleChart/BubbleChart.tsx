import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ChartElement from '../Chart';
import LineElement from '../Line';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import BubbleChartItemElement from '../BubbleChartItem';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .onesy-Chart-legend-icon': {
      position: 'relative',
      background: 'none !important',
      border: '2px solid currentColor',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        borderRadius: 'inherit',
        background: 'currentColor',
        opacity: '0.14'
      }
    }
  },

  append_wrapper: {
    userSelect: 'none',
    pointerEvents: 'none'
  },

  append: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(1.5, 'px')
  },

  append_icon: {
    width: '8px',
    height: '8px',
    borderRadius: theme.methods.shape.radius.value(40, 'px')
  }
}), { name: 'onesy-BubbleChart' });

export type IBubbleChart = IChart & {

};

const BubbleChart: React.FC<IBubbleChart> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBubbleChart?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Chart = React.useMemo(() => theme?.elements?.Chart || ChartElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const BubbleChartItem = React.useMemo(() => theme?.elements?.BubbleChartItem || BubbleChartItemElement, [theme]);

  const {
    tonal = true,

    color = 'primary',

    names,

    values,

    animate,

    animateTimeout,

    tooltipRender: tooltipRender_,

    tooltipGroupRender: tooltipGroupRender_,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const tooltipRender = is('function', tooltipRender_) ? tooltipRender_ : (values_: any) => {
    const {
      values: values__
    } = values_;

    return {
      element: (
        <Line
          tonal={tonal}

          color={color}

          elevation={1}

          gap={0.5}

          direction='column'

          Component={Surface}

          className={classNames([
            staticClassName('BubbleChart', theme) && [
              'onesy-BubbleChart-append'
            ],

            classes.append
          ])}
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'
            >
              {values__?.[3]}
            </Type>
          </Line>

          <Line
            gap={0.4}

            direction='column'
          >
            <Line
              gap={1}

              direction='row'

              align='center'
            >
              <Type
                version='b3'

                style={{
                  fontWeight: 600
                }}
              >
                {names?.y || 'y'}
              </Type>

              <Type
                version='b3'
              >
                {values__?.[1]}
              </Type>
            </Line>

            <Line
              gap={1}

              direction='row'

              align='center'
            >
              <Type
                version='b3'

                style={{
                  fontWeight: 600
                }}
              >
                {names?.x || 'x'}
              </Type>

              <Type
                version='b3'
              >
                {values__?.[0]}
              </Type>
            </Line>

            <Line
              gap={1}

              direction='row'

              align='center'
            >
              <Type
                version='b3'

                style={{
                  fontWeight: 600
                }}
              >
                {names?.size || 'Size'}
              </Type>

              <Type
                version='b3'
              >
                {values__?.[2]}
              </Type>
            </Line>
          </Line>
        </Line>
      )
    };
  };

  const tooltipGroupRender = is('function', tooltipGroupRender_) ? tooltipGroupRender_ : (groups: any, groupsSorted: string[]) => {

    return (
      <Line
        tonal={tonal}

        color={color}

        elevation={1}

        gap={0.25}

        direction='column'

        Component={Surface}

        className={classNames([
          staticClassName('BubbleChart', theme) && [
            'onesy-BubbleChart-append'
          ],

          classes.append
        ])}
      >
        <Line
          gap={1}

          direction='column'

          style={{
            width: '100%'
          }}
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {l('Label')}
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.y || 'y'}
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.x || 'x'}
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.size || l('Size')}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='column'
          >
            {groupsSorted.map((group: string, index: number) => (
              <Line
                key={index}

                gap={1}

                direction='column'

                style={{
                  width: '100%'
                }}
              >
                <span
                  className={classNames([
                    staticClassName('BubbleChart', theme) && [
                      'onesy-BubbleChart-append-icon'
                    ],

                    classes.append_icon
                  ])}

                  style={{
                    background: !theme.palette.color[group] ? group : theme.palette.color[group][groups[group][0]?.item?.tone || 'main']
                  }}
                />

                <Line
                  gap={0}

                  direction='column'

                  style={{
                    width: '100%'
                  }}
                >
                  {groups[group].map((item: any, index_: number) => (
                    <Line
                      key={index_}

                      gap={1}

                      direction='row'

                      style={{
                        width: '100%'
                      }}
                    >
                      <Type
                        version='b3'
                      >
                        {item?.values?.[3]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[1]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[0]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[2]}
                      </Type>
                    </Line>
                  ))}
                </Line>
              </Line>
            ))}
          </Line>
        </Line>
      </Line>
    );
  };

  values.sort((a, b) => a.values?.[2] - b.values?.[2]);

  const minSize = values[0]?.values?.[2];

  const maxSize = values[values.length - 1]?.values?.[2];

  return (
    <Chart
      ref={ref}

      tonal={tonal}

      color={color}

      values={values}

      pointsVisibility='hidden'

      elementTooltip

      tooltipRender={tooltipRender}

      tooltipGroupRender={tooltipGroupRender}

      className={classNames([
        staticClassName('BubbleChart', theme) && [
          'onesy-BubbleChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <BubbleChartItem
          key={index}

          animate={animate}

          animateTimeout={animateTimeout}

          minSize={minSize}

          maxSize={maxSize}

          {...item}
        />
      ))}
    </Chart>
  );
});

BubbleChart.displayName = 'onesy-BubbleChart';

export default BubbleChart;
