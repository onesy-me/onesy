import React from 'react';

import { innerHTMLToText, is, isEnvironment, parse, stringToColor, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialFormatItalic from '@amaui/icons-material-rounded-react/IconMaterialFormatItalicW100';
import IconMaterialFormatUnderlined from '@amaui/icons-material-rounded-react/IconMaterialFormatUnderlinedW100';
import IconMaterialStrikethroughS from '@amaui/icons-material-rounded-react/IconMaterialStrikethroughSW100';
import IconMaterialFormatBold from '@amaui/icons-material-rounded-react/IconMaterialFormatBoldW100';
import IconMaterialAddLink from '@amaui/icons-material-rounded-react/IconMaterialAddLinkW100';
import IconMaterialLinkOff from '@amaui/icons-material-rounded-react/IconMaterialLinkOffW100';
import IconMaterialFormatClear from '@amaui/icons-material-rounded-react/IconMaterialFormatClearW100';

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
import { sanitize, caret, keyboardStyleCommands, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    minHeight: '20px',
    width: '100%',

    '& .amaui-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
    }
  },

  root_type: {
    minHeight: '20px',
    width: '100%',
    cursor: 'text',

    '& .amaui-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
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
    boxShadow: theme.shadows.values.default[2]
  },

  textMiniMenuAdditionalMenu: {
    width: 'clamp(140px, 90%, 250px)',
    zIndex: '1514'
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

  inputLink: {
    '&.amaui-TextField-root': {
      flex: '1 1 auto !important'
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
}), { name: 'amaui-SmartTextField' });

export interface ISmartTextField extends ITextField {
  placeholder?: any;

  edit?: boolean;

  mention?: boolean;

  multiline?: boolean;

  readOnly?: boolean;

  onChangeMention?: (value?: string, version?: '@') => any;

  optionsMention?: any[];

  mentionLabel?: (items: any[], props: { addTag?: (value: any) => any }) => any;

  additional?: any;

  pasteText?: boolean;

  HelperTextProps?: any;
}

