import React from 'react';

import { is, to } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialClose from '@onesy/icons-material-rounded-react/IconMaterialCloseW100';
import IconMaterialDraft from '@onesy/icons-material-rounded-react/IconMaterialDraftW100';
import IconMaterialCloudUpload from '@onesy/icons-material-rounded-react/IconMaterialCloudUploadW100';
import IconMaterialFolder from '@onesy/icons-material-rounded-react/IconMaterialFolderW100';
import IconMaterialFolderOpen from '@onesy/icons-material-rounded-react/IconMaterialFolderOpenW100';

import TypeElement from '../Type';
import ButtonElement from '../Button';
import IconButtonElement from '../IconButton';
import TreeElement from '../Tree';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { iconFontSize, staticClassName } from '../utils';
import { IRef, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  input: {
    position: 'absolute',
    width: '0px',
    height: '0px',
    visibility: 'hidden'
  },

  files: {
    width: '340px',
    maxWidth: '100%'
  },

  file: {
    maxWidth: '174px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}), { name: 'onesy-FileChoose' });

export type TFileChooseValue = File | Array<File>;

export type IFileChoose = Omit<ILine, 'onClick' | 'onChange'> & {
  inputRef?: IRef;

  max?: number;
  allowedTypes?: Array<string>;

  files?: Array<File>;

  valueDefault?: TFileChooseValue;
  value?: TFileChooseValue;

  multiple?: boolean;
  accept?: string;
  capture?: boolean | 'user' | 'environment';

  remove?: boolean;

  renderFiles?: (value: TFileChooseValue, onRemove: (index: number) => any) => any;

  onClick?: (event: React.MouseEvent<any>) => any;

  onChange?: (value: TFileChooseValue) => any;

  IconStart?: IElementReference;

  inputProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  ComponentProps?: IPropsAny;
};

const FileChoose: React.FC<IFileChoose> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFileChoose?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Button = theme?.elements?.Button || ButtonElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const Tree = theme?.elements?.Tree || TreeElement;

  const {
    ref,

    tonal = true,
    color = 'default',

    inputRef,

    size = 'regular',

    max,
    allowedTypes,

    files,

    valueDefault,
    value: value_,

    multiple,
    accept,
    capture,

    remove = true,

    renderFiles,

    onClick,
    onChange: onChange_,

    IconStart = IconMaterialCloudUpload,

    inputProps,
    WrapperProps: WrapperProps_,
    ComponentProps: ComponentProps_,

    Component = Button,

    className,
    style,

    children = 'Choose file',

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    value: React.useRef<any>(undefined),
    input: React.useRef<HTMLInputElement>(undefined),
    allowedTypes: React.useRef<any>(undefined),
    max: React.useRef<any>(undefined)
  };

  refs.value.current = value;

  refs.max.current = max;

  refs.allowedTypes.current = allowedTypes;

  React.useEffect(() => {
    setInit(true);
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

  const onChangeMethod = (event: React.ChangeEvent<any>) => {
    const valueNew = Array.from(refs.input.current.files);

    onChange(valueNew);
  };

  const onRemove = (index: number) => {
    const valueNew = [...(value as any)];

    valueNew.splice(index, 1);

    onChange(valueNew);
  };

  const onReset = (event: React.MouseEvent<any>) => {
    if (refs.input.current) refs.input.current.value = '';

    if (is('function', onClick)) onClick(event);
  };

  const Wrapper: any = files ? Line : React.Fragment;

  const WrapperProps = files ? {
    ref,

    direction: 'column',

    ...WrapperProps_,

    className: classNames([
      staticClassName('FileChoose', theme) && [
        'onesy-FileChoose-root'
      ],

      WrapperProps_?.className,
      className,
      classes.root
    ]),

    ...other
  } : undefined;

  let ComponentProps = {
    ...ComponentProps_,
  };

  if (!files) {
    ComponentProps = {
      ...ComponentProps,

      ref,

      className: classNames([
        staticClassName('FileChoose', theme) && [
          'onesy-FileChoose-root'
        ],

        ComponentProps_?.className,
        className,
        classes.root
      ]),

      ...other
    };
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        Component='label'

        tonal={tonal}

        color={color}

        version='outlined'

        start={(
          <IconStart />
        )}

        onClick={onReset}

        size={size}

        {...ComponentProps}
      >
        <input
          ref={item => {
            if (inputRef) inputRef.current = item;

            refs.input.current = item;
          }}

          type='file'

          accept={accept}

          multiple={multiple}

          capture={capture}

          onChange={onChangeMethod}

          {...inputProps}

          className={classNames([
            staticClassName('FileChoose', theme) && [
              'onesy-FileChoose-input'
            ],

            inputProps?.className,
            classes.input
          ])}
        />

        {children}
      </Component>

      {files && !!(value as any)?.length && (
        is('function', renderFiles) ? renderFiles(value, onRemove) : (
          <Tree
            openDefault

            icon={<IconMaterialFolder size='small' />}
            iconOpen={<IconMaterialFolderOpen size='small' />}

            middle='Files'

            indicator

            indicatorPosition='end'

            className={classNames([
              staticClassName('FileChoose', theme) && [
                'onesy-FileChoose-files'
              ],

              classes.files
            ])}
          >
            {(value as any).map((item: any, index: number) => (
              <Tree
                key={index}

                icon={<IconMaterialDraft size='small' />}

                end={remove && (
                  <IconButton
                    tonal

                    color='default'

                    size={20}

                    fontSize={iconFontSize}

                    onClick={() => onRemove(index)}
                  >
                    <IconMaterialClose />
                  </IconButton>
                )}

                middle={(
                  <Line
                    gap={1}

                    direction='row'

                    align='center'
                  >
                    <Type
                      version='b2'

                      className={classNames([
                        staticClassName('FileChoose', theme) && [
                          'onesy-FileChoose-file'
                        ],

                        classes.file
                      ])}
                    >
                      {item.name}
                    </Type>

                    <Type
                      version='b3'

                      priority='secondary'
                    >
                      {to(item.size, 'size-format') as any}
                    </Type>
                  </Line>
                )}
              />
            ))}
          </Tree>
        )
      )}
    </Wrapper>
  );
};

FileChoose.displayName = 'onesy-FileChoose';

export default FileChoose;
