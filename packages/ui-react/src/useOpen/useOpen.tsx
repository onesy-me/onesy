import React from 'react';

import { is } from '@onesy/utils';

export interface IUseOpen {
  open?: any;
}

export interface IUseOpenReturn {
  open: any;
  item: any;
  onOpen: (item?: any) => any;
  onToggle: () => any;
  onClose: () => any;
  onChange: (value: any) => any;
  setOpen?: React.Dispatch<any>;
}

const useOpen = (props?: IUseOpen): IUseOpenReturn => {
  const {
    open: openProps
  } = props || {};

  const [open, setOpen] = React.useState({ open: is('simple', openProps) ? openProps : false, ...(!is('simple', openProps) && openProps) });

  const onOpen = React.useCallback((item?: any) => {
    setOpen({ open: true, ...item });
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(previous => ({ ...previous, open: false }));
  }, []);

  const onToggle = React.useCallback(() => {
    setOpen(previous => ({ ...previous, open: !previous?.open }));
  }, []);

  const onChange = React.useCallback((value: any) => {
    setOpen(() => ({ ...value, open: is('boolean', value) ? value : !!value?.open }));
  }, []);

  const result = React.useMemo(() => {
    return {
      open: open?.open,
      item: open,
      onOpen,
      onClose,
      onToggle,
      onChange,
      setOpen
    };
  }, [open, setOpen]);

  return result;
};

export default useOpen;
