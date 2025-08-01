import React from 'react';

import { is, isEnvironment, parse } from '@onesy/utils';
import { classNames, colors, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialFormatItalic from '@onesy/icons-material-rounded-react/IconMaterialFormatItalicW100';
import IconMaterialFormatUnderlined from '@onesy/icons-material-rounded-react/IconMaterialFormatUnderlinedW100';
import IconMaterialFormatBold from '@onesy/icons-material-rounded-react/IconMaterialFormatBoldW100';
import IconMaterialContentCopy from '@onesy/icons-material-rounded-react/IconMaterialContentCopyW100';
import IconMaterialContentCut from '@onesy/icons-material-rounded-react/IconMaterialContentCutW100';
import IconMaterialContentPaste from '@onesy/icons-material-rounded-react/IconMaterialContentPasteW100';
import IconMaterialFormatAlignLeft from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignLeftW100';
import IconMaterialFormatAlignCenter from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignCenterW100';
import IconMaterialFormatAlignRight from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignRightW100';
import IconMaterialFormatAlignJustify from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignJustifyW100';
import IconMaterialStrikethroughS from '@onesy/icons-material-rounded-react/IconMaterialStrikethroughSW100';
import IconMaterialUndo from '@onesy/icons-material-rounded-react/IconMaterialUndoW100';
import IconMaterialRedo from '@onesy/icons-material-rounded-react/IconMaterialRedoW100';
import IconMaterialFormatClear from '@onesy/icons-material-rounded-react/IconMaterialFormatClearW100';
import IconMaterialSuperscript from '@onesy/icons-material-rounded-react/IconMaterialSuperscriptW100';
import IconMaterialSubscript from '@onesy/icons-material-rounded-react/IconMaterialSubscriptW100';
import IconMaterialFormatIndentIncrease from '@onesy/icons-material-rounded-react/IconMaterialFormatIndentIncreaseW100';
import IconMaterialFormatIndentDecrease from '@onesy/icons-material-rounded-react/IconMaterialFormatIndentDecreaseW100';
import IconMaterialFormatListNumbered from '@onesy/icons-material-rounded-react/IconMaterialFormatListNumberedW100';
import IconMaterialFormatListBulleted from '@onesy/icons-material-rounded-react/IconMaterialFormatListBulletedW100';
import IconMaterialHorizontalRule from '@onesy/icons-material-rounded-react/IconMaterialHorizontalRuleW100';
import IconMaterialFormatColorText from '@onesy/icons-material-rounded-react/IconMaterialFormatColorTextW100';
import IconMaterialFormatColorFill from '@onesy/icons-material-rounded-react/IconMaterialFormatColorFillW100';
import IconMaterialAddLink from '@onesy/icons-material-rounded-react/IconMaterialAddLinkW100';
import IconMaterialLinkOff from '@onesy/icons-material-rounded-react/IconMaterialLinkOffW100';
import IconMaterialImage from '@onesy/icons-material-rounded-react/IconMaterialImageW100';
import IconMaterialFormatQuote from '@onesy/icons-material-rounded-react/IconMaterialFormatQuoteW100';
import IconMaterialVideocam from '@onesy/icons-material-rounded-react/IconMaterialVideocamW100';
import IconMaterialPlayArrow from '@onesy/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialCode from '@onesy/icons-material-rounded-react/IconMaterialCodeW100';
import IconMaterialDeleteSweep from '@onesy/icons-material-rounded-react/IconMaterialDeleteSweepW100';
import IconMaterialSelectAll from '@onesy/icons-material-rounded-react/IconMaterialSelectAllW100';
import IconMaterialPrint from '@onesy/icons-material-rounded-react/IconMaterialPrintW100';
import IconMaterialDownload from '@onesy/icons-material-rounded-react/IconMaterialDownloadW100';
import IconMaterialTable from '@onesy/icons-material-rounded-react/IconMaterialTableW100';
import IconMaterialDraw from '@onesy/icons-material-rounded-react/IconMaterialDrawW100';

import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import FadeElement from '../Fade';
import AppendElement from '../Append';
import SelectElement from '../Select';
import SwitchElement from '../Switch';
import LabelElement from '../Label';
import NumericTextFieldElement from '../NumericTextField';
import ColorTextFieldElement from '../ColorTextField';
import ToggleButtonsElement from '../ToggleButtons';
import ToggleButtonElement from '../ToggleButton';
import DrawingElement from '../Drawing';
import DividerElement from '../Divider';
import ClickListenerElement from '../ClickListener';
import TextFieldElement from '../TextField';
import ButtonElement from '../Button';
import SurfaceElement from '../Surface';
import ListItemElement from '../ListItem';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { print, save, staticClassName } from '../utils';
import { IVersion, IPropsAny, IElement, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%'
  },

  value: {
    padding: theme.methods.space.value(2, 'px'),
    whiteSpace: 'break-spaces',

    '& p': {
      ...theme.typography.values.b2
    },

    '& h1': {
      ...theme.typography.values.h1
    },

    '& h2': {
      ...theme.typography.values.h2
    },

    '& h3': {
      ...theme.typography.values.h3
    },

    '& h4': {
      ...theme.typography.values.t1
    },

    '& h5': {
      ...theme.typography.values.t2
    },

    '& a': {
      color: theme.palette.color.primary.main,
      textDecoration: 'underline'
    },

    '& blockquote': {
      margin: '16px 0',
      marginInlineStart: '16px',
      padding: `${theme.methods.space.value(2.5, 'px')} ${theme.methods.space.value(2, 'px')}`,
      borderInlineStart: `4px solid ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)}`,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.02 : 0.14),

      '& > *': {
        margin: '0px'
      },

      '& > $blockquote': {
        marginBlock: '16px'
      }
    },

    '& iframe': {
      display: 'block',
      maxWidth: '100%',
      margin: '16px auto'
    },

    '& video': {
      display: 'block',
      margin: '16px auto'
    },

    '& code': {
      padding: `${theme.methods.space.value(0.25, 'px')} ${theme.methods.space.value(0.5, 'px')}`,
      borderRadius: theme.methods.shape.radius.value(0.5, 'px'),
      color: theme.palette.text.default.primary,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1)
    },

    '& pre': {
      margin: '16px 0',
      padding: theme.methods.space.value(2, 'px'),
      borderRadius: theme.methods.shape.radius.value(1, 'px'),
      color: theme.palette.text.default.primary,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1),

      '& code': {
        padding: '0px',
        background: 'transparent'
      }
    },

    '& table': {
      margin: '16px auto',
      borderCollapse: 'collapse',
      border: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,

      '& th, & td': {
        ...theme.typography.values.b2,
        height: '45px',
        padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2, 'px')}`,
        borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,
        borderRight: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`
      },

      '& th': {
        fontWeight: 500,
        borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[50] : theme.palette.color.neutral[50]}`
      }
    },

    '& .onesy-Drawing-svg': {
      display: 'block',
      margin: '16px auto',
      background: theme.palette.color.neutral[100]
    }
  },

  toolbars: {
    width: '100%'
  },

  toolbar: {
    width: '100%',
    overflowX: 'auto',
    padding: theme.methods.space.value(1, 'px')
  },

  divider: {
    '&.onesy-Divider-root': {
      margin: 0
    }
  },

  divider_middle: {
    '&.onesy-Divider-root': {
      opacity: theme.palette.light ? 0.07 : 0.24
    }
  },

  divider_end: {
    '&.onesy-Divider-root': {
      opacity: theme.palette.light ? 0.14 : 0.4
    }
  },

  select: {
    '& .onesy-TextField-input-wrapper': {
      height: '40px',
      paddingBlock: theme.methods.space.value(1.25, 'px')
    },

    '& .onesy-Select-input': {
      '& > *': {
        ...theme.typography.values.b2,

        fontWeight: 400
      }
    }
  },

  miniMenu: {
    padding: theme.methods.space.value(1.5, 'px'),
    borderRadius: theme.methods.shape.radius.value(140, 'px'),
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
  }
}), { name: 'onesy-RichTextEditor' });

export type IRichTextEditor = Omit<ILine, 'onChange'> & {
  version?: IVersion;

  value?: string;
  onChange?: (event: React.ChangeEvent<any>) => any;

  render?: (version: string, props: IPropsAny, value: string, update: (command: string) => any) => IElement;

  miniMenu?: boolean;

  miniMenuInclude?: Array<string>;

  exclude?: Array<string>;

  updates?: boolean;

  actions?: boolean;

  fontFamilies?: Array<{
    value?: string;

    label?: string;
  }>;

  addFontFamilies?: Array<{
    value?: string;

    label?: string;
  }>;

  // Update
  IconItalic?: IElementReference;
  IconUnderline?: IElementReference;
  IconBold?: IElementReference;
  IconStrikeLine?: IElementReference;

  IconColor?: IElementReference;
  IconBackground?: IElementReference;

  IconAlignLeft?: IElementReference;
  IconAlignCenter?: IElementReference;
  IconAlignRight?: IElementReference;
  IconAlignJustify?: IElementReference;

  IconIndent?: IElementReference;
  IconOutdent?: IElementReference;

  IconSuperscript?: IElementReference;
  IconSubscript?: IElementReference;

  IconListOrdered?: IElementReference;
  IconListUnordered?: IElementReference;

  IconHorizontalRule?: IElementReference;

  IconLinkAdd?: IElementReference;
  IconLinkRemove?: IElementReference;

  IconQuote?: IElementReference;
  IconImage?: IElementReference;
  IconVideo?: IElementReference;
  IconVideoYoutube?: IElementReference;
  IconTable?: IElementReference;
  IconCode?: IElementReference;
  IconDrawing?: IElementReference;

  // Action
  IconCopy?: IElementReference;
  IconCut?: IElementReference;
  IconPaste?: IElementReference;

  IconDelete?: IElementReference;

  IconClear?: IElementReference;
  IconSelectAll?: IElementReference;

  IconSave?: IElementReference;
  IconPrint?: IElementReference;

  IconUndo?: IElementReference;
  IconRedo?: IElementReference;

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
  MiniMenuProps?: IPropsAny;
  DrawingProps?: IPropsAny;
  IconProps?: IPropsAny;
  ColorTextFieldProps?: IPropsAny;
};

const RichTextEditor: React.FC<IRichTextEditor> = React.forwardRef((props__, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyRichTextEditor?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Append = React.useMemo(() => theme?.elements?.Append || AppendElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const ColorTextField = React.useMemo(() => theme?.elements?.ColorTextField || ColorTextFieldElement, [theme]);

  const ToggleButton = React.useMemo(() => theme?.elements?.ToggleButton || ToggleButtonElement, [theme]);

  const ToggleButtons = React.useMemo(() => theme?.elements?.ToggleButtons || ToggleButtonsElement, [theme]);

  const Drawing = React.useMemo(() => theme?.elements?.Drawing || DrawingElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    value,
    onChange,

    render,

    miniMenu = true,

    miniMenuInclude = [
      'italic',
      'underline',
      'bold',
      'strike-line',

      'font-color',
      'font-background',

      'align-left',
      'align-center',
      'align-right',
      'align-justify',

      'link-add',
      'link-remove',

      'clear'
    ],

    exclude,

    updates = true,

    actions = true,

    fontFamilies = [
      { label: 'Arial', value: `Arial, sans-serif` },
      { label: 'Verdana', value: `Verdana, sans-serif` },
      { label: 'Helvetica', value: `Helvetica, sans-serif` },
      { label: 'Georgia', value: `Georgia, sans-serif` },
      { label: 'Roboto', value: `Roboto, sans-serif` },
      { label: 'DM Sans', value: `DM Sans, sans-serif` }
    ],

    addFontFamilies = [],

    // Update
    IconItalic = IconMaterialFormatItalic,
    IconUnderline = IconMaterialFormatUnderlined,
    IconBold = IconMaterialFormatBold,
    IconStrikeLine = IconMaterialStrikethroughS,

    IconColor = IconMaterialFormatColorText,
    IconBackground = IconMaterialFormatColorFill,

    IconAlignLeft = IconMaterialFormatAlignLeft,
    IconAlignCenter = IconMaterialFormatAlignCenter,
    IconAlignRight = IconMaterialFormatAlignRight,
    IconAlignJustify = IconMaterialFormatAlignJustify,

    IconIndent = IconMaterialFormatIndentIncrease,
    IconOutdent = IconMaterialFormatIndentDecrease,

    IconSuperscript = IconMaterialSuperscript,
    IconSubscript = IconMaterialSubscript,

    IconListOrdered = IconMaterialFormatListNumbered,
    IconListUnordered = IconMaterialFormatListBulleted,

    IconHorizontalRule = IconMaterialHorizontalRule,

    IconLinkAdd = IconMaterialAddLink,
    IconLinkRemove = IconMaterialLinkOff,

    IconQuote = IconMaterialFormatQuote,
    IconImage = IconMaterialImage,
    IconVideo = IconMaterialVideocam,
    IconVideoYoutube = IconMaterialPlayArrow,
    IconTable = IconMaterialTable,
    IconCode = IconMaterialCode,
    IconDrawing = IconMaterialDraw,

    // Action
    IconCopy = IconMaterialContentCopy,
    IconCut = IconMaterialContentCut,
    IconPaste = IconMaterialContentPaste,

    IconDelete = IconMaterialDeleteSweep,

    IconClear = IconMaterialFormatClear,
    IconSelectAll = IconMaterialSelectAll,

    IconSave = IconMaterialDownload,
    IconPrint = IconMaterialPrint,

    IconUndo = IconMaterialUndo,
    IconRedo = IconMaterialRedo,

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
    MiniMenuProps: MiniMenuProps_,
    DrawingProps,
    IconProps: IconProps_,
    ColorTextFieldProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [inputValues, setInputValues] = React.useState<any>({});
  const [open, setOpen] = React.useState<any>({});
  const [selected, setSelected] = React.useState<any[]>([]);
  const [selection, setSelection] = React.useState<DOMRect>();

  const refs = {
    root: React.useRef<any>(null),
    value: React.useRef<any>(null),
    range: React.useRef<any>(null),
    inputValues: React.useRef<any>(null),
    open: React.useRef<any>(null),
    props: React.useRef<any>(null),
    selected: React.useRef<any>(null),
    miniMenu: React.useRef<any>(null),
    miniMenuInclude: React.useRef<any>(null),
    miniMenuElements: {
      color: React.useRef<any>(null),
      colorPalette: React.useRef<any>(null),
      background: React.useRef<any>(null),
      backgroundPalette: React.useRef<any>(null),
      linkAdd: React.useRef<any>(null),
      linkAddInput: React.useRef<any>(null),
      linkRemove: React.useRef<any>(null)
    },
    elements: {
      color: React.useRef<any>(null),
      background: React.useRef<any>(null),
      linkAdd: React.useRef<any>(null),
      linkRemove: React.useRef<any>(null),
      quote: React.useRef<any>(null),
      image: React.useRef<any>(null),
      video: React.useRef<any>(null),
      videoYoutube: React.useRef<any>(null),
      table: React.useRef<any>(null),
      drawing: React.useRef<any>(null),
      drawingSvg: React.useRef<any>(null),
      drawingSize: React.useRef<any>(null),
      drawingSelect: React.useRef<any>(null),
      drawingPalette: React.useRef<any>(null),
      code: React.useRef<any>(null)
    },
    rootDocument: React.useRef<Document>(null),
    rootWindow: React.useRef<Window>(null)
  };

  refs.inputValues.current = inputValues;

  refs.open.current = open;

  refs.props.current = props;

  refs.selected.current = selected;

  refs.miniMenuInclude.current = miniMenuInclude;

  const rootDocument = isEnvironment('browser') && (refs.root.current?.ownerDocument || window.document);

  const rootWindow = rootDocument && (rootDocument.defaultView || window);

  refs.rootDocument.current = rootDocument;

  refs.rootWindow.current = rootWindow;

  React.useEffect(() => {
    // Add value as innerHTML
    refs.value.current.innerHTML = value;
  }, [value]);

  React.useEffect(() => {
    const selection_ = refs.rootWindow.current.getSelection();

    if (
      selection_ &&
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, [open]);

  React.useEffect(() => {
    if (!selection) {
      updateOpen('colorMiniMenu', false);
      updateOpen('backgroundMiniMenu', false);
      updateOpen('linkMiniMenu', false);
    }
  }, [selection]);

  const query = (command: string) => {
    return parse(refs.rootDocument.current.queryCommandValue(command));
  };

  const includesMinMenu = (...args) => args.some(item => refs.miniMenuInclude.current.includes(item));

  const clear = (element: HTMLElement = refs.value.current) => {
    const children_ = Array.from(element.children);

    const toRemove = [];
    const other_ = [];

    children_.forEach((item: any, index: number) => {
      (
        (item.tagName === 'SPAN' && !item.innerHTML) ||
        (item.tagName === 'BR' && index > 0 && (children_[index - 1].tagName === 'SPAN' && !children_[index - 1].innerHTML))
      ) ? toRemove.push(item) : other_.push(item);
    });

    toRemove.forEach((item: HTMLElement) => item.remove());

    other_.forEach(item => clear(item as any));
  };

  const onUpdate = (event: React.ChangeEvent<any>) => {
    // Clear from empty element values
    clear();

    if (is('function', onChange)) onChange(event);
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

  const paste = async () => {
    const value_ = await navigator.clipboard.read();

    if (value_) {
      let values: any = '';

      for (const item of Array.from(value_)) {
        const valueItem = await item.getType('text/html');

        values += await valueItem.text();
      }

      refs.rootDocument.current.execCommand('insertHTML', undefined, values);
    }
  };

  const method = React.useCallback((command: string) => (argument: any) => {
    switch (command) {
      // updates
      case 'italic':
        refs.rootDocument.current.execCommand('italic');

        if (query('italic')) setSelected(values => [...values, 'italic']);
        else setSelected(values => values.filter(item => item !== 'italic'));

        break;

      case 'underline':
        refs.rootDocument.current.execCommand('underline');

        if (query('underline')) setSelected(values => [...values, 'underline']);
        else setSelected(values => values.filter(item => item !== 'underline'));

        break;

      case 'bold':
        refs.rootDocument.current.execCommand('bold');

        if (query('bold')) setSelected(values => [...values, 'bold']);
        else setSelected(values => values.filter(item => item !== 'bold'));

        break;

      case 'strike-line':
        refs.rootDocument.current.execCommand('strikeThrough');

        if (query('strikeThrough')) setSelected(values => [...values, 'strike-line']);
        else setSelected(values => values.filter(item => item !== 'strike-line'));

        break;

      case 'align-left':
        refs.rootDocument.current.execCommand('justifyLeft');

        if (query('justifyLeft')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-left']);
        else setSelected(values => values.filter(item => item !== 'align-left'));

        break;

      case 'align-center':
        refs.rootDocument.current.execCommand('justifyCenter');

        if (query('justifyCenter')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-center']);
        else setSelected(values => values.filter(item => item !== 'align-center'));

        break;

      case 'align-right':
        refs.rootDocument.current.execCommand('justifyRight');

        if (query('justifyRight')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-right']);
        else setSelected(values => values.filter(item => item !== 'align-right'));

        break;

      case 'align-justify':
        refs.rootDocument.current.execCommand('justifyFull');

        if (query('justifyFull')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-justify']);
        else setSelected(values => values.filter(item => item !== 'align-justify'));

        break;

      case 'superscript':
        refs.rootDocument.current.execCommand('superscript');

        if (query('superscript')) setSelected(values => [...values, 'superscript']);
        else setSelected(values => values.filter(item => item !== 'superscript'));

        break;

      case 'subscript':
        refs.rootDocument.current.execCommand('subscript');

        if (query('subscript')) setSelected(values => [...values, 'subscript']);
        else setSelected(values => values.filter(item => item !== 'subscript'));

        break;

      case 'indent':
        refs.rootDocument.current.execCommand('indent');

        break;

      case 'outdent':
        refs.rootDocument.current.execCommand('outdent');

        break;

      case 'font-version':
        refs.rootDocument.current.execCommand('formatBlock', undefined, argument);

        break;

      case 'font-family':
        refs.rootDocument.current.execCommand('styleWithCSS', true);

        refs.rootDocument.current.execCommand('fontName', undefined, argument);

        refs.rootDocument.current.execCommand('styleWithCSS', false);

        break;

      case 'font-size':
        refs.rootDocument.current.execCommand('styleWithCSS', true);

        refs.rootDocument.current.execCommand('fontSize', undefined, argument);

        refs.rootDocument.current.execCommand('styleWithCSS', false);

        break;

      case 'font-color':
        refs.rootDocument.current.execCommand('styleWithCSS', true);

        refs.rootDocument.current.execCommand('foreColor', undefined, argument);

        refs.rootDocument.current.execCommand('styleWithCSS', false);

        break;

      case 'font-background':
        refs.rootDocument.current.execCommand('styleWithCSS', true);

        refs.rootDocument.current.execCommand('backColor', undefined, argument);

        refs.rootDocument.current.execCommand('styleWithCSS', false);

        break;

      case 'list-ordered':
        refs.rootDocument.current.execCommand('insertOrderedList');

        if (query('insertOrderedList')) setSelected(values => [...values.filter(item => !item.includes('list')), 'list-ordered']);
        else setSelected(values => values.filter(item => item !== 'list-ordered'));

        break;

      case 'list-unordered':
        refs.rootDocument.current.execCommand('insertUnorderedList');

        if (query('insertUnorderedList')) setSelected(values => [...values.filter(item => !item.includes('list')), 'list-unordered']);
        else setSelected(values => values.filter(item => item !== 'list-unordered'));

        break;

      case 'horizontal-rule':
        refs.rootDocument.current.execCommand('insertHorizontalRule');

        break;

      case 'link-add':
        refs.rootDocument.current.execCommand('createLink', undefined, argument);

        break;

      case 'link-remove':
        refs.rootDocument.current.execCommand('unlink');

        break;

      case 'image':
        refs.rootDocument.current.execCommand('insertImage', undefined, argument);

        break;

      case 'html':
        refs.rootDocument.current.execCommand('insertHTML', undefined, argument);

        break;

      // actions
      case 'copy':
        refs.rootDocument.current.execCommand('copy');

        break;

      case 'cut':
        refs.rootDocument.current.execCommand('cut');

        break;

      case 'paste':
        if (refs.rootDocument.current.queryCommandSupported('paste')) refs.rootDocument.current.execCommand('paste');
        else paste();

        break;

      case 'delete':
        refs.rootDocument.current.execCommand('delete');

        break;

      case 'clear':
        refs.rootDocument.current.execCommand('removeFormat');

        break;

      case 'select-all':
        refs.rootDocument.current.execCommand('selectAll');

        break;

      case 'undo':
        refs.rootDocument.current.execCommand('undo');

        break;

      case 'redo':
        refs.rootDocument.current.execCommand('redo');

        break;

      default:
        break;
    }
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // italic, underline, bold
  // updates toolbar
  const updateOptions = ['font-family', 'font-version', 'font-size', 'font-color', 'font-background', 'italic', 'underline', 'bold', 'strike-line', 'align-left', 'align-center', 'align-right', 'align-justify', 'superscript', 'subscript', 'indent', 'outdent', 'list-ordered', 'list-unordered', 'horizontal-rule', 'link-add', 'link-remove', 'quote', 'image', 'video', 'video-youtube', 'table', 'drawing', 'code'];

  const updates_ = updates && (!is('array', exclude) || includes(...updateOptions));

  // copy, paste, cut
  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('copy', 'paste', 'cut', 'clear', 'undo', 'redo', 'delete', 'select-all', 'save', 'print'));

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

  const MiniMenuProps: any = {
    tonal,

    color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed',

    ...MiniMenuProps_
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

      name,

      children: children_,

      ...other_
    } = props_;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        name={name}

        {...TooltipProps}
      >
        {React.cloneElement(children_, {
          ...other_,

          ...children_.props
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

      children: children_,

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
        {React.cloneElement(children_, {
          ...other_,

          ...children_.props
        })}
      </Append>
    );
  }, []);

  const onMouseDown = React.useCallback(() => {
    const selection_ = refs.rootWindow.current.getSelection();

    if (
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, []);

  const onMouseUp = React.useCallback(() => {
    if (refs.range.current) {
      const selection_ = refs.rootWindow.current.getSelection();

      selection_.removeAllRanges();
      selection_.addRange(refs.range.current);
    }
  }, []);

  const PaletteItem = React.useCallback((props_: any) => {
    const {
      color: color_,

      ...other_
    } = props_;

    return (
      <span
        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-palette-item'
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

      onUpdate: onUpdate_,

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
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        {/* Colors */}
        <Line
          gap={0.5}

          onMouseUp={onMouseUp}

          onMouseDown={onMouseDown}
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
                onUpdate_('#000000');

                onClose();
              }}
            />

            <PaletteItem
              color='#ffffff'

              onClick={() => {
                onUpdate_('#ffffff');

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
                    if (refs.range.current) {
                      const selection_ = refs.rootWindow.current.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    onUpdate_(colors[item][item_]);

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

            name={l('Custom color')}

            version='outlined'

            size='small'

            value={refs.inputValues.current[version_]}

            onChange={valueNew => updateInputValues(version_, valueNew)}

            {...ColorTextFieldProps}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'onesy-RichTextEditor-text-field-color'
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
              if (refs.range.current) {
                const selection_ = refs.rootWindow.current.getSelection();

                selection_.removeAllRanges();
                selection_.addRange(refs.range.current);
              }

              onUpdate_(refs.inputValues.current[version_]);

              onClose();
            }}
          >
            Apply
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const Input = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      label,

      labelButton,

      value: value__,

      onChange: onChange__,

      onClick,

      InputComponent = TextField,

      InputProps,

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
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        <Line
          gap={0.5}

          direction='row'

          align='center'

          style={{
            width: '100%'
          }}
        >
          <InputComponent
            tonal={tonal}

            color={color}

            name={label}

            version='outlined'

            size='small'

            value={value__}

            onChange={onChange__}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'onesy-RichTextEditor-text-field-color'
              ],

              classes.textFieldColor
            ])}

            {...InputProps}
          />

          <Button
            tonal={tonal}

            color='inherit'

            version='text'

            size='small'

            onClick={onClick}
          >
            {labelButton}
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const font_families = [
    ...fontFamilies,

    ...addFontFamilies
  ];

  const font_sizes = [
    { label: '11', value: 1 },
    { label: '14', value: 2 },
    { label: '16', value: 3 },
    { label: '18', value: 4 },
    { label: '24', value: 5 },
    { label: '32', value: 6 },
    { label: '48', value: 7 }
  ];

  const font_versions = [
    { label: <Type version='b2'>{l('Normal text')}</Type>, value: 'p' },
    { label: <Type version='h1'>{l('Heading 1')}</Type>, value: 'h1' },
    { label: <Type version='h2'>{l('Heading 2')}</Type>, value: 'h2' },
    { label: <Type version='h3'>{l('Heading 3')}</Type>, value: 'h3' },
    { label: <Type version='t1'>{l('Heading 4')}</Type>, value: 'h4' },
    { label: <Type version='t2'>{l('Heading 5')}</Type>, value: 'h5' }
  ];

  const queryValueUpdate = () => {
    const selected_ = [];
    const inputValues_ = { ...inputValues };

    const updateOptionValues = [
      { name: 'italic', command: 'italic' },
      { name: 'underline', command: 'underline' },
      { name: 'bold', command: 'bold' },
      { name: 'strike-line', command: 'strikeThrough' },
      { name: 'align-left', command: 'justifyLeft' },
      { name: 'align-center', command: 'justifyCenter' },
      { name: 'align-right', command: 'justifyRight' },
      { name: 'align-justify', command: 'justifyFull' },
      { name: 'superscript', command: 'superscript' },
      { name: 'subscript', command: 'subscript' },
      { name: 'list-ordered', command: 'insertOrderedList' },
      { name: 'list-unordered', command: 'insertUnorderedList' }
    ];

    updateOptionValues.forEach(item => {
      if (query(item.command)) selected_.push(item.name);
    });

    // Font version
    const fontVersion = query('formatBlock');

    const fontVersionValue = font_versions.find(item_ => item_.value === fontVersion) || font_versions[0];

    inputValues_['font-version'] = fontVersionValue?.value;

    // Font family
    const fontFamily = query('fontName');

    const fontFamilyValue = font_families.find(item_ => fontFamily?.includes(item_.label)) || font_families.find(item_ => item_.label === 'DM Sans');

    inputValues_['font-family'] = fontFamilyValue?.value;

    // Font version
    const fontSize = query('fontSize');

    const fontSizeValue = font_sizes.find(item_ => item_.value === fontSize) || font_sizes.find(item_ => item_.label === '14');

    inputValues_['font-size'] = fontSizeValue?.value;

    setInputValues(inputValues_);

    setSelected(selected_);
  };

  const onMouseUpValue = React.useCallback(() => {
    queryValueUpdate();

    setTimeout(() => {
      const selection_ = refs.rootWindow.current.getSelection();

      if (!selection_.anchorNode || !refs.value.current.contains(selection_.anchorNode)) return setSelection('' as any);

      const rect = selection_.getRangeAt(0).getBoundingClientRect();

      setSelection(Math.round(rect.width) ? rect : '' as any);
    });
  }, []);

  const onMouseDownValue = React.useCallback(() => {
    queryValueUpdate();
  }, []);

  const updateElements = {
    'font-version': (
      <Select
        name={l('Font Version')}

        valueDefault={font_versions.find(item => item.value.includes('p')).value}

        value={inputValues['font-version']}

        onChange={(valueNew: string) => {
          updateInputValues('font-version', valueNew);

          method('font-version')(valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-select'
          ],

          SelectProps?.className,
          classes.select
        ])}

        style={{
          minWidth: '150px'
        }}
      >
        {font_versions.map(item => (
          <ListItem
            key={item.value}

            primary={item.label}

            value={item.value}

            button

            {...ListItemProps}
          />
        ))}
      </Select>
    ),
    'font-family': (
      <Select
        name={l('Font Family')}

        valueDefault={font_families.find(item => item.label.includes('DM Sans')).value}

        value={inputValues['font-family']}

        onChange={(valueNew: string) => {
          updateInputValues('font-family', valueNew);

          method('font-family')(valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-select'
          ],

          SelectProps?.className,
          classes.select
        ])}

        style={{
          minWidth: '140px'
        }}
      >
        {font_families.map(item => (
          <ListItem
            key={item.value}

            primary={item.label}

            value={item.value}

            button

            style={{
              fontFamily: item.value
            }}

            {...ListItemProps}
          />
        ))}
      </Select>
    ),
    'font-size': (
      <Select
        name={l('Font Size')}

        valueDefault={+font_sizes.find(item => item.label.includes('14')).value}

        value={inputValues['font-size']}

        onChange={(valueNew: string) => {
          updateInputValues('font-size', +valueNew);

          method('font-size')(+valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-select'
          ],

          SelectProps?.className,
          classes.select
        ])}
      >
        {font_sizes.map(item => (
          <ListItem
            key={item.value}

            primary={item.label}

            value={item.value}

            button

            {...ListItemProps}
          />
        ))}
      </Select>
    ),

    'italic': (
      <WrapperToggleButton
        name={l('Italic')}
      >
        {is('function', render) ? render('italic', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('italic')}

            onClick={method('italic')}
          >
            <IconItalic {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'underline': (
      <WrapperToggleButton
        name={l('Underline')}
      >
        {is('function', render) ? render('underline', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('underline')}

            onClick={method('underline')}
          >
            <IconUnderline {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'bold': (
      <WrapperToggleButton
        name={l('Bold')}

        onClick={method('bold')}
      >
        {is('function', render) ? render('bold', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('bold')}
          >
            <IconBold {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'strike-line': (
      <WrapperToggleButton
        name={l('Strike Line')}

        onClick={method('strike-line')}
      >
        {is('function', render) ? render('strike-line', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('strike-line')}
          >
            <IconStrikeLine {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'font-color': (
      <WrapperAppend
        open={refs.open.current.color}

        anchorElement={refs.elements.color.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('color', false)}

            include={[refs.elements.color.current]}
          >
            <Palette
              version='font-color'

              onClose={() => updateOpen('color', false)}

              onUpdate={method('font-color')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.color ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.color}

              {...ToggleButtonProps}

              selected={refs.open.current.color}

              onClick={() => updateOpen('color', !refs.open.current.color)}
            >
              <IconColor {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-color-mini-menu': (
      <WrapperAppend
        open={refs.open.current.colorMiniMenu}

        anchorElement={refs.miniMenuElements.color}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('colorMiniMenu', false)}

            include={[refs.miniMenuElements.color as any]}
          >
            <Palette
              ref={refs.miniMenuElements.colorPalette}

              version='font-color'

              onClose={() => updateOpen('colorMiniMenu', false)}

              onUpdate={method('font-color')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.colorMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.color}

              {...ToggleButtonProps}

              selected={refs.open.current.colorMiniMenu}

              onClick={() => updateOpen('colorMiniMenu', !refs.open.current.colorMiniMenu)}
            >
              <IconColor {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-background': (
      <WrapperAppend
        open={refs.open.current.background}

        anchorElement={refs.elements.background.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('background', false)}

            include={[refs.elements.background.current]}
          >
            <Palette
              version='font-background'

              onClose={() => updateOpen('background', false)}

              onUpdate={method('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Background Color')}

          open={refs.open.current.background ? false : undefined}
        >
          {is('function', render) ? render('font-background', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.background}

              {...ToggleButtonProps}

              selected={refs.open.current.background}

              onClick={() => updateOpen('background', !refs.open.current.background)}
            >
              <IconBackground {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-background-mini-menu': (
      <WrapperAppend
        open={refs.open.current.backgroundMiniMenu}

        anchorElement={refs.miniMenuElements.background}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('backgroundMiniMenu', false)}

            include={[refs.miniMenuElements.background as any]}
          >
            <Palette
              ref={refs.miniMenuElements.backgroundPalette}

              version='font-background'

              onClose={() => updateOpen('backgroundMiniMenu', false)}

              onUpdate={method('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.backgroundMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-background', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.background}

              {...ToggleButtonProps}

              selected={refs.open.current.backgroundMiniMenu}

              onClick={() => updateOpen('backgroundMiniMenu', !refs.open.current.backgroundMiniMenu)}
            >
              <IconBackground {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),

    'align-left': (
      <WrapperToggleButton
        name={l('Align Left')}
      >
        {is('function', render) ? render('align-left', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-left')}

            onClick={method('align-left')}
          >
            <IconAlignLeft {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-center': (
      <WrapperToggleButton
        name={l('Align Center')}
      >
        {is('function', render) ? render('align-center', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-center')}

            onClick={method('align-center')}
          >
            <IconAlignCenter {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-right': (
      <WrapperToggleButton
        name={l('Align Right')}
      >
        {is('function', render) ? render('align-right', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-right')}

            onClick={method('align-right')}
          >
            <IconAlignRight {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-justify': (
      <WrapperToggleButton
        name={l('Align Justify')}
      >
        {is('function', render) ? render('align-justify', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-justify')}

            onClick={method('align-justify')}
          >
            <IconAlignJustify {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'indent': (
      <WrapperToggleButton
        name={l('Indent')}
      >
        {is('function', render) ? render('indent', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('indent')}
          >
            <IconIndent {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'outdent': (
      <WrapperToggleButton
        name={l('Outdent')}
      >
        {is('function', render) ? render('outdent', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('outdent')}
          >
            <IconOutdent {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'superscript': (
      <WrapperToggleButton
        name={l('Superscript')}
      >
        {is('function', render) ? render('superscript', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('superscript')}

            onClick={method('superscript')}
          >
            <IconSuperscript {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'subscript': (
      <WrapperToggleButton
        name={l('Subscript')}
      >
        {is('function', render) ? render('subscript', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('subscript')}

            onClick={method('subscript')}
          >
            <IconSubscript {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'list-ordered': (
      <WrapperToggleButton
        name={l('List Ordered')}
      >
        {is('function', render) ? render('list-ordered', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('list-ordered')}

            onClick={method('list-ordered')}
          >
            <IconListOrdered {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'list-unordered': (
      <WrapperToggleButton
        name={l('List Unordered')}
      >
        {is('function', render) ? render('list-unordered', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('list-unordered')}

            onClick={method('list-unordered')}
          >
            <IconListUnordered {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'horizontal-rule': (
      <WrapperToggleButton
        name={l('Insert Horizontal Rule')}

        onClick={method('horizontal-rule')}
      >
        {is('function', render) ? render('horizontal-rule', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}
          >
            <IconHorizontalRule {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'link-add': (
      <WrapperAppend
        open={refs.open.current.link}

        anchorElement={refs.elements.linkAdd.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('link', false)}

            include={[refs.elements.linkAdd.current]}
          >
            <Input
              name={l('Link')}

              labelButton={l('Add')}

              value={refs.inputValues.current.link}

              onChange={valueNew => updateInputValues('link', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('link-add')(refs.inputValues.current.link);

                updateOpen('link', false);

                updateInputValues('link', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Link')}

          open={refs.open.current.link ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.linkAdd}

              {...ToggleButtonProps}

              selected={refs.open.current.link}

              onClick={() => updateOpen('link', !refs.open.current.link)}
            >
              <IconLinkAdd {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-add-mini-menu': (
      <WrapperAppend
        open={refs.open.current.linkMiniMenu}

        anchorElement={refs.miniMenuElements.linkAdd}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('linkMiniMenu', false)}

            include={[refs.miniMenuElements.linkAdd as any]}
          >
            <Input
              ref={refs.miniMenuElements.linkAddInput}

              name={l('Link')}

              labelButton={l('Add')}

              value={refs.inputValues.current.link}

              onChange={valueNew => updateInputValues('link', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('link-add')(refs.inputValues.current.link);

                updateOpen('linkMiniMenu', false);

                updateInputValues('link', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Link')}

          open={refs.open.current.linkMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.linkAdd}

              {...ToggleButtonProps}

              selected={refs.open.current.linkMiniMenu}

              onClick={() => updateOpen('linkMiniMenu', !refs.open.current.linkMiniMenu)}
            >
              <IconLinkAdd {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-remove': (
      <WrapperToggleButton
        name={l('Remove Link')}
      >
        {is('function', render) ? render('link-remove', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('link-remove')}
          >
            <IconLinkRemove {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'quote': (
      <WrapperAppend
        open={refs.open.current.quote}

        anchorElement={refs.elements.quote.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('quote', false)}

            include={[refs.elements.quote.current]}
          >
            <Input
              name={l('Quote')}

              labelButton={l('Add')}

              value={refs.inputValues.current.quote}

              onChange={valueNew => updateInputValues('quote', valueNew)}

              InputProps={{
                multiline: true
              }}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<blockquote>${refs.inputValues.current.quote}</blockquote>`);

                updateOpen('quote', false);

                updateInputValues('quote', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Quote')}

          open={refs.open.current.quote ? false : undefined}
        >
          {is('function', render) ? render('quote', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.quote}

              {...ToggleButtonProps}

              selected={refs.open.current.quote}

              onClick={() => updateOpen('quote', !refs.open.current.quote)}
            >
              <IconQuote {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'table': (
      <WrapperAppend
        open={refs.open.current.table}

        anchorElement={refs.elements.table.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('table', false)}

            include={[refs.elements.table.current]}
          >
            <Line
              gap={1}

              tonal={tonal}

              color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

              Component={Surface}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'onesy-RichTextEditor-palette'
                ],

                classes.palette
              ])}
            >
              <Line
                gap={1}

                direction='row'

                align='center'

                justify='center'
              >
                <NumericTextField
                  name={l('Rows')}

                  tonal={tonal}

                  color={color}

                  size='small'

                  version='outlined'

                  increment={false}

                  decrement={false}

                  value={refs.inputValues.current.tableRows}

                  onChange={valueNew => updateInputValues('tableRows', valueNew)}
                />

                ×

                <NumericTextField
                  name={l('Columns')}

                  tonal={tonal}

                  color={color}

                  size='small'

                  version='outlined'

                  increment={false}

                  decrement={false}

                  value={refs.inputValues.current.tableColumns}

                  onChange={valueNew => updateInputValues('tableColumns', valueNew)}
                />
              </Line>

              <Line
                gap={1}

                direction='row'

                align='center'

                justify='space-between'

                style={{
                  width: '100%'
                }}
              >
                <Label
                  size='small'
                >
                  <Switch
                    tonal={tonal}

                    color={props.color !== undefined ? props.color : 'default'}

                    checked={refs.inputValues.current.tableHeader}

                    onChange={valueNew => updateInputValues('tableHeader', valueNew)}
                  />

                  {l('Header')}
                </Label>

                <Button
                  tonal={tonal}

                  color='inherit'

                  version='text'

                  size='small'

                  onClick={() => {
                    if (refs.range.current) {
                      const selection_ = refs.rootWindow.current.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    let table = `<table>`;

                    if (refs.inputValues.current.tableHeader && refs.inputValues.current.tableColumns > 0) {
                      table += `<thead><tr>${'<th></th>'.repeat(refs.inputValues.current.tableColumns)}</tr></thead>`;
                    }

                    if (refs.inputValues.current.tableRows > 0 && refs.inputValues.current.tableColumns > 0) {
                      table += `<tbody>`;

                      for (let i = 0; i < refs.inputValues.current.tableRows; i++) {
                        table += `<tr>${'<td></td>'.repeat(refs.inputValues.current.tableColumns)}</tr>`;
                      }

                      table += `</tbody>`;
                    }

                    table += `</table>`;

                    method('html')(table);

                    updateOpen('table', false);

                    updateInputValues('tableRows', '');
                    updateInputValues('tableColumns', '');
                    updateInputValues('tableHeader', '');
                  }}
                >
                  {l('Add')}
                </Button>
              </Line>
            </Line>
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Table')}

          open={refs.open.current.table ? false : undefined}
        >
          {is('function', render) ? render('table', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.table}

              {...ToggleButtonProps}

              selected={refs.open.current.table}

              onClick={() => updateOpen('table', !refs.open.current.table)}
            >
              <IconTable {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'image': (
      <WrapperAppend
        open={refs.open.current.image}

        anchorElement={refs.elements.image.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('image', false)}

            include={[refs.elements.image.current]}
          >
            <Input
              name={l('Image')}

              labelButton={l('Add')}

              value={refs.inputValues.current.image}

              onChange={valueNew => updateInputValues('image', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('image')(refs.inputValues.current.image);

                updateOpen('image', false);

                updateInputValues('image', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Image')}

          open={refs.open.current.image ? false : undefined}
        >
          {is('function', render) ? render('image', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.image}

              {...ToggleButtonProps}

              selected={refs.open.current.image}

              onClick={() => updateOpen('image', !refs.open.current.image)}
            >
              <IconImage {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'video': (
      <WrapperAppend
        open={refs.open.current.video}

        anchorElement={refs.elements.video.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('video', false)}

            include={[refs.elements.video.current]}
          >
            <Input
              name={l('Video')}

              labelButton={l('Add')}

              value={refs.inputValues.current.video}

              onChange={valueNew => updateInputValues('video', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<video controls><source src='${refs.inputValues.current.video}' /></video>`);

                updateOpen('video', false);

                updateInputValues('video', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Video')}

          open={refs.open.current.video ? false : undefined}
        >
          {is('function', render) ? render('video', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.video}

              {...ToggleButtonProps}

              selected={refs.open.current.video}

              onClick={() => updateOpen('video', !refs.open.current.video)}
            >
              <IconVideo {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'video-youtube': (
      <WrapperAppend
        open={refs.open.current.videoYoutube}

        anchorElement={refs.elements.videoYoutube.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('videoYoutube', false)}

            include={[refs.elements.videoYoutube.current]}
          >
            <Input
              name={l('Youtube Video ID')}

              labelButton={l('Add')}

              value={refs.inputValues.current.videoYoutube}

              onChange={valueNew => updateInputValues('videoYoutube', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${refs.inputValues.current.videoYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

                updateOpen('videoYoutube', false);

                updateInputValues('videoYoutube', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Youtube Video')}

          open={refs.open.current.videoYoutube ? false : undefined}
        >
          {is('function', render) ? render('videoYoutube', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.videoYoutube}

              {...ToggleButtonProps}

              selected={refs.open.current.videoYoutube}

              onClick={() => updateOpen('videoYoutube', !refs.open.current.videoYoutube)}
            >
              <IconVideoYoutube {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'drawing': (
      <WrapperAppend
        open={refs.open.current.drawing}

        anchorElement={refs.elements.drawing.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('drawing', false)}

            include={[refs.elements.drawing, refs.elements.drawingSelect, refs.elements.drawingSelect.current, refs.elements.drawingPalette, refs.elements.drawingPalette.current, refs.elements.drawingSize, refs.elements.drawingSize.current]}

            includeParentQueries={['.onesy-Drawing-palette', '.onesy-Drawing-modal']}

            includeQueries={['a[download]', 'svg', 'path']}
          >
            <Line
              gap={2}

              tonal={tonal}

              color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

              Component={Surface}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'onesy-RichTextEditor-palette'
                ],

                classes.palette
              ])}
            >
              <Drawing
                tonal={tonal}

                color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

                version={version}

                svgRef={refs.elements.drawingSvg}

                SizeProps={{
                  ref: refs.elements.drawingSize
                }}

                SelectProps={{
                  MenuProps: {
                    ListProps: {
                      ref: refs.elements.drawingSelect
                    },

                    ...SelectProps?.MenuProps
                  }
                }}

                PaletteProps={{
                  ref: refs.elements.drawingPalette
                }}

                {...DrawingProps}
              />

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
                    if (refs.range.current) {
                      const selection_ = refs.rootWindow.current.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    // Get svg html element
                    // clone it, remove circle
                    // and add it as outer html
                    // to the rich text editor
                    const svg = refs.elements.drawingSvg.current;

                    const svgClone = svg.cloneNode(true);

                    // Clean up
                    svgClone.style.width = refs.inputValues.current.drawingWidth;

                    svgClone.style.height = refs.inputValues.current.drawingHeight;

                    svgClone.style.boxShadow = 'none';

                    const pointers = Array.from(svgClone.querySelectorAll('.onesy-Drawing-pointer')) as Array<HTMLElement>;

                    pointers.forEach(pointer => pointer.remove());

                    const valueNew = svgClone.outerHTML;

                    method('html')(valueNew);

                    updateOpen('drawing', false);
                  }}
                >
                  {l('Add')}
                </Button>
              </Line>
            </Line>
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Drawing')}

          open={refs.open.current.drawing ? false : undefined}
        >
          {is('function', render) ? render('drawing', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.drawing}

              {...ToggleButtonProps}

              selected={refs.open.current.drawing}

              onClick={() => updateOpen('drawing', !refs.open.current.drawing)}
            >
              <IconDrawing {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'code': (
      <WrapperAppend
        open={refs.open.current.code}

        anchorElement={refs.elements.code.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('code', false)}

            include={[refs.elements.code.current]}
          >
            <Input
              name={l('Code')}

              labelButton={l('Add')}

              value={refs.inputValues.current.code}

              onChange={valueNew => updateInputValues('code', valueNew)}

              InputProps={{
                multiline: true
              }}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<pre><code>${refs.inputValues.current.code}</code></pre>`);

                updateOpen('code', false);

                updateInputValues('code', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Code')}

          open={refs.open.current.code ? false : undefined}
        >
          {is('function', render) ? render('code', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.code}

              {...ToggleButtonProps}

              selected={refs.open.current.code}

              onClick={() => updateOpen('code', !refs.open.current.code)}
            >
              <IconCode {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    )
  };

  const actionElements = {
    'clear': (
      <WrapperToggleButton
        name={l('Clear')}
      >
        {is('function', render) ? render('clear', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('clear')}
          >
            <IconClear {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    )
  };

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      Component={Component}

      className={classNames([
        staticClassName('RichTextEditor', theme) && [
          'onesy-RichTextEditor-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
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
            staticClassName('RichTextEditor', theme) && [
              'onesy-RichTextEditor-toolbars'
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

              role='toolbar'

              aria-label={l('Updates')}

              {...ToolbarUpdatesProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'onesy-RichTextEditor-toolbar'
                ],

                ToolbarUpdatesProps?.className,
                classes.toolbar,
                classes.toolbar_updates
              ])}
            >
              {includes('font-family', 'font-size', 'font-version') && (
                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('font-version') && updateElements['font-version']}

                  {includes('font-family') && updateElements['font-family']}

                  {includes('font-size') && updateElements['font-size']}
                </Line>
              )}

              {includes('italic', 'underlined', 'bold', 'strike-line') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('italic') && updateElements['italic']}

                  {includes('underline') && updateElements['underline']}

                  {includes('bold') && updateElements['bold']}

                  {includes('strike-line') && updateElements['strike-line']}
                </ToggleButtons>
              )}

              {includes('font-color', 'font-background') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('font-color') && updateElements['font-color']}

                  {includes('font-background') && updateElements['font-background']}
                </ToggleButtons>
              )}

              {includes('align-left', 'align-center', 'align-right', 'align-justify') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('align-left') && updateElements['align-left']}

                  {includes('align-center') && updateElements['align-center']}

                  {includes('align-right') && updateElements['align-right']}

                  {includes('align-justify') && updateElements['align-justify']}
                </ToggleButtons>
              )}

              {includes('indent', 'outdent') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('indent') && updateElements['indent']}

                  {includes('outdent') && updateElements['outdent']}
                </ToggleButtons>
              )}

              {includes('superscript', 'subscript') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('superscript') && updateElements['superscript']}

                  {includes('subscript') && updateElements['subscript']}
                </ToggleButtons>
              )}

              {includes('list-ordered', 'list-unordered') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('list-ordered') && updateElements['list-ordered']}

                  {includes('list-unordered') && updateElements['list-unordered']}
                </ToggleButtons>
              )}

              {includes('horizontal-rule') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('horizontal-rule') && updateElements['horizontal-rule']}
                </ToggleButtons>
              )}

              {includes('link-add', 'link-remove') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('link-add') && updateElements['link-add']}

                  {includes('link-remove') && updateElements['link-remove']}
                </ToggleButtons>
              )}

              {includes('quote', 'image', 'video', 'video-youtube', 'table', 'drawing', 'code') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('quote') && updateElements['quote']}

                  {includes('table') && updateElements['table']}

                  {includes('image') && updateElements['image']}

                  {includes('video') && updateElements['video']}

                  {includes('video-youtube') && updateElements['video-youtube']}

                  {includes('drawing') && updateElements['drawing']}

                  {includes('code') && updateElements['code']}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'onesy-RichTextEditor-divider'
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

              role='toolbar'

              aria-label={l('Actions')}

              {...ToolbarActionsProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'onesy-RichTextEditor-toolbar'
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
                  {includes('copy', 'cut', 'paste', 'delete') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('copy') && (
                        <WrapperToggleButton
                          name={l('Copy')}
                        >
                          {is('function', render) ? render('copy', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('copy')}
                            >
                              <IconCopy {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('cut') && (
                        <WrapperToggleButton
                          name={l('Cut')}
                        >
                          {is('function', render) ? render('cut', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('cut')}
                            >
                              <IconCut {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('paste') && (
                        <WrapperToggleButton
                          name={l('Paste')}
                        >
                          {is('function', render) ? render('paste', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('paste')}
                            >
                              <IconPaste {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('delete') && (
                        <WrapperToggleButton
                          name={l('Delete')}
                        >
                          {is('function', render) ? render('delete', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('delete')}
                            >
                              <IconDelete {...IconProps} />
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
                  {includes('clear', 'select-all') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('clear') && actionElements['clear']}

                      {includes('select-all') && (
                        <WrapperToggleButton
                          name={l('Select All')}
                        >
                          {is('function', render) ? render('select-all', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('select-all')}
                            >
                              <IconSelectAll {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}

                  {includes('undo', 'redo') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('undo') && (
                        <WrapperToggleButton
                          name={l('Undo')}
                        >
                          {is('function', render) ? render('undo', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('undo')}
                            >
                              <IconUndo {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('redo') && (
                        <WrapperToggleButton
                          name={l('Redo')}
                        >
                          {is('function', render) ? render('redo', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('redo')}
                            >
                              <IconRedo {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}

                  {includes('save', 'print') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('save') && (
                        <WrapperToggleButton
                          name={l('Save')}
                        >
                          {is('function', render) ? render('save', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={() => save(refs.value.current)}
                            >
                              <IconSave {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('print') && (
                        <WrapperToggleButton
                          name={l('Print')}
                        >
                          {is('function', render) ? render('print', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={() => print(refs.value.current)}
                            >
                              <IconPrint {...IconProps} />
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
              staticClassName('RichTextEditor', theme) && [
                'onesy-RichTextEditor-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      {miniMenu && !!refs.miniMenuInclude.current.length && (
        <Append
          open={selection}

          element={
            ({ ref: ref_, values, style }) => (
              <div
                ref={item => {
                  if (ref_) {
                    if (is('function', ref_)) ref_(item);
                    else ref_.current = item;

                    refs.miniMenu.current = item;
                  }
                }}

                style={{
                  ...((values?.x === 0 && values?.y === 0) ? {
                    visibility: 'hidden'
                  } : undefined),

                  ...style
                }}
              >
                <Fade
                  in={!!selection}

                  add
                >
                  <ClickListener
                    onClickOutside={() => {
                      setSelection('' as any);
                    }}

                    include={[refs.miniMenu, refs.miniMenu.current, refs.miniMenuElements.colorPalette, refs.miniMenuElements.colorPalette.current, refs.miniMenuElements.backgroundPalette, refs.miniMenuElements.backgroundPalette.current, refs.miniMenuElements.linkAddInput, refs.miniMenuElements.linkAddInput.current]}
                  >
                    <Line
                      gap={2}

                      direction='row'

                      align='center'

                      justify='flex-start'

                      role='toolbar'

                      aria-label={l('Mini menu')}

                      Component={Surface}

                      {...MiniMenuProps}

                      className={classNames([
                        staticClassName('RichTextEditor', theme) && [
                          'onesy-RichTextEditor-mini-menu'
                        ],

                        MiniMenuProps?.className,
                        classes.miniMenu
                      ])}
                    >
                      {includesMinMenu('italic', 'underlined', 'bold', 'strike-line') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('italic') && updateElements['italic']}

                          {includesMinMenu('underline') && updateElements['underline']}

                          {includesMinMenu('bold') && updateElements['bold']}

                          {includesMinMenu('strike-line') && updateElements['strike-line']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('font-color', 'font-background') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('font-color') && updateElements['font-color-mini-menu']}

                          {includesMinMenu('font-background') && updateElements['font-background-mini-menu']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('align-left', 'align-center', 'align-right', 'align-justify') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('align-left') && updateElements['align-left']}

                          {includesMinMenu('align-center') && updateElements['align-center']}

                          {includesMinMenu('align-right') && updateElements['align-right']}

                          {includesMinMenu('align-justify') && updateElements['align-justify']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('link-add', 'link-remove') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('link-add') && updateElements['link-add-mini-menu']}

                          {includesMinMenu('link-remove') && updateElements['link-remove']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('clear') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('clear') && actionElements['clear']}
                        </ToggleButtons>
                      )}
                    </Line>
                  </ClickListener>
                </Fade>
              </div>
            )
          }

          anchor={selection}

          portal

          alignment='center'

          position='bottom'

          clearOnClose

          {...AppendProps}
        />
      )}

      <Surface
        ref={refs.value}

        color='default'

        onMouseUp={onMouseUpValue}

        onMouseDown={onMouseDownValue}

        onInput={onUpdate}

        contentEditable

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'onesy-RichTextEditor-value'
          ],

          classes.value
        ])}
      />
    </Line>
  );
});

RichTextEditor.displayName = 'onesy-RichTextEditor';

export default RichTextEditor;
