import React from 'react';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialCloudUpload from '@onesy/icons-material-rounded-react/IconMaterialCloudUploadW100';

import FileChooseElement from '../FileChoose';
import SurfaceElement from '../Surface';
import TypeElement from '../Type';
import LineElement from '../Line';
import InteractionElement from '../Interaction';
import { IFileChoose } from '../FileChoose/FileChoose';
import { staticClassName } from '../utils';
import { IElement, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  wrapperText: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    pointerEvents: 'none'
  },

  wrapper: {
    width: '100%'
  },

  label: {
    position: 'relative',

    '&.onesy-Surface-root': {
      width: '100%',
      height: '174px',
      outlineStyle: 'dashed',
      outlineWidth: '3px',
      borderRadius: theme.methods.shape.radius.value('lg', 'px'),
      cursor: 'pointer'
    }
  },

  disabled: {
    opacity: '0.4',
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'onesy-DropZone' });

export type IDropZone = IFileChoose & {
  version?: IVersion;

  start?: IElement;

  dropText?: any;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  onDrop?: (event: React.DragEvent<any>) => any;
  onDragOver?: (event: React.DragEvent<any>) => any;
  onDragEnter?: (event: React.DragEvent<any>) => any;
  onDragLeave?: (event: React.DragEvent<any>) => any;
};

const DropZone: React.FC<IDropZone> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyDropZone?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const FileChoose = theme?.elements?.FileChoose || FileChooseElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Interaction = theme?.elements?.Interaction || InteractionElement;

  const {
    tonal = true,
    color = 'default',
    version,

    start,

    files,

    multiple,

    max,
    allowedTypes,

    dropText = l('Drop files here'),

    valueDefault,
    value: value_,

    onChange: onChange_,

    IconStart = IconMaterialCloudUpload,

    onFocus: onFocus_,
    onBlur: onBlur_,

    onDrop: onDrop_,
    onDragOver: onDragOver_,
    onDragEnter: onDragEnter_,
    onDragLeave: onDragLeave_,

    disabled,

    children,

    className,

    ...otherProps
  } = props;

  const other: any = otherProps;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [dragOver, setDragOver] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    label: React.useRef<any>(undefined),
    input: React.useRef<HTMLInputElement>(undefined),
    focus: React.useRef<any>(undefined),
    allowedTypes: React.useRef<any>(undefined),
    max: React.useRef<any>(undefined)
  };

  refs.value.current = value;

  refs.focus.current = focus;

  refs.max.current = max;

  refs.allowedTypes.current = allowedTypes;

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          if (refs.focus.current) refs.input.current.click();

          break;

        default:
          break;
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    setInit(true);

    return () => {
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== refs.value.current) setValue(value_);
    }
  }, [value_]);

  const onChange = (valueNew_: any[]) => {
    let valueNew = valueNew_;

    // Allowed types
    if (is('array', refs.allowedTypes.current)) valueNew = valueNew.map((item: File) => refs.allowedTypes.current.includes(item.name));

    // Max
    if (refs.max.current) valueNew = valueNew.slice(0, refs.max.current);

    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  };

  const onDrop = (event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(false);

    const valueNew = Array.from(event.dataTransfer.files);

    onChange(valueNew);

    if (is('function', onDrop_)) onDrop_(event);
  };

  const onDragEnter = (event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(true);

    if (is('function', onDragEnter_)) onDragEnter_(event);
  };

  const onDragLeave = (event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(false);

    if (is('function', onDragLeave_)) onDragLeave_(event);
  };

  const onDragOver = (event: React.DragEvent<any>) => {
    event.preventDefault();

    if (is('function', onDragOver_)) onDragOver_(event);
  };

  other.onDrop = onDrop;

  other.onDragEnter = onDragEnter;

  other.onDragLeave = onDragLeave;

  other.onDragOver = onDragOver;

  const custom = !!children;

  let WrapperProps: any = {};

  let ComponentProps: any = {};

  if (files) {
    WrapperProps = {
      ...WrapperProps,

      ...other
    };
  }
  else {
    ComponentProps = {
      ...ComponentProps,

      ...other
    };
  }

  return (
    <FileChoose
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      inputRef={refs.input}

      valueDefault={valueDefault}

      value={value}

      tonal={tonal}

      color={color}

      version='text'

      files={files}

      multiple={multiple}

      max={max}

      allowedTypes={allowedTypes}

      start={undefined}

      onChange={onChange}

      Component={Surface}

      className={classNames([
        staticClassName('DropZone', theme) && [
          'onesy-DropZone-root'
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      ComponentProps={{
        tabIndex: 0,

        onFocus,

        onBlur,

        ...ComponentProps,

        className: classNames([
          staticClassName('DropZone', theme) && [
            'onesy-DropZone-label'
          ],

          ComponentProps?.className,
          !custom && classes.label
        ])
      }}

      WrapperProps={{
        ...WrapperProps,

        className: classNames([
          staticClassName('DropZone', theme) && [
            'onesy-DropZone-wrapper'
          ],

          WrapperProps?.className,
          classes.wrapper
        ])
      }}
    >
      <Interaction
        pulse={focus || dragOver}
      />

      {children}

      {!custom && (
        <Line
          direction='row'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('DropZone', theme) && [
              'onesy-DropZone-wrapper-text'
            ],

            classes.wrapperText
          ])}
        >
          <IconStart />

          <Type
            version='t1'
          >
            {dropText}
          </Type>
        </Line>
      )}
    </FileChoose>
  );
});

DropZone.displayName = 'onesy-DropZone';

export default DropZone;
