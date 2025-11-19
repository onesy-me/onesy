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
  const [open, setOpen] = React.useState({ open: false, ...props });

  const onOpen = (item?: any) => {
    setOpen({ open: true, ...item });
  };

  const onClose = () => {
    setOpen(previous => ({ ...previous, open: false }));
  };

  const onToggle = () => {
    setOpen(previous => ({ ...previous, open: !previous?.open }));
  };

  const onChange = (value: any) => {
    setOpen(() => ({ ...value, open: is('boolean', value) ? value : !!value?.open }));
  };

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
