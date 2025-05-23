import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLock'

      short_name='PhonelinkLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 7C6.6 7 5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3V9.5C10.8 8.1 9.4 7 8 7zm1.5 4h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11zM21 21V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLock.displayName = 'OnesyIconMaterialPhonelinkLock';

export default IconMaterialPhonelinkLock;
