import React from 'react';

import { is, copy, percentageFromValueWithinRange, unique } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import ChartElement from '../Chart';
import PathElement from '../Path';
import useMediaQuery from '../useMediaQuery';
import { IChart } from '../Chart/Chart';
import { angleToCoordinates, staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .onesy-Chart-wrapper': {
      aspectRatio: '1',
      maxWidth: '240px',
      height: 'unset',
      overflow: 'hidden'
    }
  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '10px',
    height: '2px'
  },

  text: {
    ...theme.typography.values.b3,
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
    userSelect: 'none'
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
}), { name: 'onesy-PieChart' });

export type IPieChart = IChart & {
  gap?: number;
  innerOffset?: number;
};

const PieChart: React.FC<IPieChart> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyPieChart?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Chart = React.useMemo(() => theme?.elements?.Chart || ChartElement, [theme]);

  const Path = React.useMemo(() => theme?.elements?.Path || PathElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    values,

    animate: animate_,

    animateTimeout: animateTimeout_,

    names,

    gap = 4,

    innerOffset = 0,

    tooltipRender: tooltipRender_,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined),
    rects: React.useRef<any>(undefined),
    pathStyle: React.useRef<any>(undefined),
    animate: React.useRef<any>(undefined),
    animateTimeout: React.useRef<any>(undefined),
    init: React.useRef<any>(undefined),
    theme: React.useRef<any>(undefined)
  };

  const keys = React.useMemo(() => {
    const result = [];
    const items = [animate_, animateTimeout_];

    items.forEach(item => {
      if (is('object', item)) Object.keys(item).filter(key => theme.breakpoints.media[key]).forEach(key => result.push(key));
    });

    return unique(result);
  }, [animate_, animateTimeout_]);

  const breakpoints = {};

  keys.forEach(key => {
    breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const animate = valueBreakpoints(animate_, true, breakpoints, theme);
  const animateTimeout = valueBreakpoints(animateTimeout_, 140, breakpoints, theme);

  const [value, setValue] = React.useState<any>();
  const [init, setInit] = React.useState<any>();

  refs.theme.current = theme;

  refs.animate.current = animate;

  refs.animateTimeout.current = animateTimeout;

  refs.init.current = init;

  const LegendItem = React.useCallback((props__: any) => {
    const {
      item = {},

      className: className_,

      ...other_
    } = props__;

    const {
      color: color_,
      tone = 'main',

      name = 'No name'
    } = item;

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...LegendItemProps}

        className={classNames([
          staticClassName('PieChart', theme) && [
            'onesy-PieChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other_}
      >
        <span
          className={classNames([
            staticClassName('PieChart', theme) && [
              'onesy-PieChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]
          }}
        />

        <Type
          version='b3'
        >
          {name}
        </Type>
      </Line>
    );
  }, [theme]);

  const make = () => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rects.current && values) {
      const { width } = refs.rects.current.wrapper;

      // Legend
      const legend_ = values.map((item: any) => {

        return {
          item,

          element: (
            <LegendItem
              item={item}
            />
          )
        };
      });

      const center = width / 2;

      const radius = (width / 2) - (gap / 2);

      const total = 360;

      const valueTotal = values.reduce((result, itemValue) => result += itemValue.values[0], 0);

      const angles: any = {
        start: angleToCoordinates(0, center, center, radius)
      };

      let anglePrevious = 0;

      let anglePreviousInner = 0;

      let value_ = [];

      let d = '';

      // Elements
      const elements_ = copy(values).map((item, index: number) => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const partPercentage = percentageFromValueWithinRange(item.values[0] as number, 0, valueTotal);

        let part = total * (partPercentage / 100);

        if (partPercentage === 100) part -= 0.0001;

        const startInner = angleToCoordinates(anglePreviousInner, center, center, radius * innerOffset);

        // Move from inner value
        if (index === 0) value_.push(
          'M', startInner.x, startInner.y,
          // Move to 0 deg
          'L', angles.start.x, angles.start.y
        );

        const angleEnd = anglePrevious + part;

        const angleEndInner = anglePreviousInner + part;

        const angleText = anglePrevious + (part / 2);

        const angleTextCoordinates = angleToCoordinates(angleText, center, center, (radius - (radius - (radius * innerOffset)) / 2));

        angles.end = angleToCoordinates(angleEnd, center, center, radius);

        angles.endInner = angleToCoordinates(angleEndInner, center, center, radius * innerOffset);

        angles.move = angleToCoordinates(angleEnd, center, center, radius);

        angles.moveInner = angleToCoordinates(angleEnd, center, center, radius * innerOffset);

        // Arc
        let invert = 0;

        if (part > 180) invert = 1;

        value_.push(
          'A', radius, radius, 0, invert, 1, angles.end.x, angles.end.y
        );

        // To donut value or center
        if (innerOffset) {
          const endInner = angleToCoordinates(angleEndInner, center, center, radius * innerOffset);

          value_.push(
            'L', endInner.x, endInner.y
          );

          value_.push(
            'A', radius * innerOffset, radius * innerOffset, 0, invert, 0, startInner.x, startInner.y
          );
        }

        value_.push(
          'Z'
        );

        // path
        d = value_.join(' ');

        anglePrevious = angleEnd;

        anglePreviousInner = angleEndInner;

        // Move for the next value
        if (index < values.length - 1) {
          value_ = [
            'M', angles.moveInner.x, angles.moveInner.y,
            'L', angles.move.x, angles.move.y
          ];
        }

        return {
          item,

          element: (
            <g>
              <Path
                d={d}

                fill={!refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]}

                stroke={gap > 0 ? refs.theme.current.palette.background.default.primary : 'none'}

                strokeWidth={gap}

                {...PathProps}

                style={{
                  ...PathProps?.style,

                  ...((refs.animate.current && refs.init.current !== 'animated') && {
                    opacity: 0,

                    transform: 'scale(0)'
                  }),

                  transformBox: 'fill-box',

                  transformOrigin: 'center',

                  ...refs.pathStyle.current
                }}
              />

              {partPercentage >= 7 && (
                <text
                  x={angleTextCoordinates.x}

                  y={angleTextCoordinates.y}

                  className={classNames([
                    staticClassName('PieChart', theme) && [
                      'onesy-PieChart-text'
                    ],

                    classes.text
                  ])}

                  fill={refs.theme.current.methods.palette.color.text(!refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone], true, 'light')}

                  style={{
                    ...PathProps?.style,

                    ...((refs.animate.current && refs.init.current !== 'animated') && {
                      opacity: 0
                    }),

                    ...((refs.animate.current && refs.init.current === 'animated') && {
                      opacity: 1
                    }),

                    ...refs.pathStyle.current
                  }}
                >
                  {`${partPercentage.toFixed(1)}%`.replace('.0%', '%')}
                </text>
              )}
            </g>
          )
        };
      });

      // Sort
      elements_.sort((a, b) => a?.item?.values?.[0] - b?.item?.values?.[0]);

      // Update children value
      setValue({
        legend: legend_,

        elements: elements_
      });
    }
  };

  const initMethod = React.useCallback(() => {
    if (animate) {
      if (!init) {
        refs.pathStyle.current = {
          transition: theme.methods.transitions.make(['transform', 'opacity'], { timing_function: 'decelerated' })
        };

        setInit(true);

        setTimeout(() => {
          refs.pathStyle.current = {
            ...refs.pathStyle.current,

            opacity: 1,

            transform: 'scale(1)'
          };

          setInit('animated');
        }, refs.animateTimeout.current);
      }
    }
  }, [init, animate]);

  React.useEffect(() => {
    make();

    initMethod();
  }, [values, theme, animate, init]);

  const onUpdateRects = (valueNew: any) => {
    refs.rects.current = valueNew;

    make();
  };

  const tooltipRender = is('function', tooltipRender_) ? tooltipRender_ : (values_: any) => {
    const {
      name,

      color: color_,

      tone = 'main',

      values: values__
    } = values_;

    const valueTotal = values.reduce((result, itemValue) => result += itemValue.values[0], 0);

    const valueValue = values__[0];

    const valuePercentage = (((valueValue / valueTotal) * 100).toFixed(1)).replace('.0', '');

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
            staticClassName('PieChart', theme) && [
              'onesy-PieChart-append'
            ],

            classes.append
          ])}
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <span
              className={classNames([
                staticClassName('PieChart', theme) && [
                  'onesy-LineChart-append-icon'
                ],

                classes.append_icon
              ])}

              style={{
                background: !refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]
              }}
            />

            <Type
              version='b3'
            >
              {name}
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
                {names?.value || l('Value')}
              </Type>

              <Type
                version='b3'
              >
                {valueValue}
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
                {names?.percentage || l('Percentage')}
              </Type>

              <Type
                version='b3'
              >
                {valuePercentage}%
              </Type>
            </Line>
          </Line>
        </Line>
      )
    };
  };

  return (
    <Chart
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      values={values}

      names={names}

      elements={value?.elements}

      legend={value?.legend}

      labels={false}

      marks={false}

      borders={false}

      tooltipRender={tooltipRender}

      onUpdateRects={onUpdateRects}

      elementTooltip

      noMain

      className={classNames([
        staticClassName('PieChart', theme) && [
          'onesy-PieChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

PieChart.displayName = 'onesy-PieChart';

export default PieChart;
