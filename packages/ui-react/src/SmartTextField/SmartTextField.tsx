import React from 'react';

import { hash, innerHTMLToText, is, isEnvironment, parse, stringToColor, textToInnerHTML } from '@onesy/utils';
import { classNames, colors, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialFormatAlignLeft from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignLeftW100';
import IconMaterialFormatAlignCenter from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignCenterW100';
import IconMaterialFormatAlignRight from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignRightW100';
import IconMaterialFormatAlignJustify from '@onesy/icons-material-rounded-react/IconMaterialFormatAlignJustifyW100';
import IconMaterialFormatColorText from '@onesy/icons-material-rounded-react/IconMaterialFormatColorTextW100';
import IconMaterialFormatColorFill from '@onesy/icons-material-rounded-react/IconMaterialFormatColorFillW100';
import IconMaterialFormatListNumbered from '@onesy/icons-material-rounded-react/IconMaterialFormatListNumberedW100';
import IconMaterialFormatListBulleted from '@onesy/icons-material-rounded-react/IconMaterialFormatListBulletedW100';
import IconMaterialSuperscript from '@onesy/icons-material-rounded-react/IconMaterialSuperscriptW100';
import IconMaterialSubscript from '@onesy/icons-material-rounded-react/IconMaterialSubscriptW100';
import IconMaterialFormatItalic from '@onesy/icons-material-rounded-react/IconMaterialFormatItalicW100';
import IconMaterialFormatUnderlined from '@onesy/icons-material-rounded-react/IconMaterialFormatUnderlinedW100';
import IconMaterialStrikethroughS from '@onesy/icons-material-rounded-react/IconMaterialStrikethroughSW100';
import IconMaterialFormatBold from '@onesy/icons-material-rounded-react/IconMaterialFormatBoldW100';
import IconMaterialAddLink from '@onesy/icons-material-rounded-react/IconMaterialAddLinkW100';
import IconMaterialLinkOff from '@onesy/icons-material-rounded-react/IconMaterialLinkOffW100';
import IconMaterialFormatClear from '@onesy/icons-material-rounded-react/IconMaterialFormatClearW100';

import ColorTextFieldElement from '../ColorTextField';
import TextFieldElement, { ITextField } from '../TextField/TextField';
import LineElement from '../Line';
import ListElement from '../List';
import ListItemElement from '../ListItem';
import AvatarElement from '../Avatar';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import ButtonElement from '../Button';
import AppendElement from '../Append';
import FadeElement from '../Fade';
import TooltipElement from '../Tooltip';
import ToggleButtonElement from '../ToggleButton';
import ClickListenerElement from '../ClickListener';
import ToggleButtonsElement from '../ToggleButtons';
import MenuElement from '../Menu';
import DividerElement from '../Divider';
import { sanitize, caret, keyboardStyleCommands, staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    minHeight: '20px',
    width: '100%',

    '& .onesy-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
    },

    '& ul, & ol': {
      listStylePosition: 'inside'
    }
  },

  root_type: {
    minHeight: '20px',
    width: '100%',
    cursor: 'text',

    '& .onesy-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
    },

    '& ul, & ol': {
      listStylePosition: 'inside'
    }
  },

  menu: {
    width: '100vw',
    maxWidth: '240px',
    borderRadius: theme.methods.shape.radius.value(2.5),
    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.04)',
    background: theme.palette.light ? theme.palette.color.neutral[99] : theme.palette.color.neutral[20]
  },

  list: {
    maxHeight: '240px',
    overflow: 'hidden auto'
  },

  textMiniMenuWrapper: {
    paddingBlock: theme.methods.space.value(1, 'px')
  },

  textMiniMenu: {
    padding: theme.methods.space.value(1.5, 'px'),
    borderRadius: theme.methods.shape.radius.value(140, 'px'),
    boxShadow: theme.shadows.values.default[2],
    maxWidth: 'calc(100vw - 24px)',
    rowGap: '4px'
  },

  textMiniMenuAdditionalMenu: {
    minWidth: 'clamp(140px, 90%, 250px)',
    zIndex: '1514',
    boxShadow: theme.shadows.values.default[2]
  },

  inputWrapper: {
    padding: theme.methods.space.value(1, 'px'),
    borderRadius: theme.methods.shape.radius.value(1, 'px'),
    boxShadow: theme.shadows.values.default[2]
  },

  singleLine: {
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  input: {
    '&.onesy-TextField-root': {
      flex: '1 1 auto !important'
    }
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
    '&.onesy-ColorTextField-root': {
      flex: '1 1 auto'
    }
  },

  helperText: {
    display: 'inline-flex',
    color: theme.palette.text.default.secondary,
    userSelect: 'none'
  },

  error_color: {
    color: [theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80], '!important']
  },

  error_hover_color: {
    color: [theme.palette.light ? theme.palette.color.error[20] : theme.palette.color.error[90], '!important']
  }
}), { name: 'onesy-SmartTextField' });

