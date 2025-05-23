import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOff'

      short_name='CreditCardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M20,17.17V12h-5.17L20,17.17z M10.83,8H20V6H8.83L10.83,8z M4,6.83V8h1.17 L4,6.83z M15.17,18l-6-6H4v6H15.17z" enableBackground="new" opacity=".3"/><path d="M6.83,4H20c1.11,0,2,0.89,2,2v12c0,0.34-0.08,0.66-0.23,0.94L20,17.17V12h-5.17l-4-4H20V6H8.83 L6.83,4z M20.49,23.31L17.17,20H4c-1.11,0-2-0.89-2-2L2.01,6c0-0.34,0.08-0.66,0.23-0.93L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M4,6.83V8h1.17L4,6.83z M15.17,18l-6-6H4v6H15.17z" enableBackground="new"/>
    </Icon>
  );
});

IconMaterialCreditCardOff.displayName = 'OnesyIconMaterialCreditCardOff';

export default IconMaterialCreditCardOff;
