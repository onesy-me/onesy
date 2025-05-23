import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBento = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bento'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g opacity=".3"><path d="M4,17h8V7H4V17z M8,10.5c0.83,0,1.5,0.67,1.5,1.5S8.83,13.5,8,13.5S6.5,12.83,6.5,12S7.17,10.5,8,10.5z M14,13h6v4h-6V13z M20,7v4h-6V7H20z"/></g><g><path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,11h-6V7h6V11z M4,7h8v10H4V7z M14,17v-4h6v4H14z M9.5,12c0,0.83-0.67,1.5-1.5,1.5S6.5,12.83,6.5,12s0.67-1.5,1.5-1.5S9.5,11.17,9.5,12z"/></g>
    </Icon>
  );
});

IconMaterialBento.displayName = 'OnesyIconMaterialBento';

export default IconMaterialBento;