export type ISmartTextField = ITextField & {
  placeholder?: any;

  edit?: boolean;

  mention?: boolean;

  multiline?: boolean;

  onChangeMention?: (value?: string, version?: '@') => any;

  optionsMention?: any[];

  mentionLabel?: (items: any[], props: { addTag?: (value: any) => any }) => any;

  additional?: any;

  miniMenuExtended?: boolean;

  pasteText?: boolean;

  HelperTextProps?: any;

  ColorTextFieldProps?: IPropsAny;
};

const SmartTextField: React.FC<ISmartTextField> = props_ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySmartTextField?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const TextField = theme?.elements?.TextField || TextFieldElement;

  const List = theme?.elements?.List || ListElement;

  const ListItem = theme?.elements?.ListItem || ListItemElement;

  const Avatar = theme?.elements?.Avatar || AvatarElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Button = theme?.elements?.Button || ButtonElement;

  const Append = theme?.elements?.Append || AppendElement;

  const Fade = theme?.elements?.Fade || FadeElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const ToggleButton = theme?.elements?.ToggleButton || ToggleButtonElement;

  const ClickListener = theme?.elements?.ClickListener || ClickListenerElement;

  const ToggleButtons = theme?.elements?.ToggleButtons || ToggleButtonsElement;

  const Menu = theme?.elements?.Menu || MenuElement;

  const Divider = theme?.elements?.Divider || DividerElement;

  const ColorTextField = theme?.elements?.ColorTextField || ColorTextFieldElement;

  const {
    ref,

    tonal = true,

    color = 'default',

    version = 'text',

    size = 'regular',

    valueDefault,

    value: value_,

    inputProps,

    onChange,

    error: error_,

    name,

    placeholder,

    edit,

    mention,

    multiline,

    onChangeMention,

    optionsMention: optionsMention_,

    error,

    helperText,

    mentionLabel,

    onKeyDown: onKeyDown_,

    pasteText = true,

    readOnly,

    additional,

    miniMenuExtended,

    HelperTextProps,

    ColorTextFieldProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState<any>(valueDefault || '');
  const [openMenu, setOpenMenu] = React.useState<any>(false);
  const [offset, setOffset] = React.useState<any>([0, 8]);
  const [selectionMenu, setSelectionMenu] = React.useState<any>();
  const [optionsMention, setOptionsMention] = React.useState<any>([]);
  const [textSelection, setTextSelection] = React.useState<{ selection: DOMRect; element: HTMLElement; }>();
  const [textSelected, setTextSelected] = React.useState<any>([]);
  const [open, setOpen] = React.useState<any>({});
  const [inputValues, setInputValues] = React.useState<any>({});

  const refs = {
    root: React.useRef<any>(null),
    input: React.useRef(null),
    searchElement: React.useRef<any>(null),
    error: React.useRef<any>(null),
    search: React.useRef<any>(null),
    open: React.useRef<any>(null),
    openMenu: React.useRef<any>(null),
    selectionMenu: React.useRef<any>(null),
    caret: React.useRef<any>(null),
    value: React.useRef<any>(null),
    version: React.useRef<any>(version),
    optionsMention: React.useRef(optionsMention),
    validateMeta: React.useRef<any>({}),
    range: React.useRef<any>(null),
    inputValues: React.useRef<any>(null),
    miniMenu: React.useRef<any>(null),
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
    textSelected: React.useRef<any>(null),
    textSelection: React.useRef<any>(null),
    rootDocument: React.useRef<Document>(null),
    rootWindow: React.useRef<Window>(null),
    edit: React.useRef(edit),
    multiline: React.useRef(multiline),
    readOnly: React.useRef(readOnly),
    onChange: React.useRef(onChange),
    props: React.useRef(props)
  };

  refs.value.current = value;

  refs.version.current = version;

  refs.open.current = open;

  refs.openMenu.current = openMenu;

  refs.selectionMenu.current = selectionMenu;

  refs.optionsMention.current = optionsMention;

  refs.inputValues.current = inputValues;

  refs.textSelected.current = textSelected;

  refs.textSelection.current = textSelection;

  refs.edit.current = edit;

  refs.multiline.current = multiline;

  refs.readOnly.current = readOnly;

  refs.onChange.current = onChange;

  refs.props.current = props;

  const rootDocument = isEnvironment('browser') && (refs.root.current?.ownerDocument || window.document);

  const rootWindow = rootDocument && (rootDocument.defaultView || window);

  refs.rootDocument.current = rootDocument;

  refs.rootWindow.current = rootWindow;

  const init = () => {
    if (version === 'text') {
      const valueNew = valueDefault || value || '';

      if (refs.root.current) {
        refs.root.current.innerHTML = valueNew;
      }
    }
  };

  React.useEffect(() => {
    // init
    init();
  }, []);

  React.useEffect(() => {
    setOptionsMention([...(optionsMention_ || [])]);
  }, [hash(optionsMention_)]);

  React.useEffect(() => {
    const valuePrevious = (refs.root.current!.innerHTML || '').replaceAll('&nbsp;', ' ');

    const valueNew = textToInnerHTML(value_ as string);

    if (value_ !== undefined && valuePrevious !== valueNew) validate(!value_ ? '' : sanitize(value_ as string));
  }, [value_]);

  // Save selection to revive, use it on execComand
  React.useEffect(() => {
    const selection_ = refs.rootWindow.current!.getSelection();

    if (
      selection_ &&
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, [open]);

  const updateInputValues = (property: string, itemValue: any) => {
    setInputValues((values: any) => ({
      ...values,

      [property]: itemValue
    }));
  };

  const updateOpen = (property: string, itemValue: any) => {
    setOpen((values: any) => ({
      ...values,

      [property]: itemValue
    }));
  };

  const validateElement = (element: any) => {
    if (element?.children) {
      Array.from(element?.children).forEach((child: any) => {
        // Any tag
        if (child.dataset.onesyVersion === 'mention-user') {
          // Replace the child if label & textContent don't match
          if (child.dataset.onesyLabel !== child.innerHTML) {
            element.replaceChild(
              window.document.createTextNode(child.textContent),
              child
            );

            refs.validateMeta.current.restore = true;
          }
        }

        if (child?.children) validateElement(child);
      });
    }
  };

  const validate = (valueNew: any = undefined) => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    // Update the root innerHTML
    if (valueNew !== undefined) refs.root.current.innerHTML = valueNew;

    refs.validateMeta.current.restore = false;

    // Find all span onesy-mention children
    // if they aren't valid, replace them with text node of their textContent
    validateElement(refs.root.current);

    if (refs.validateMeta.current.restore) caret.restore(refs.root.current, refs.caret.current);

    return refs.root.current.innerHTML;
  };

  const getAtSearchData = () => {
    if (refs.root.current) {
      const windowSelection = window.document.getSelection();

      if (!(windowSelection && windowSelection.rangeCount > 0)) return;

      const range = windowSelection?.getRangeAt(0);

      if (!range) return;

      // Only allow for text not in span user mention element
      if (windowSelection!.anchorNode?.parentElement?.dataset?.onesyVersion === 'mention-user') return '';

      // Text
      if (!['text', '#text'].includes(range?.commonAncestorContainer?.nodeName)) return '';

      const text = windowSelection!.anchorNode?.textContent || '';

      const start = text.slice(0, range.endOffset).split('').reverse().join('');

      let result: any = [];

      for (const valueText of start) {
        // All characters other than space, numbers
        if (!!valueText.match(/[^<>\\/\n\r\t]/)) result.unshift(valueText);
        else break;

        if (['@'].includes(valueText)) break;
      }

      result = result.includes('@') ? result.join('') : '';

      // Allow 1 space only
      if (result && result.match(/\s{2}/g)) return '';

      return result;
    }
  };

  refs.search.current = getAtSearchData();

  const onInput = (event?: Event) => {
    if (refs.root.current) {
      let valueInput = refs.root.current!.innerHTML || '';

      if (refs.root.current.textContent === '') {
        valueInput = '';

        refs.root.current!.innerHTML = '';
      }

      if (!refs.multiline.current) {
        const previous = valueInput;

        valueInput = valueInput.replace(/\r?\n|\r/gm, '');

        if (previous !== valueInput) refs.root.current!.innerHTML = valueInput;
      }

      valueInput = innerHTMLToText(valueInput);

      setValue(valueInput);

      if (is('function', refs.onChange.current)) refs.onChange.current!(valueInput, event as any);
    }
  };

  React.useEffect(() => {
    if (mention && refs.search.current !== undefined) onChangeMention?.(refs.search.current, '@');
  }, [mention, refs.search.current]);

  React.useEffect(() => {
    const method = () => {
      if (window.document.activeElement === refs.input.current) onInput();
    };

    window.document.addEventListener('selectionchange', method);

    onChangeMention?.(refs.search.current, '@');

    return () => {
      window.document.removeEventListener('selectionchange', method);
    };
  }, []);

  const updateSelection = () => {
    const windowSelection = window.document.getSelection();

    if (!(windowSelection && windowSelection.rangeCount > 0)) return;

    const range = windowSelection?.getRangeAt(0);

    if (range) setSelectionMenu(range?.getBoundingClientRect());
  };

  const onOpenSearch = async () => {
    if (!refs.openMenu.current && !!refs.optionsMention.current.length) {
      // open
      setOpenMenu(true);

      // selection
      updateSelection();
    }
  };

  const onCloseSearch = () => {
    if (refs.openMenu.current) {
      setOpenMenu(false);

      setSelectionMenu(null);
    }
  };

  const updateOffset = () => {
    setOffset([-(refs.searchElement.current?.clientWidth || 0), 8]);
  };

  const onFocus = () => {
    // setFocus(true);
  };

  const onBlur = () => {
    // setFocus(false);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const windowSelection = window.getSelection();

    if (windowSelection) {
      // if (event.key === 'Enter') {
      //   event.preventDefault();

      //   const anchor = windowSelection.anchorNode as HTMLElement;
      //   const element = anchor.parentElement;

      //   const multiple = anchor.tagName === 'P' && anchor.children.length === 1 && anchor.children[0].tagName === 'BR';

      //   window.document.execCommand('insertHTML', false, `<p><br /></p>`.repeat(multiple ? 2 : 1));

      //   const range = new Range();

      //   const rangeStartElement = ((multiple ? anchor : element) as any)?.nextElementSibling;

      //   if (rangeStartElement) range.setStart(rangeStartElement, 0);

      //   windowSelection.removeAllRanges();
      //   windowSelection.addRange(range);
      // }

      if (event.key === 'ArrowRight') {
        // If in user mention span
        // move out of it with adding new empty space root node after the user mention span
        // only if caret is at the end of the span, & span is last child of it's parent
        if (!(windowSelection && windowSelection.rangeCount > 0)) return;

        const range = windowSelection.getRangeAt(0);

        const caretElement = windowSelection.anchorNode!.parentElement;
        const caretElementParent = caretElement!.parentElement as HTMLElement;
        const caretElementParentChildNodes = Array.from(caretElementParent!.childNodes);

        if (
          caretElement?.dataset?.onesyVersion === 'mention-user' &&
          range.endOffset === windowSelection.anchorNode!.textContent!.length &&
          caretElementParentChildNodes[caretElementParentChildNodes.length - 1] === caretElement
        ) {
          caretElementParent.insertBefore(window.document.createTextNode('\u00A0'), caretElement.nextElementSibling);
        }
      }
    }

    if (!refs.multiline.current) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }

    if (
      !refs.edit.current &&
      (
        (
          event.metaKey && (
            keyboardStyleCommands.includes(event.key)
          )
        ) ||
        (
          event.ctrlKey && (
            keyboardStyleCommands.includes(event.key)
          )
        )
      )
    ) {
      event.preventDefault();
    }

    if (is('function', onKeyDown_)) onKeyDown_(event as any);
  };

  const onPaste = (event: ClipboardEvent) => {
    // event.preventDefault();

    // const text = event.clipboardData?.getData('text/plain');

    // window.document.execCommand('insertText', false, text);
  };

  const onPasteText = (event: ClipboardEvent) => {
    event.preventDefault();

    const text = event.clipboardData?.getData('text/plain');

    window.document.execCommand('insertText', false, text);
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  const addTag = (item: any, versionMention = 'user') => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    const itemName = item.name;

    const classesElement = ['onesy-mention'];

    // Query text node that equals selection anchorNode
    // and replace its textContent's search value with new span
    const windowSelection = window.document.getSelection();

    if (!(windowSelection && windowSelection.rangeCount > 0)) return;

    const range = windowSelection?.getRangeAt(0);

    if (!range) return;

    const textNode: any = windowSelection!.anchorNode;
    const textContent = textNode.textContent;

    // Bug fix
    // only be able to insert data within the input
    // if by accident selection went outside the input
    // basically do nothing with it
    if (refs.root.current.contains(textNode.parentElement)) {
      const end = range.endOffset;
      const start = end - refs.search.current.length;

      const pre = textContent.slice(0, start);
      const post = textContent.slice(end);

      // Insert before anchorNode pre, item mention, and post
      if (pre) textNode.parentElement.insertBefore(window.document.createTextNode(pre), windowSelection!.anchorNode);

      const span = window.document.createElement('span');

      span.className = classesElement.join(' ');

      span.dataset.onesyLabel = `@${itemName}`;
      span.dataset.onesyVersion = `mention-${versionMention}`;
      span.dataset.onesyObject = `${versionMention}`;
      span.dataset.onesyId = item.id;

      span.innerHTML = `@${itemName}`;

      textNode.parentElement.insertBefore(span, windowSelection!.anchorNode);

      // 1 space only following the item mention
      textNode.parentElement.insertBefore(window.document.createTextNode('\u00A0'), windowSelection!.anchorNode);

      if (post) textNode.parentElement.insertBefore(window.document.createTextNode(post), windowSelection!.anchorNode);

      // Remove the text node
      textNode.remove();

      // Invoke onChange method with new value
      const valueInput = innerHTMLToText(refs.root.current.innerHTML);

      if (is('function', refs.onChange.current)) refs.onChange.current!(valueInput, { target: refs.root.current } as any);

      // Update the caret position to be outside the span mention
      // for amount of added characters + 1 space
      const added = `@${itemName}`.length - refs.search.current.length + 1;

      refs.caret.current.start = refs.caret.current.end += added;

      caret.restore(refs.root.current, refs.caret.current);
    }

    // Close the search
    onCloseSearch();
  };

  // If users response & not open, open
  // else if no users response & opened, close the search
  React.useEffect(() => {
    if (mention) {
      if (refs.openMenu.current && !optionsMention.length) onCloseSearch();
      else if (!refs.openMenu.current && refs.search.current && !!optionsMention.length) onOpenSearch();
    }
  }, [mention, optionsMention]);

  React.useEffect(() => {
    if (mention) {
      // Validate
      validate();

      // Update
      // open, selection & offset
      setTimeout(() => {
        refs.search.current ? onOpenSearch() : onCloseSearch();

        if (refs.openMenu.current) updateSelection();

        updateOffset();
      });
    }
  }, [mention, value]);

  React.useEffect(() => {
    // setError(error_);
  }, [error_]);

  const label = () => (
    is('function', mentionLabel) ? mentionLabel!(optionsMention, { addTag }) :
      <Line
        className={classes.menu}
      >
        <List
          size='small'

          className={classes.list}
        >
          {/* Users */}
          {optionsMention?.map((item: any, index: number) => (
            <ListItem
              key={index}

              start={(
                <Avatar
                  color={stringToColor(item.name)}

                  size='small'
                >
                  {item.name?.slice(0, 1)}
                </Avatar>
              )}

              primary={(
                <Type
                  version='l3'
                >
                  {item.name}
                </Type>
              )}

              onClick={() => addTag(item)}

              button
            />
          ))}
        </List>
      </Line>
  );

  const paste = async () => {
    const valueClipboard = await navigator.clipboard.read();

    if (valueClipboard) {
      let values: any = '';

      for (const item of Array.from(valueClipboard)) {
        const valueItem = await item.getType('text/html');

        values += await valueItem.text();
      }

      rootDocument.execCommand('insertHTML', undefined, values);
    }
  };

  const query = (command: string) => {
    return parse(refs.rootDocument.current!.queryCommandValue(command));
  };

  const textQueryUpdate = () => {
    const selected: any = [];

    const updateOptionValues = [
      { name: 'italic', command: 'italic' },
      { name: 'underline', command: 'underline' },
      { name: 'bold', command: 'bold' },
      { name: 'strike-line', command: 'strikeThrough' }
    ];

    updateOptionValues.forEach(item => {
      if (query(item.command)) selected.push(item.name);
    });

    setTextSelected(selected);
  };

  const onMouseUp = () => {
    if (!refs.edit.current) return;

    const selection_ = refs.rootWindow.current!.getSelection();

    if (!selection_) return;

    if (!selection_.anchorNode || !refs.root.current.contains(selection_.anchorNode)) return setTextSelection(null as any);

    setTimeout(() => {
      const rect = selection_.getRangeAt(0).getBoundingClientRect();

      setTextSelection(Math.round(rect.width) ? { selection: rect, element: selection_.anchorNode?.parentElement } : null as any);

      textQueryUpdate();
    }, 140);
  };

  const onMouseDown = () => {
    if (!refs.edit.current) return;

    textQueryUpdate();
  };

  const onKeyUp = () => {
    if (!refs.edit.current) return;

    textQueryUpdate();
  };

  const textMethod = (command: string) => (argument: any) => {
    switch (command) {
      // updates
      case 'italic':
        refs.rootDocument.current.execCommand('italic');

        if (query('italic')) setTextSelected(values => [...values, 'italic']);
        else setTextSelected(values => values.filter(item => item !== 'italic'));

        break;

      case 'underline':
        refs.rootDocument.current.execCommand('underline');

        if (query('underline')) setTextSelected(values => [...values, 'underline']);
        else setTextSelected(values => values.filter(item => item !== 'underline'));

        break;

      case 'bold':
        refs.rootDocument.current.execCommand('bold');

        if (query('bold')) setTextSelected(values => [...values, 'bold']);
        else setTextSelected(values => values.filter(item => item !== 'bold'));

        break;

      case 'strike-line':
        refs.rootDocument.current.execCommand('strikeThrough');

        if (query('strikeThrough')) setTextSelected(values => [...values, 'strike-line']);
        else setTextSelected(values => values.filter(item => item !== 'strike-line'));

        break;

      case 'align-left':
        refs.rootDocument.current.execCommand('justifyLeft');

        if (query('justifyLeft')) setTextSelected(values => [...values.filter(item => !item.includes('align')), 'align-left']);
        else setTextSelected(values => values.filter(item => item !== 'align-left'));

        break;

      case 'align-center':
        refs.rootDocument.current.execCommand('justifyCenter');

        if (query('justifyCenter')) setTextSelected(values => [...values.filter(item => !item.includes('align')), 'align-center']);
        else setTextSelected(values => values.filter(item => item !== 'align-center'));

        break;

      case 'align-right':
        refs.rootDocument.current.execCommand('justifyRight');

        if (query('justifyRight')) setTextSelected(values => [...values.filter(item => !item.includes('align')), 'align-right']);
        else setTextSelected(values => values.filter(item => item !== 'align-right'));

        break;

      case 'align-justify':
        refs.rootDocument.current.execCommand('justifyFull');

        if (query('justifyFull')) setTextSelected(values => [...values.filter(item => !item.includes('align')), 'align-justify']);
        else setTextSelected(values => values.filter(item => item !== 'align-justify'));

        break;

      case 'superscript':
        refs.rootDocument.current.execCommand('superscript');

        if (query('superscript')) setTextSelected(values => [...values, 'superscript']);
        else setTextSelected(values => values.filter(item => item !== 'superscript'));

        break;

      case 'subscript':
        refs.rootDocument.current.execCommand('subscript');

        if (query('subscript')) setTextSelected(values => [...values, 'subscript']);
        else setTextSelected(values => values.filter(item => item !== 'subscript'));

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

        if (query('insertOrderedList')) setTextSelected(values => [...values.filter(item => !item.includes('list')), 'list-ordered']);
        else setTextSelected(values => values.filter(item => item !== 'list-ordered'));

        break;

      case 'list-unordered':
        refs.rootDocument.current.execCommand('insertUnorderedList');

        if (query('insertUnorderedList')) setTextSelected(values => [...values.filter(item => !item.includes('list')), 'list-unordered']);
        else setTextSelected(values => values.filter(item => item !== 'list-unordered'));

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

    const element = refs.textSelection.current?.element as HTMLElement;

    if (element) {
      let valueElement = element.innerHTML || '';

      if (element.textContent === '') {
        valueElement = '';

        element.innerHTML = '';
      }

      if (valueElement) valueElement = innerHTMLToText(valueElement);
    }

    textQueryUpdate();
  };

  const PaletteItem = (propsItem: any) => {
    const {
      color: color_,

      ...other_
    } = propsItem;

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
  };

  const Palette = propsPalette => {
    const {
      ref: ref_,

      version: version_,

      onUpdate: onUpdate_,

      onClose,

      ...other_
    } = propsPalette;

    const onUpdateColor = itemColor => {
      if (refs.range.current) {
        const selection_ = refs.rootWindow.current.getSelection();

        selection_.removeAllRanges();
        selection_.addRange(refs.range.current);
      }

      onUpdate_(itemColor);

      onClose();
    };

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

          style={{
            maxHeight: 136,
            padding: '10px 10px 0',
            overflow: 'hidden auto'
          }}
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
                onUpdateColor('#000000');
              }}
            />

            <PaletteItem
              color='#ffffff'

              onClick={() => {
                onUpdateColor('#ffffff');
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
                    onUpdateColor(colors[item][item_]);
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

          fullWidth

          style={{
            padding: '0px 10px 10px'
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
  };

  const AppendProps: any = {
    padding: [14, 14]
  };

  const IconProps: any = {
    size: 'small'
  };

  const TooltipProps: any = {
    position: 'bottom',
    interactive: false
  };

  const ToggleButtonsProps: any = {
    tonal: false,
    color: 'default',
    version: 'text',
    border: false
  };

  const ToggleButtonProps: any = {
    size: 'small'
  };

  const Input = propsInput => {
    const {
      ref: ref_,

      label: labelInput,

      labelButton,

      value: value__,

      onChange: onChange__,

      onClick,

      placeholder: placeholderInputProps,

      InputComponent = TextField,

      InputProps,

      ...other_
    } = propsInput;

    return (
      <Line
        ref={ref_}

        gap={1}

        direction='column'

        color='themed'

        Component={Surface}

        {...other_}

        className={classNames([
          other_?.className,
          classes.inputWrapper
        ])}
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
            name={labelInput}

            version='outlined'

            size='small'

            valueDefault={value__}

            onChange={onChange__}

            placeholder={placeholderInputProps}

            flex

            {...InputProps}

            style={{
              width: 'unset',
              flex: '1 1 auto'
            }}
          />

          <Button
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
  };

  const WrapperAppend = (propsWrapper: any) => {
    const {
      open: open_,

      element,

      anchorElement,

      onClose,

      children: childrenWrapperAppend,

      ...other_
    } = propsWrapper;

    return (
      <Append
        open={open_}

        element={(
          <div
            className={classNames([
              staticClassName('SmartTextField', theme) && [
                'onesy-SmartTextField-mini-menu-additional'
              ],

              classes.textMiniMenuAdditionalMenu
            ])}
          >
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
        {React.cloneElement(childrenWrapperAppend, {
          ...other_,

          ...childrenWrapperAppend.props
        })}
      </Append>
    );
  };

  const WrapperToggleButton = propsWrapperToggleButton => {
    const {
      ref: ref_,

      open: open_,

      name: nameWrapperToogleButton,

      children: childrenWrapperToggleButton,

      ...other_
    } = propsWrapperToggleButton;

    return (
      <Tooltip
        ref={ref_}

        open={open_ !== undefined ? open_ : undefined}

        name={nameWrapperToogleButton}

        {...TooltipProps}
      >
        {React.cloneElement(childrenWrapperToggleButton, {
          ...other_,

          ...childrenWrapperToggleButton.props
        })}
      </Tooltip>
    );
  };

  const updateElements = {
    'italic': (
      <WrapperToggleButton
        name={l('Italic')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('italic')}

          onClick={textMethod('italic')}
        >
          <IconMaterialFormatItalic {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'underline': (
      <WrapperToggleButton
        name={l('Underline')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('underline')}

          onClick={textMethod('underline')}
        >
          <IconMaterialFormatUnderlined {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'bold': (
      <WrapperToggleButton
        name={l('Bold')}

        onClick={textMethod('bold')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('bold')}
        >
          <IconMaterialFormatBold {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),

    'superscript': (
      <WrapperToggleButton
        name={l('Superscript')}

        onClick={textMethod('superscript')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('superscript')}
        >
          <IconMaterialSuperscript {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'subscript': (
      <WrapperToggleButton
        name={l('Subscript')}

        onClick={textMethod('subscript')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('subscript')}
        >
          <IconMaterialSubscript {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),

    'strike-line': (
      <WrapperToggleButton
        name={l('Strike Line')}

        onClick={textMethod('strike-line')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('strike-line')}
        >
          <IconMaterialStrikethroughS {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),

    'link-add': (
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

              onChange={(valueNew: any) => updateInputValues('link', valueNew)}

              placeholder={l('URL')}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current!.getSelection();

                  if (!selection_) return;

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                textMethod('link-add')(refs.inputValues.current.link);

                updateOpen('linkMiniMenu', false);

                updateInputValues('link', '');
              }}

              className={classes.input}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Insert Link')}

          open={refs.open.current.linkMiniMenu ? false : undefined}
        >
          <ToggleButton
            ref={refs.miniMenuElements.linkAdd}

            {...ToggleButtonProps}

            selected={refs.open.current.linkMiniMenu}

            onClick={() => updateOpen('linkMiniMenu', !refs.open.current.linkMiniMenu)}
          >
            <IconMaterialAddLink {...IconProps} />
          </ToggleButton>
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-remove': (
      <WrapperToggleButton
        name={l('Remove Link')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          onClick={textMethod('link-remove')}
        >
          <IconMaterialLinkOff {...IconProps} />
        </ToggleButton>
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

              onUpdate={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                textMethod('font-color');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.color ? false : undefined}
        >
          <ToggleButton
            ref={refs.elements.color}

            {...ToggleButtonProps}

            selected={refs.open.current.color}

            onClick={() => updateOpen('color', !refs.open.current.color)}
          >
            <IconMaterialFormatColorText {...IconProps} />
          </ToggleButton>
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

              onUpdate={textMethod('font-color')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.colorMiniMenu ? false : undefined}
        >
          <ToggleButton
            ref={refs.miniMenuElements.color}

            {...ToggleButtonProps}

            selected={refs.open.current.colorMiniMenu}

            onClick={() => updateOpen('colorMiniMenu', !refs.open.current.colorMiniMenu)}
          >
            <IconMaterialFormatColorText {...IconProps} />
          </ToggleButton>
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

              onUpdate={textMethod('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Background Color')}

          open={refs.open.current.background ? false : undefined}
        >
          <ToggleButton
            ref={refs.elements.background}

            {...ToggleButtonProps}

            selected={refs.open.current.background}

            onClick={() => updateOpen('background', !refs.open.current.background)}
          >
            <IconMaterialFormatColorFill {...IconProps} />
          </ToggleButton>
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

              onUpdate={textMethod('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          name={l('Text Color')}

          open={refs.open.current.backgroundMiniMenu ? false : undefined}
        >
          <ToggleButton
            ref={refs.miniMenuElements.background}

            {...ToggleButtonProps}

            selected={refs.open.current.backgroundMiniMenu}

            onClick={() => updateOpen('backgroundMiniMenu', !refs.open.current.backgroundMiniMenu)}
          >
            <IconMaterialFormatColorFill {...IconProps} />
          </ToggleButton>
        </WrapperToggleButton>
      </WrapperAppend>
    ),

    'align-left': (
      <WrapperToggleButton
        name={l('Align Left')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('align-left')}

          onClick={textMethod('align-left')}
        >
          <IconMaterialFormatAlignLeft {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'align-center': (
      <WrapperToggleButton
        name={l('Align Center')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('align-center')}

          onClick={textMethod('align-center')}
        >
          <IconMaterialFormatAlignCenter {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'align-right': (
      <WrapperToggleButton
        name={l('Align Right')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('align-right')}

          onClick={textMethod('align-right')}
        >
          <IconMaterialFormatAlignRight {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'align-justify': (
      <WrapperToggleButton
        name={l('Align Justify')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('align-justify')}

          onClick={textMethod('align-justify')}
        >
          <IconMaterialFormatAlignJustify {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),

    'list-ordered': (
      <WrapperToggleButton
        name={l('List Ordered')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('list-ordered')}

          onClick={textMethod('list-ordered')}
        >
          <IconMaterialFormatListNumbered {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'list-unordered': (
      <WrapperToggleButton
        name={l('List Unordered')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('list-unordered')}

          onClick={textMethod('list-unordered')}
        >
          <IconMaterialFormatListBulleted {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    )
  };

  const actionElements = {
    'clear': (
      <WrapperToggleButton
        name={l('Clear')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          onClick={textMethod('clear')}
        >
          <IconMaterialFormatClear {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    )
  };

  const miniMenu = React.useMemo(() => {

    return (
      <Append
        open={!!textSelection}

        element={
          (body: any) => {
            const {
              ref: ref_,
              values,
              style: styleAppend
            } = body;

            return (
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

                  ...styleAppend,

                  zIndex: 1500
                }}

                className={classNames([
                  staticClassName('SmartTextField', theme) && [
                    'onesy-SmartTextField-mini-menu-wrapper'
                  ],

                  classes.textMiniMenuWrapper
                ])}
              >
                <Fade
                  in={!!textSelection}

                  add
                >
                  <ClickListener
                    onClickOutside={() => {
                      setTextSelection(null as any);
                    }}

                    include={[refs.miniMenu, refs.miniMenu.current, refs.miniMenuElements.colorPalette, refs.miniMenuElements.colorPalette.current, refs.miniMenuElements.backgroundPalette, refs.miniMenuElements.backgroundPalette.current, refs.miniMenuElements.linkAddInput, refs.miniMenuElements.linkAddInput.current]}
                  >
                    <Line
                      gap={2}

                      direction='row'

                      align='center'

                      justify='flex-start'

                      wrap='wrap'

                      role='toolbar'

                      color='themed'

                      aria-label={l('Mini menu')}

                      Component={Surface}

                      className={classNames([
                        classes.textMiniMenu
                      ])}
                    >
                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {updateElements['italic']}

                        {updateElements['underline']}

                        {updateElements['bold']}

                        {updateElements['strike-line']}
                      </ToggleButtons>

                      {miniMenuExtended && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {updateElements['align-left']}

                          {updateElements['align-center']}

                          {updateElements['align-right']}

                          {updateElements['align-justify']}
                        </ToggleButtons>
                      )}

                      {miniMenuExtended && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {updateElements['font-color-mini-menu']}

                          {updateElements['font-background-mini-menu']}
                        </ToggleButtons>
                      )}

                      {miniMenuExtended && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {updateElements['list-ordered']}

                          {updateElements['list-unordered']}
                        </ToggleButtons>
                      )}

                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {updateElements['superscript']}

                        {updateElements['subscript']}
                      </ToggleButtons>

                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {updateElements['link-add']}

                        {updateElements['link-remove']}
                      </ToggleButtons>

                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {actionElements['clear']}
                      </ToggleButtons>
                    </Line>
                  </ClickListener>
                </Fade>
              </div>
            );
          }
        }

        parent={refs.root.current}

        anchor={textSelection?.selection}

        portal

        alignment='center'

        position='bottom'

        clearOnClose

        {...AppendProps}
      />
    );
  }, [open, textSelection, textSelected]);

  const menu = React.useMemo(() => {
    return (
      <Menu
        open={openMenu}

        position='top'

        alignment='start'

        offset={offset}

        anchor={selectionMenu}

        onClose={onCloseSearch}

        label={label()}

        interactive
      />
    );
  }, [openMenu, optionsMention, selectionMenu, label]);

  let main = (
    <TextField
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      color={color}

      tonal={tonal}

      version='text'

      size={size}

      minRows={12}

      multiline

      enabled

      fullWidth

      onInput={onInput}

      onKeyDown={onKeyDown}

      onKeyUp={onKeyUp}

      onFocus={onFocus}

      onBlur={onBlur}

      readOnly={readOnly}

      inputProps={{
        version: 'b2',

        contentEditable: true,

        spellCheck: false,

        onPaste: pasteText ? onPasteText : onPaste,

        onDrop,

        onMouseUp,

        onMouseDown,

        'data-placeholder': placeholder !== undefined ? placeholder : name,

        ...inputProps,

        ref: (item: any) => {
          refs.input.current = item;

          if (inputProps?.ref) {
            if (is('function', inputProps.ref)) inputProps.ref(item);
            else inputProps.ref.current = item;
          }
        }
      }}

      InputComponent={Type}

      className={classNames([
        staticClassName('SmartTextField', theme) && [
          'onesy-SmartTextField-root',
          `onesy-SmartTextField-version-${version}`,
          `onesy-SmartTextField-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...additional as any}

      {...other as any}
    />
  );

  if (version === 'text') main = (
    <Type
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        if (inputProps?.ref) {
          if (is('function', inputProps.ref)) inputProps.ref(item);
          else inputProps.ref.current = item;
        }

        refs.root.current = item;
        refs.input.current = item;
      }}

      color={color}

      tonal={tonal}

      onInput={onInput}

      onKeyDown={onKeyDown}

      onKeyUp={onKeyUp}

      onFocus={onFocus}

      onBlur={onBlur}

      onPaste={pasteText ? onPasteText : onPaste}

      onDrop={onDrop}

      onMouseUp={onMouseUp}

      onMouseDown={onMouseDown}

      spellCheck={false}

      data-placeholder={placeholder !== undefined ? placeholder : name}

      {...inputProps}

      contentEditable={!readOnly}

      className={classNames([
        staticClassName('SmartTextField', theme) && [
          'onesy-SmartTextField-root',
          `onesy-SmartTextField-version-${version}`,
          `onesy-SmartTextField-size-${size}`
        ],

        className,
        classes.root_type,
        !multiline && classes.singleLine
      ])}

      {...additional as any}

      {...other as any}
    />
  );

  return <>
    {main}

    {version === 'text' && <>
      {helperText && is('string', helperText) ? (
        <Type
          version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

          {...HelperTextProps}

          className={classNames([
            staticClassName('SmartTextField', theme) && [
              'onesy-SmartTextField-helper-text',
              error && 'onesy-SmartTextField-error'
            ],

            HelperTextProps?.className,
            classes.helperText,
            error && classes.error_color
          ])}
        >
          {textToInnerHTML(helperText)}
        </Type>
      ) : helperText}
    </>}

    {/* text edit menu */}
    {miniMenu}

    {/* @ menu */}
    {menu}
  </>;
};

SmartTextField.displayName = 'onesy-SmartTextField';

export default SmartTextField;
