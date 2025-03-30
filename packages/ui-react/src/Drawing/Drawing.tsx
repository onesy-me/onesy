import React from 'react';

import { elementToCanvas, is, isEnvironment } from '@onesy/utils';
import { classNames, colors, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialDeleteSweep from '@onesy/icons-material-rounded-react/IconMaterialDeleteSweepW100';
import IconMaterialDownload from '@onesy/icons-material-rounded-react/IconMaterialDownloadW100';
import IconMaterialCropLandscape from '@onesy/icons-material-rounded-react/IconMaterialCropLandscapeW100';
import IconMaterialPalette from '@onesy/icons-material-rounded-react/IconMaterialPaletteW100';

import ListItemElement from '../ListItem';
import SurfaceElement from '../Surface';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import LineElement from '../Line';
import SelectElement from '../Select';
import NumericTextFieldElement from '../NumericTextField';
import ToggleButtonsElement from '../ToggleButtons';
import DividerElement from '../Divider';
import ToggleButtonElement from '../ToggleButton';
import ColorTextFieldElement from '../ColorTextField';
import AppendElement from '../Append';
import FadeElement from '../Fade';
import ClickListenerElement from '../ClickListener';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny, IRef } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  methods: {
    position: 'absolute',
    right: '8px',
    bottom: '8px',
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  svg: {
    display: 'block',
    margin: '12px',
    cursor: 'none',
    touchAction: 'none',
    boxShadow: theme.shadows.values.default[1],
    background: theme.palette.color.neutral[100]
  },

  toolbars: {
    width: '100%'
  },

  toolbar: {
    width: '100%',
    overflowX: 'auto',
    padding: theme.methods.space.value(1, 'px')
  },

  modal: {
    padding: theme.methods.space.value(1.5, 'px'),
    borderRadius: theme.methods.shape.radius.value(1, 'px'),
    boxShadow: theme.shadows.values.default[2]
  },

  palette: {
    padding: theme.methods.space.value(1.5, 'px'),
    borderRadius: theme.methods.shape.radius.value(1, 'px'),
    boxShadow: theme.shadows.values.default[2]
  },

  paletteItem: {
    position: 'relative',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    boxShadow: theme.shadows.values.default[1],
    transition: theme.methods.transitions.make('box-shadow'),

    '&:hover': {
      boxShadow: theme.shadows.values.default[2],
    }
  },

  textFieldColor: {
    flex: '1 1 auto'
  },

  inputColor: {
    border: 'none',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    overflow: 'hidden',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    boxShadow: theme.shadows.values.default[1],

    '&::-webkit-color-swatch-wrapper': {
      padding: '0px'
    },

    '&::-webkit-color-swatch': {
      border: 'none'
    }
  },

  divider: {
    '&.onesy-Divider-root': {
      margin: '0'
    }
  },

  divider_middle: {
    '&.onesy-Divider-root': {
      opacity: theme.palette.light ? '0.07' : '0.24'
    }
  },

  divider_end: {
    '&.onesy-Divider-root': {
      opacity: theme.palette.light ? '0.14' : '0.4'
    }
  },
}), { name: 'onesy-Drawing' });

export type TDrawingValue = Array<{
  d?: string;
  stroke?: string;
  strokeWidth?: number;
}>;

export type IDrawing = Omit<ISurface, 'onChange' | 'onMouseDown'> & {
  render?: (element: string, props: IPropsAny, value: TDrawingValue) => IElement;

  svgRef?: IRef;

  updates?: boolean;
  actions?: boolean;

  exclude?: Array<string>;

  downloadName?: string;
  downloadType?: string;
  downloadQuality?: number;

  viewBox?: string;

  strokeColor?: string;
  strokeWidth?: number;

  valueDefault?: TDrawingValue;
  value?: TDrawingValue;

  onChange?: (value: TDrawingValue) => any;

  onMouseDown?: (event: React.MouseEvent<any>) => any;

  onClear?: (event?: React.MouseEvent<any>) => any;
  onDownload?: (event?: React.MouseEvent<any>) => any;

  IconClear?: IElementReference;
  IconDownload?: IElementReference;
  IconSize?: IElementReference;
  IconStrokeColor?: IElementReference;

  IconProps?: IPropsAny;
  SizeProps?: IPropsAny;
  AppendProps?: IPropsAny;
  ToolbarProps?: IPropsAny;
  ToolbarUpdatesProps?: IPropsAny;
  ToolbarActionsProps?: IPropsAny;
  ToggleButtonProps?: IPropsAny;
  ToggleButtonsProps?: IPropsAny;
  DividerProps?: IPropsAny;
  SelectProps?: IPropsAny;
  ListItemProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  PaletteProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  ColorTextFieldProps?: IPropsAny;
};