const SmartTextField: React.FC<ISmartTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSmartTextField?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Avatar = React.useMemo(() => theme?.elements?.Avatar || AvatarElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Append = React.useMemo(() => theme?.elements?.Append || AppendElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const ToggleButton = React.useMemo(() => theme?.elements?.ToggleButton || ToggleButtonElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const ToggleButtons = React.useMemo(() => theme?.elements?.ToggleButtons || ToggleButtonsElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const {
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

    HelperTextProps,

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
    root: React.useRef<any>(undefined),
    input: React.useRef(undefined),
    searchElement: React.useRef<any>(undefined),
    error: React.useRef<any>(undefined),
    search: React.useRef<any>(undefined),
    open: React.useRef<any>(undefined),
    openMenu: React.useRef<any>(undefined),
    selectionMenu: React.useRef<any>(undefined),
    caret: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    version: React.useRef<any>(version),
    optionsMention: React.useRef(optionsMention),
    validateMeta: React.useRef<any>({}),
    range: React.useRef<any>(undefined),
    inputValues: React.useRef<any>(undefined),
    miniMenu: React.useRef<any>(undefined),
    miniMenuElements: {
      color: React.useRef<any>(undefined),
      colorPalette: React.useRef<any>(undefined),
      background: React.useRef<any>(undefined),
      backgroundPalette: React.useRef<any>(undefined),
      linkAdd: React.useRef<any>(undefined),
      linkAddInput: React.useRef<any>(undefined),
      linkRemove: React.useRef<any>(undefined)
    },
    textSelected: React.useRef<any>(undefined),
    textSelection: React.useRef<any>(undefined),
    rootDocument: React.useRef<Document>(),
    rootWindow: React.useRef<Window>(),
    edit: React.useRef(edit),
    multiline: React.useRef(multiline),
    readOnly: React.useRef(readOnly),
    onChange: React.useRef(onChange)
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

  const rootDocument = isEnvironment('browser') && (refs.root.current?.ownerDocument || window.document);

  const rootWindow = rootDocument && (rootDocument.defaultView || window);

  refs.rootDocument.current = rootDocument;

  refs.rootWindow.current = rootWindow;

  const init = React.useCallback(() => {
    if (version === 'text') {
      const valueNew = valueDefault || value || '';

      if (refs.root.current) {
        refs.root.current.innerHTML = valueNew;
      }
    }
  }, [version, value, valueDefault]);

  React.useEffect(() => {
    // init
    init();
  }, []);

  React.useEffect(() => {
    if (optionsMention !== optionsMention_) setOptionsMention(optionsMention_);
  }, [optionsMention_]);

  React.useEffect(() => {
    const valuePrevious = (refs.root.current!.innerHTML || '').replaceAll('&nbsp;', ' ');

    const valueNew = textToInnerHTML(value_);

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

  const validateElement = React.useCallback((element: any) => {
    if (element?.children) {
      Array.from(element?.children).forEach((child: any) => {
        // Any tag
        if (child.dataset.amauiVersion === 'mention-user') {
          // Replace the child if label & textContent don't match
          if (child.dataset.amauiLabel !== child.innerHTML) {
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
  }, []);

  const validate = React.useCallback((valueNew: any = undefined) => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    // Update the root innerHTML
    if (valueNew !== undefined) refs.root.current.innerHTML = valueNew;

    refs.validateMeta.current.restore = false;

    // Find all span amaui-mention children
    // if they aren't valid, replace them with text node of their textContent
    validateElement(refs.root.current);

    if (refs.validateMeta.current.restore) caret.restore(refs.root.current, refs.caret.current);

    return refs.root.current.innerHTML;
  }, []);

  const getAtSearchData = React.useCallback(() => {
    if (refs.root.current) {
      const windowSelection = window.document.getSelection();

      if (!(windowSelection && windowSelection.rangeCount > 0)) return;

      const range = windowSelection?.getRangeAt(0);

      if (!range) return;

      // Only allow for text not in span user mention element
      if (windowSelection!.anchorNode?.parentElement?.dataset?.amauiVersion === 'mention-user') return '';

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
  }, []);

  refs.search.current = getAtSearchData();

  const onInput = React.useCallback((event?: Event) => {
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
  }, []);

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

  const updateSelection = React.useCallback(() => {
    const windowSelection = window.document.getSelection();

    if (!(windowSelection && windowSelection.rangeCount > 0)) return;

    const range = windowSelection?.getRangeAt(0);

    if (range) setSelectionMenu(range?.getBoundingClientRect());
  }, []);

  const onOpenSearch = React.useCallback(async () => {
    if (!refs.openMenu.current && !!refs.optionsMention.current.length) {
      // open
      setOpenMenu(true);

      // selection
      updateSelection();
    }
  }, []);

  const onCloseSearch = React.useCallback(() => {
    if (refs.openMenu.current) {
      setOpenMenu(false);

      setSelectionMenu(null);
    }
  }, []);

  const updateOffset = React.useCallback(() => {
    setOffset([-(refs.searchElement.current?.clientWidth || 0), 8]);
  }, []);

  const onFocus = React.useCallback(() => {
    // setFocus(true);
  }, []);

  const onBlur = React.useCallback(() => {
    // setFocus(false);
  }, []);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
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
          caretElement?.dataset?.amauiVersion === 'mention-user' &&
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

    if (is('function', onKeyDown_)) onKeyDown_(event);
  }, [onKeyDown_]);

  const onPaste = React.useCallback((event: ClipboardEvent) => {
    // event.preventDefault();

    // const text = event.clipboardData?.getData('text/plain');

    // window.document.execCommand('insertText', false, text);
  }, []);

  const onPasteText = React.useCallback((event: ClipboardEvent) => {
    event.preventDefault();

    const text = event.clipboardData?.getData('text/plain');

    window.document.execCommand('insertText', false, text);
  }, []);

  const onDrop = React.useCallback((event: DragEvent) => {
    event.preventDefault();
  }, []);

  const addTag = React.useCallback((item: any, versionMention = 'user') => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    const itemName = item.name;

    const classesElement = ['amaui-mention'];

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

      span.dataset.amauiLabel = `@${itemName}`;
      span.dataset.amauiVersion = `mention-${versionMention}`;
      span.dataset.amauiObject = `${versionMention}`;
      span.dataset.amauiId = item.id;

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
  }, [onChange]);

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

  const label = React.useCallback(() => (
    is('function', mentionLabel) ? mentionLabel!(refs.optionsMention.current, { addTag }) :
      <Line
        className={classes.menu}
      >
        <List
          size='small'

          className={classes.list}
        >
          {/* Users */}
          {refs.optionsMention.current?.map((item: any, index: number) => (
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
  ), []);

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

  const onMouseUp = React.useCallback(() => {
    if (!refs.edit.current) return;

    const selection_ = refs.rootWindow.current!.getSelection();

    if (!selection_) return;

    if (!selection_.anchorNode || !refs.root.current.contains(selection_.anchorNode)) return setTextSelection(null as any);

    setTimeout(() => {
      const rect = selection_.getRangeAt(0).getBoundingClientRect();

      setTextSelection(Math.round(rect.width) ? { selection: rect, element: selection_.anchorNode?.parentElement } : null as any);

      textQueryUpdate();
    }, 140);
  }, []);

  const onMouseDown = React.useCallback(() => {
    if (!refs.edit.current) return;

    textQueryUpdate();
  }, []);

  const onKeyUp = React.useCallback(() => {
    if (!refs.edit.current) return;

    textQueryUpdate();
  }, []);

  const textMethod = React.useCallback((command: string) => (argument: any) => {
    switch (command) {
      // updates
      case 'italic':
        refs.rootDocument.current!.execCommand('italic');

        if (query('italic')) setTextSelected((values: any) => [...values, 'italic']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'italic'));

        break;

      case 'underline':
        refs.rootDocument.current!.execCommand('underline');

        if (query('underline')) setTextSelected((values: any) => [...values, 'underline']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'underline'));

        break;

      case 'bold':
        refs.rootDocument.current!.execCommand('bold');

        if (query('bold')) setTextSelected((values: any) => [...values, 'bold']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'bold'));

        break;

      case 'strike-line':
        refs.rootDocument.current!.execCommand('strikeThrough');

        if (query('strikeThrough')) setTextSelected((values: any) => [...values, 'strike-line']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'strike-line'));

        break;

      case 'link-add':
        refs.rootDocument.current!.execCommand('createLink', undefined, argument);

        break;

      case 'link-remove':
        refs.rootDocument.current!.execCommand('unlink');

        break;

      // actions
      case 'copy':
        refs.rootDocument.current!.execCommand('copy');

        break;

      case 'cut':
        refs.rootDocument.current!.execCommand('cut');

        break;

      case 'paste':
        if (refs.rootDocument.current!.queryCommandSupported('paste')) refs.rootDocument.current!.execCommand('paste');
        else paste();

        break;

      case 'delete':
        refs.rootDocument.current!.execCommand('delete');

        break;

      case 'clear':
        refs.rootDocument.current!.execCommand('removeFormat');

        break;

      case 'select-all':
        refs.rootDocument.current!.execCommand('selectAll');

        break;

      case 'undo':
        refs.rootDocument.current!.execCommand('undo');

        break;

      case 'redo':
        refs.rootDocument.current!.execCommand('redo');

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
  }, []);

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

  const Input = React.useCallback(React.forwardRef((propsInput: any, ref_: any) => {
    const {
      label: labelInput,

      labelButton,

      value: value__,

      onChange: onChange__,

      onClick,

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
            label={labelInput}

            version='outlined'

            size='small'

            valueDefault={value__}

            onChange={onChange__}

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
  }), []);

  const WrapperAppend = React.useCallback((propsWrapper: any) => {
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
                'amaui-SmartTextField-mini-menu-additional'
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
  }, []);

  const WrapperToggleButton = React.useCallback(React.forwardRef((propsWrapperToggleButton: any, ref_: any) => {
    const {
      open: open_,

      label: labelWrapperToogleButton,

      children: childrenWrapperToggleButton,

      ...other_
    } = propsWrapperToggleButton;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        label={labelWrapperToogleButton}

        {...TooltipProps}
      >
        {React.cloneElement(childrenWrapperToggleButton, {
          ...other_,

          ...childrenWrapperToggleButton.props
        })}
      </Tooltip>
    );
  }), []);

  const updateElements = {
    'italic': (
      <WrapperToggleButton
        label='Italic'
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
        label='Underline'
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
        label='Bold'

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
    'strike-line': (
      <WrapperToggleButton
        label='Strike Line'

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

              label='Link'

              labelButton='Add'

              value={refs.inputValues.current.link}

              onChange={(valueNew: any) => updateInputValues('link', valueNew)}

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

              className={classes.inputLink}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Link'

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
        label='Remove Link'
      >
        <ToggleButton
          {...ToggleButtonProps}

          onClick={textMethod('link-remove')}
        >
          <IconMaterialLinkOff {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    )
  };

  const actionElements = {
    'clear': (
      <WrapperToggleButton
        label='Clear'
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
                    'amaui-SmartTextField-mini-menu-wrapper'
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

                    include={[refs.miniMenu, refs.miniMenu.current, refs.miniMenuElements.linkAddInput, refs.miniMenuElements.linkAddInput.current]}
                  >
                    <Line
                      gap={2}

                      direction='row'

                      align='center'

                      justify='flex-start'

                      role='toolbar'

                      color='themed'

                      aria-label='Mini menu'

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
  }, [openMenu, selectionMenu, label]);

  let main = (
    <TextField
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

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
          'amaui-SmartTextField-root',
          `amaui-SmartTextField-version-${version}`,
          `amaui-SmartTextField-size-${size}`
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
          'amaui-SmartTextField-root',
          `amaui-SmartTextField-version-${version}`,
          `amaui-SmartTextField-size-${size}`
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
              'amaui-SmartTextField-helper-text',
              error && 'amaui-SmartTextField-error'
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
});

SmartTextField.displayName = 'amaui-SmartTextField';

export default SmartTextField;
