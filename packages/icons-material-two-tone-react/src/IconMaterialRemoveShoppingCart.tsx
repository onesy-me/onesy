import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveShoppingCart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCart'

      short_name='RemoveShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M1.41 1.13L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7z"/><path d="M18.31 6H9.12l4.99 5h1.44z" opacity=".3"/><path d="M20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCart.displayName = 'OnesyIconMaterialRemoveShoppingCart';

export default IconMaterialRemoveShoppingCart;