const Drawing: React.FC<IDrawing> = React.forwardRef((props__, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDrawing?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const ToggleButton = React.useMemo(() => theme?.elements?.ToggleButton || ToggleButtonElement, [theme]);

  const ToggleButtons = React.useMemo(() => theme?.elements?.ToggleButtons || ToggleButtonsElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const ColorTextField = React.useMemo(() => theme?.elements?.ColorTextField || ColorTextFieldElement, [theme]);

  const Append = React.useMemo(() => theme?.elements?.Append || AppendElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    render,

    updates = true,
    actions = true,

    exclude,

    downloadName = `onesy-drawing.png`,
    downloadType = 'image/png',
    downloadQuality = 1,

    viewBox = '0 0 340 140',

    strokeColor = '#000000',
    strokeWidth = 1,

    svgRef,

    valueDefault,
    value: value_,
    onChange,

    onMouseDown: onMouseDown_,

    onClear: onClear_,
    onDownload: onDownload_,

    IconClear = IconMaterialDeleteSweep,
    IconDownload = IconMaterialDownload,
    IconSize = IconMaterialCropLandscape,
    IconStrokeColor = IconMaterialPalette,

    IconProps: IconProps_,
    SizeProps,
    AppendProps: AppendProps_,
    ToolbarProps,
    ToolbarUpdatesProps,
    ToolbarActionsProps,
    ToggleButtonProps: ToggleButtonProps_,
    ToggleButtonsProps: ToggleButtonsProps_,
    DividerProps: DividerProps_,
    SelectProps: SelectProps_,
    ListItemProps: ListItemProps_,
    TooltipProps: TooltipProps_,
    PaletteProps,
    IconButtonProps,
    ColorTextFieldProps,

    Component = 'div',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [move, setMove] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [inputValues, setInputValues] = React.useState<any>({
    viewBox: '0 0 340 140',
    width: 340,
    widthInput: 340,
    height: 140,
    heightInput: 140,
    strokeWidth: 1,
    strokeColor: '#000000'
  });
  const [open, setOpen] = React.useState<any>({});

  const refs = {
    root: React.useRef<any>(undefined),
    inputValues: React.useRef<any>(undefined),
    svg: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    mouseDown: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    move: React.useRef<any>(undefined),
    download: React.useRef<any>(undefined),
    open: React.useRef<any>(undefined),
    elements: {
      size: React.useRef<any>(undefined),
      strokeColor: React.useRef<any>(undefined)
    }
  };

  refs.value.current = value;

  refs.open.current = open;

  refs.props.current = props;

  refs.inputValues.current = inputValues;

  refs.download.current = {
    name: downloadName,
    type: downloadType,
    quality: downloadQuality
  };

  refs.mouseDown.current = mouseDown;

  refs.move.current = move;

  const updateValue = (valueNew: any) => {
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateInputValues = (property: string, itemValue: any) => {
    setInputValues(values => ({
      ...values,

      [property]: itemValue
    }));
  };

  const updateOpen = (property: string, itemValue: any) => {
    setOpen(values => ({
      ...values,

      [property]: itemValue
    }));
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (refs.mouseDown.current) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      const x: number = event.clientX;
      const y: number = event.clientY;

      const rect = refs.svg.current?.getBoundingClientRect();

      if (!rect) return;

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const onTouchMove = (event: TouchEvent) => {
      const x: number = event.touches[0].clientX;
      const y: number = event.touches[0].clientY;

      const rect = refs.svg.current?.getBoundingClientRect();

      if (!rect) return;

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const update = (valueNew: any) => {
      if (refs.mouseDown.current) {
        // Update
        // relative value from the previous one how much x and y moved
        const x = valueNew?.x;
        const y = valueNew?.y;

        const previous = refs.value.current?.[refs.value.current?.length - 1];

        if (previous) {
          if (!(x === 0 && y === 0)) {
            previous.d += ` ${x},${y}`;

            updateValue([...refs.value.current]);
          }
        }
      }

      setMove(valueNew);
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onTouchMove);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
      rootDocument.removeEventListener('touchend', onMouseUp);
      rootDocument.removeEventListener('mousemove', onMouseMove);
      rootDocument.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (strokeColor !== undefined && strokeColor !== refs.inputValues.current.strokeColor) updateInputValues('strokeColor', strokeColor);

    if (strokeWidth !== undefined && strokeWidth !== refs.inputValues.current.strokeWidth) updateInputValues('strokeWidth', strokeWidth);
  }, [strokeColor, strokeWidth]);

  React.useEffect(() => {
    if (viewBox !== undefined && viewBox !== refs.inputValues.current.viewBox) {
      updateInputValues('viewBox', viewBox);

      updateInputValues('width', viewBox.split(' ')[2]);

      updateInputValues('height', viewBox.split(' ')[3]);
    }
  }, [viewBox]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    setMouseDown(true);

    let x: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientX : (event as React.MouseEvent<any>).clientX;
    let y: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientY : (event as React.MouseEvent<any>).clientY;

    const rect = refs.svg.current.getBoundingClientRect();

    x -= rect.x;
    y -= rect.y;

    setMove({ x, y });

    // Create new value path
    updateValue([
      ...(refs.value.current || []),

      {
        d: `M ${x},${y} L ${x} ${y}`,
        stroke: refs.inputValues.current.strokeColor,
        strokeWidth: refs.inputValues.current.strokeWidth
      }
    ]);

    if (is('function', onMouseDown_)) onMouseDown_(event as any);
  }, []);

  const onClear = React.useCallback(() => {
    updateValue([]);

    if (is('function', onClear_)) onClear_();
  }, []);

  const onDownload = React.useCallback(async () => {
    const svg = refs.svg.current;

    const rect = svg.getBoundingClientRect();

    // Clean up
    const clone = svg.cloneNode(true);

    clone.style.margin = '0px';

    clone.style.boxShadow = 'none';

    if (refs.download.current.type?.includes('png')) {
      clone.style.background = 'transparent';
    }

    try {
      setLoading(true);

      await elementToCanvas(clone, {
        response: 'download',

        filter: ['.onesy-Drawing-pointer'],

        download: refs.download.current,

        width: rect.width,

        height: rect.height
      });
    }
    catch (error) { }

    setLoading(false);

    if (is('function', onDownload_)) onDownload_();
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // updates toolbar
  const updateOptions = ['stroke-color', 'stroke-width', 'size'];

  const updates_ = updates && (!is('array', exclude) || includes(...updateOptions));

  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('clear', 'download'));

  const AppendProps: any = {
    padding: [14, 14],

    ...AppendProps_
  };

  const DividerProps: any = {
    color: 'inherit',

    ...DividerProps_,
  };

  const TooltipProps: any = {
    position: 'bottom',
    interactive: false,

    ...TooltipProps_,
  };

  const ToggleButtonsProps: any = {
    tonal,
    color,
    version: 'text',
    border: false,

    ...ToggleButtonsProps_,
  };

  const ToggleButtonProps: any = {
    size: 'small',

    ...ToggleButtonProps_,
  };

  const SelectProps: any = {
    tonal,

    color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed',

    version: 'outlined',

    size: 'small',

    ListProps: {
      tonal,

      color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed'
    },

    MenuProps: {
      portal: true
    },

    ...SelectProps_
  };

  const ListItemProps: any = {
    size: 'small',

    PrimaryProps: {
      style: {
        fontFamily: 'inherit'
      }
    },

    ...ListItemProps_
  };

  const IconProps: any = {
    size: 'small',

    ...IconProps_
  };

  const WrapperToggleButton = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      open: open_,

      label,

      children,

      ...other_
    } = props_;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        label={label}

        {...TooltipProps}
      >
        {React.cloneElement(children, {
          ...other_,

          ...children.props
        })}
      </Tooltip>
    );
  }), []);

  const WrapperAppend = React.useCallback((props_: any) => {
    const {
      open: open_,

      element,

      anchorElement,

      onClose,

      children,

      ...other_
    } = props_;

    return (
      <Append
        open={open_}

        element={(
          <div>
            <Fade
              in={open_}

              add
            >
              {React.cloneElement(element)}
            </Fade>
          </div>
        )}

        anchorElement={anchorElement}

        portal

        alignment='center'

        position='bottom'

        {...AppendProps}
      >
        {React.cloneElement(children, {
          ...other_,

          ...children.props
        })}
      </Append>
    );
  }, []);

  const PaletteItem = React.useCallback((props_: any) => {
    const {
      color: color_,

      ...other_
    } = props_;

    return (
      <span
        className={classNames([
          staticClassName('Drawing', theme) && [
            'onesy-Drawing-palette-item'
          ],

          classes.paletteItem
        ])}

        style={{
          background: color_
        }}

        {...other_}
      />
    );
  }, []);

  const Palette = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      version: version_,

      onUpdate,
      onClose,

      ...other_
    } = props_;

    return (
      <Line
        ref={ref_}

        gap={1}

        direction='column'

        tonal={tonal}

        color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

        Component={Surface}

        className={classNames([
          staticClassName('Drawing', theme) && [
            'onesy-Drawing-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        {/* Colors */}
        <Line
          gap={0.5}
        >
          <Line
            gap={0.5}

            direction='row'

            style={{
              width: '100%'
            }}
          >
            <PaletteItem
              color='#000000'

              onClick={() => {
                onUpdate('#000000');

                onClose();
              }}
            />

            <PaletteItem
              color='#ffffff'

              onClick={() => {
                onUpdate('#ffffff');

                onClose();
              }}
            />
          </Line>

          {Object.keys(colors).filter(item => !['black', 'white'].includes(item)).map((item: string, index: number) => (
            <Line
              key={index}

              gap={0.5}

              direction='row'

              style={{
                width: '100%'
              }}
            >
              {Object.keys(colors[item]).map((item_: string, index_: number) => (
                <PaletteItem
                  key={index_}

                  color={colors[item][item_]}

                  onClick={() => {
                    onUpdate(colors[item][item_]);

                    onClose();
                  }}
                />
              ))}
            </Line>
          ))}
        </Line>

        {/* Input color value */}
        <Divider />

        <Line
          gap={0.5}

          direction='row'

          align='center'

          style={{
            width: '100%'
          }}
        >
          <ColorTextField
            tonal={tonal}

            color={color}

            label='Custom color'

            version='outlined'

            size='small'

            value={refs.inputValues.current[version_]}

            onChange={valueNew => updateInputValues(version_, valueNew)}

            {...ColorTextFieldProps}

            className={classNames([
              staticClassName('Drawing', theme) && [
                'onesy-Drawing-text-field-color'
              ],

              ColorTextFieldProps?.className,
              classes.textFieldColor
            ])}
          />

          <Button
            tonal={tonal}

            color='inherit'

            version='text'

            size='small'

            onClick={() => {
              onUpdate(refs.inputValues.current[version_]);

              onClose();
            }}
          >
            Apply
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const valueNew_ = ((is('array', value) ? value : [value]) as any).filter(Boolean);

  const valueNewActive = mouseDown && valueNew_[valueNew_.length - 1];

  const circleStrokeWidth = +(valueNewActive ? valueNewActive.strokeWidth : refs.inputValues.current.strokeWidth);

  const stroke_width = [
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 1,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>1</Type>
        </Line>
      ),
      value: 1
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 2,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>2</Type>
        </Line>
      ),
      value: 2
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 4,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>4</Type>
        </Line>
      ),
      value: 4
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 8,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>8</Type>
        </Line>
      ),
      value: 8
    }
  ];

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Drawing', theme) && [
          'onesy-Drawing-root',
          updates && `onesy-Drawing-updates`,
          actions && `onesy-Drawing-actions`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Methods */}
      {(updates || actions_) && (
        <Line
          tonal={tonal}

          color={color}

          version={version}

          gap={0}

          direction='column'

          align='unset'

          justify='unset'

          Component={Surface}

          {...ToolbarProps}

          className={classNames([
            staticClassName('Drawing', theme) && [
              'onesy-Drawing-toolbars'
            ],

            ToolbarProps?.className,
            classes.toolbars
          ])}
        >
          {updates_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarUpdatesProps}

              className={classNames([
                staticClassName('Drawing', theme) && [
                  'onesy-Drawing-toolbar'
                ],

                ToolbarUpdatesProps?.className,
                classes.toolbar,
                classes.toolbar_updates
              ])}
            >
              {includes('stroke-width') && (
                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('stroke-width') && (
                    <Select
                      label='Stroke Width'

                      valueDefault={stroke_width.find(item => String(item.value).includes('1')).value}

                      value={inputValues['strokeWidth']}

                      onChange={(valueNew: string) => updateInputValues('strokeWidth', valueNew)}

                      {...SelectProps}

                      className={classNames([
                        staticClassName('Drawing', theme) && [
                          'onesy-Drawing-select'
                        ],

                        SelectProps?.className,
                        classes.select
                      ])}

                      style={{
                        minWidth: '90px'
                      }}
                    >
                      {stroke_width.map(item => (
                        <ListItem
                          key={item.value}

                          primary={item.label}

                          value={item.value}

                          button

                          {...ListItemProps}
                        />
                      ))}
                    </Select>
                  )}
                </Line>
              )}

              {includes('stroke-color') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('stroke-color') && (
                    <WrapperAppend
                      open={refs.open.current.strokeColor}

                      anchorElement={refs.elements.strokeColor.current}

                      element={(
                        <ClickListener
                          onClickOutside={() => updateOpen('strokeColor', false)}

                          include={[refs.elements.strokeColor, refs.elements.strokeColor.current]}
                        >
                          <Palette
                            onClose={() => updateOpen('strokeColor', false)}

                            onUpdate={(valueNew: any) => updateInputValues('strokeColor', valueNew)}

                            {...PaletteProps}
                          />
                        </ClickListener>
                      )}
                    >
                      <WrapperToggleButton
                        label='Stroke Color'

                        open={refs.open.current.strokeColor ? false : undefined}
                      >
                        {is('function', render) ? render('stroke-color', ToggleButtonProps, refs.value.current) : (
                          <ToggleButton
                            ref={refs.elements.strokeColor}

                            {...ToggleButtonProps}

                            selected={refs.open.current.strokeColor}

                            onClick={() => updateOpen('strokeColor', !refs.open.current.strokeColor)}
                          >
                            <IconStrokeColor {...IconProps} />
                          </ToggleButton>
                        )}
                      </WrapperToggleButton>
                    </WrapperAppend>
                  )}
                </ToggleButtons>
              )}

              {includes('size') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('size') && (
                    <WrapperAppend
                      open={refs.open.current.size}

                      anchorElement={refs.elements.size.current}

                      element={(
                        <ClickListener
                          onClickOutside={() => updateOpen('size', false)}

                          include={[refs.elements.size as any]}
                        >
                          <Line
                            gap={1}

                            tonal={tonal}

                            color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

                            Component={Surface}

                            className={classNames([
                              staticClassName('Drawing', theme) && [
                                'onesy-Drawing-modal'
                              ],

                              classes.modal
                            ])}

                            {...SizeProps}
                          >
                            <Line
                              gap={1}

                              direction='row'

                              align='center'

                              justify='center'
                            >
                              <NumericTextField
                                label='Width'

                                tonal={tonal}

                                color={color}

                                size='small'

                                version='outlined'

                                min={1}

                                increment={false}

                                decrement={false}

                                value={refs.inputValues.current.widthInput}

                                onChange={valueNew => updateInputValues('widthInput', !valueNew ? 1 : valueNew)}
                              />

                              ×

                              <NumericTextField
                                label='Height'

                                tonal={tonal}

                                color={color}

                                size='small'

                                version='outlined'

                                min={1}

                                increment={false}

                                decrement={false}

                                value={refs.inputValues.current.heightInput}

                                onChange={valueNew => updateInputValues('heightInput', !valueNew ? 1 : valueNew)}
                              />
                            </Line>

                            <Line
                              gap={1}

                              direction='row'

                              align='center'

                              justify='flex-end'

                              style={{
                                width: '100%'
                              }}
                            >
                              <Button
                                tonal={tonal}

                                color='inherit'

                                version='text'

                                size='small'

                                onClick={() => {
                                  const viewBox_ = refs.inputValues.current.viewBox?.split(' ');

                                  if (viewBox_) {
                                    viewBox_[2] = refs.inputValues.current.widthInput;

                                    viewBox_[3] = refs.inputValues.current.heightInput;
                                  }

                                  updateInputValues('viewBox', viewBox_.join(' '));

                                  updateInputValues('width', refs.inputValues.current.widthInput);

                                  updateInputValues('height', refs.inputValues.current.heightInput);

                                  updateOpen('size', false);
                                }}
                              >
                                Update
                              </Button>
                            </Line>
                          </Line>
                        </ClickListener>
                      )}
                    >
                      <WrapperToggleButton
                        label='Size'

                        open={refs.open.current.size ? false : undefined}
                      >
                        {is('function', render) ? render('size', ToggleButtonProps, refs.value.current) : (
                          <ToggleButton
                            ref={refs.elements.size}

                            {...ToggleButtonProps}

                            selected={refs.open.current.size}

                            onClick={() => updateOpen('size', !refs.open.current.size)}
                          >
                            <IconSize {...IconProps} />
                          </ToggleButton>
                        )}
                      </WrapperToggleButton>
                    </WrapperAppend>
                  )}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('Drawing', theme) && [
                  'onesy-Drawing-divider'
                ],

                DividerProps?.className,
                classes.divider,
                classes.divider_middle
              ])}
            />
          )}

          {actions_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarActionsProps}

              className={classNames([
                staticClassName('Drawing', theme) && [
                  'onesy-Drawing-toolbar'
                ],

                ToolbarActionsProps?.className,
                classes.toolbar,
                classes.toolbar_actions
              ])}
            >
              <Line
                direction='row'

                align='center'

                justify='space-between'

                style={{
                  width: '100%'
                }}
              >
                <Line
                  gap={2}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('clear') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('clear') && (
                        <WrapperToggleButton
                          label='Clear'
                        >
                          {is('function', render) ? render('clear', ToggleButtonProps, refs.value.current) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={onClear}
                            >
                              <IconClear {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}
                </Line>

                <Line
                  gap={2}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('download') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('download') && (
                        <WrapperToggleButton
                          label='Download'
                        >
                          {is('function', render) ? render('download', ToggleButtonProps, refs.value.current) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              loading={loading}

                              onClick={onDownload}
                            >
                              <IconDownload {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}
                </Line>
              </Line>
            </Line>
          )}

          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('Drawing', theme) && [
                'onesy-Drawing-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      <svg
        ref={item => {
          if (svgRef) svgRef.current = item;

          refs.svg.current = item;
        }}

        viewBox={refs.inputValues.current.viewBox}

        onMouseDown={onMouseDown}

        onTouchStart={onMouseDown}

        className={classNames([
          staticClassName('Drawing', theme) && [
            'onesy-Drawing-svg'
          ],

          classes.svg
        ])}

        style={{
          width: refs.inputValues.current.width,
          height: refs.inputValues.current.height
        }}
      >
        {valueNew_.map((item: any, index: number) => (
          <path
            key={index}

            fill='none'

            {...item}
          />
        ))}

        {/* Pointer  */}
        <circle
          className='onesy-Drawing-pointer'

          cx={move?.x}

          cy={move?.y}

          r={circleStrokeWidth + 1}

          fill={refs.inputValues.current.strokeColor}
        />
      </svg>
    </Surface>
  );
});

Drawing.displayName = 'onesy-Drawing';

export default Drawing;
