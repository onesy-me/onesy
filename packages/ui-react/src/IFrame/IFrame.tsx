import React from 'react';
import ReactDOM from 'react-dom';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';

import { importIframeStyles, staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },

  hidden: {
    height: 0,
    width: 0,
    opacity: 0,
    visibility: 'hidden'
  }
}), { name: 'onesy-IFrame' });

export type IIFrame = ILine & {
  id?: string;

  src?: string;

  WrapperProps?: IPropsAny;
};

const IFrame: React.FC<IIFrame> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyIFrame?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    id,

    src,

    WrapperProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [root, setRoot] = React.useState<HTMLIFrameElement>();

  const refs = {
    root: React.useRef(root)
  };

  refs.root.current = root;

  const iframeDocument = refs.root.current?.contentWindow?.document;

  const iframeBody = refs.root.current?.contentWindow?.document.body;

  const refresh = React.useCallback(() => {
    if (iframeDocument) {
      const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

      // Add iframe ref to iframe document
      (iframeDocument as any).iframe = refs.root.current;

      (iframeDocument as any).iframeWindow = refs.root.current?.contentWindow;

      // Head
      iframeDocument.head?.replaceWith(rootDocument.createElement('head'));

      importIframeStyles(iframeDocument);

      // Default
      const styleDefault = rootDocument.createElement('style');

      styleDefault.innerHTML = `
        body {
          background-color: transparent;
          padding: 0px;
        }

        body::-webkit-scrollbar {
          height: 0px;
          width: 0px;
        }
      `;

      iframeDocument.head?.append(styleDefault);

      // Body
      if (iframeBody) iframeBody.dir = rootDocument.body.dir;
    }
  }, [iframeDocument]);

  React.useEffect(() => {
    if (init && !show) setTimeout(() => {
      refresh();

      setShow(true);
    }, 740);
  }, [init]);

  React.useEffect(() => {
    refresh();

    if (!init) setInit(true);
  }, [id, refs.root.current, children, theme]);

  return (
    <Line
      gap={0}

      flex

      fullWidth

      {...WrapperProps}
    >
      {/*
          Add children used in the iframe,
          so their CSS is added to the DOM,
          and is then available within the iframe
      */}
      <Line
        className={classes.hidden}
      >
        {children}
      </Line>

      {src && (
        <iframe
          ref={item => {
            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            setRoot(item);
          }}

          title={id}

          src={src}

          className={classNames([
            staticClassName('IFrame', theme) && [
              'onesy-IFrame-root'
            ],

            className,
            classes.root
          ])}

          {...other}
        >
          {init && iframeBody && (ReactDOM.createPortal(React.cloneElement(children as any, {
            iframeRef: refs.root.current,

            style: {
              ...(children as any)?.props.style,

              transition: theme.methods.transitions.make('opacity'),

              ...(show ? {
                opacity: 1
              } : {
                opacity: 0
              })
            }
          }), iframeBody) as any)}
        </iframe>
      )}
    </Line>
  );
});

IFrame.displayName = 'onesy-IFrame';

export default IFrame;
