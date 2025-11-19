import React from 'react';

import { is, TMethod, setObjectValue } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import ConfirmContext from './Context';
import ModalHeaderElement from '../ModalHeader';
import ModalFooterElement from '../ModalFooter';
import ModalTitleElement from '../ModalTitle';
import ModalMainElement from '../ModalMain';
import ModalTextElement from '../ModalText';
import ModalElement from '../Modal';
import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

export type IConfirmOpen = {
  modal?: (promise: IConfirmPromiseArgument) => React.ReactElement;

  name?: string | boolean | React.ReactElement;
  description?: string | React.ReactElement;
  buttons?: {
    positive?: {
      text?: string
    };
    negative?: {
      text?: string
    };
  };

  throwError?: boolean;

  ButtonNegativeProps?: any;
  ButtonPositiveProps?: any;

  [p: string]: any;
};

export type IConfirmPromiseArgument = {
  resolve: TMethod;
  reject: TMethod;
};

export type IConfirmValue = {
  open: (value?: IConfirmOpen) => Promise<any>;
  close: (confirmed?: boolean) => void;
};

const useStyle = styleMethod(theme => ({
  root: {
    '& .onesy-ModalMain-root': {
      padding: `6px 0 10px`
    },

    '& .onesy-ModalFooter-root': {
      padding: `12px 0 12px`
    },

    '& .onesy-Modal-background:not(.onesy-Modal-background-invisible)': {
      background: theme.methods.palette.color.colorToRgb(theme.methods.palette.color.value('default', 10), theme.palette.light ? 20 : 40)
    }
  },

  surface: {
    '&.onesy-Surface-root': {
      background: theme.palette.color.primary[theme.palette.light ? 99 : 5],
      paddingBottom: '8px'
    }
  }
}), { name: 'onesy-Confirm' });

export type IConfirm = IBaseElement & {
  throwError?: boolean;

  onOpen?: () => any;

  onClose?: () => any;
};

const Confirm: React.FC<IConfirm> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyConfirm?.props?.default, ...props_ };

  const ModalHeader = theme?.elements?.ModalHeader || ModalHeaderElement;

  const ModalFooter = theme?.elements?.ModalFooter || ModalFooterElement;

  const ModalTitle = theme?.elements?.ModalTitle || ModalTitleElement;

  const ModalMain = theme?.elements?.ModalMain || ModalMainElement;

  const ModalText = theme?.elements?.ModalText || ModalTextElement;

  const Modal = theme?.elements?.Modal || ModalElement;

  const Button = theme?.elements?.Button || ButtonElement;

  const {
    throwError,

    onOpen,

    onClose,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [openModal, setOpenModal] = React.useState(false);

  const refs = {
    value: React.useRef<IConfirmValue>({} as any),
    modal: React.useRef<IConfirmOpen>(null),
    props: React.useRef<any>(null),
    promise: {
      resolve: React.useRef<any>(null),
      reject: React.useRef<any>(null)
    }
  };

  refs.props.current = props;

  const open = (value?: IConfirmOpen): Promise<any> => {
    if (!openModal) {
      refs.modal.current = { ...value };

      // Defaults
      refs.modal.current.name = value?.name !== undefined ? value?.name : l('Confirmation');
      refs.modal.current.description = value?.description !== undefined ? value?.description : l('Are you sure you want to proceed?');

      if (refs.modal.current.buttons?.negative?.text === undefined) setObjectValue(refs.modal.current, 'buttons.negative.text', '');

      if (refs.modal.current.buttons?.positive?.text === undefined) setObjectValue(refs.modal.current, 'buttons.positive.text', '');

      refs.modal.current.buttons.negative.text = value?.buttons?.negative?.text !== undefined ? value?.buttons?.negative?.text : l('Cancel');
      refs.modal.current.buttons.positive.text = value?.buttons?.positive?.text !== undefined ? value?.buttons?.positive?.text : l('Confirm');

      refs.modal.current.throwError = value?.throwError !== undefined ? value.throwError : refs.props.current.throwError;

      const promise = new Promise((resolve: any, reject: any) => {
        refs.promise.resolve.current = resolve;
        refs.promise.reject.current = reject;
      });

      setOpenModal(true);

      if (is('function', onOpen)) onOpen();

      return promise;
    }
  };

  const close = (confirm = false) => {
    if (openModal) {
      setOpenModal(false);

      if (is('function', onClose)) onClose();

      // Resolve or reject
      if (confirm) refs.promise.resolve.current?.(confirm);
      else !refs.modal.current.throwError ? refs.promise.resolve.current?.(false) : refs.promise.reject.current?.();

      refs.promise.resolve.current = undefined;
      refs.promise.reject.current = undefined;
    }
  };

  const {
    name,
    description,

    buttons,

    throwError: throwError_,

    ButtonNegativeProps,
    ButtonPositiveProps,

    modal,

    ...otherModal
  } = (refs.modal.current || {});

  // Add to the value
  refs.value.current.open = open;

  refs.value.current.close = close;

  return (
    <ConfirmContext.Provider value={refs.value.current}>
      {children}

      <Modal
        ref={ref}

        open={openModal}

        onClose={close}

        SurfaceProps={{
          tonal: true,
          color: 'primary',

          className: classNames([
            classes.surface
          ])
        }}

        className={classNames([
          staticClassName('Confirm', theme) && [
            `onesy-Confirm-root`
          ],

          className,
          classes.root
        ])}

        {...other}

        {...otherModal}
      >
        {is('function', modal) ?
          modal({ resolve: refs.promise.resolve.current, reject: refs.promise.reject.current }) :
          (<>
            {name !== false && (
              <ModalHeader>
                {is('string', name) ? (
                  <ModalTitle
                    version='t1'

                    weight={500}
                  >
                    {name || l('Confirmation')}
                  </ModalTitle>
                ) : name}
              </ModalHeader>
            )}

            <ModalMain>
              {is('string', description) ? (
                <ModalText
                  version='b1'

                  weight={200}
                >
                  {description !== undefined ? description : l('Are you sure you want to proceed?')}
                </ModalText>
              ) : description}
            </ModalMain>

            <ModalFooter>
              <Button
                version='text'

                color='inherit'

                tonal

                onClick={() => close(false)}

                {...ButtonNegativeProps}
              >
                {buttons?.negative?.text !== undefined ? buttons?.negative?.text : l('Cancel')}
              </Button>

              <Button
                version='text'

                color='inherit'

                tonal

                onClick={() => close(true)}

                {...ButtonPositiveProps}
              >
                {buttons?.positive?.text !== undefined ? buttons?.positive?.text : l('Confirm')}
              </Button>
            </ModalFooter>
          </>)
        }
      </Modal>
    </ConfirmContext.Provider>
  );
});

Confirm.displayName = 'onesy-Confirm';

export default Confirm;
