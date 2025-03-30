import { IBreakpoint, TPaletteVersion } from '@onesy/style-react';

export type IPoint = [number, number];

export type ITonal = true | false | 'secondary';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSL = `hsl(${number}, ${number}, ${number})`;
type HSLA = `hsla(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HSL | HSLA | HEX;

export type IColor = 'default' | 'themed' | 'inverted' | 'inherit' | TPaletteVersion | Color;

export type IVersion = 'filled' | 'outlined' | 'outlined-without-background' | 'text';

export type ISize = 'small' | 'regular' | 'large';

export type ISizeExtended = 'very small' | 'small' | 'regular' | 'medium' | 'large' | 'very large';

export type ISizeAny = ISize | number;

export type ISizeExtendedAny = ISizeExtended | number;

export type IElevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export type IElementReference = string | React.FC<any> | (React.ForwardRefExoticComponent<any>);

export type IElement = React.ReactNode | React.ReactNode[] | React.ReactElement<any, string | React.JSXElementConstructor<any>>;

export type IElementAny = IElement | string | number | boolean | null | undefined;

export type IHTMLElement = Element | HTMLElement;

export type IPropsAny = Record<string, any>;

export type IStyle = React.CSSProperties | undefined;

export type IChildren = React.ReactNode | React.ReactNode[];

export type IRef = React.MutableRefObject<any>;

export type IBaseElement<P = {}, T = HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  | 'onClick'
  | 'onChange'
  | 'onInput'
  | 'onKeyDown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onDoubleClick'
  | 'onSubmit'
> & {
  tonal?: ITonal;
  color?: IColor;
  size?: ISizeAny;

  onClick?: any;
  onChange?: any;
  onInput?: any;
  onKeyDown?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onDoubleClick?: any;
  onSubmit?: any;

  readOnly?: boolean;
  disabled?: boolean;

  children?: any;

  Component?: any;

  ref?: any;
} & P;

export type IMethodTransition = (element?: IHTMLElement) => any;

export type IValueBreakpoints = IBreakpoint | 'default';

export type IMediaObject = {
  id?: string;

  name?: string;

  mime?: string;

  url: string;

  urlSmall?: string;

  urlEmbed?: string;
};
