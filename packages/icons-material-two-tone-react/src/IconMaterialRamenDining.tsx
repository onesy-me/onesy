import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDining'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.73,18.39l1.27,0.5V20h4v-1.11l1.27-0.5c2.16-0.85,3.74-2.47,4.4-4.39H4.34 C4.99,15.92,6.58,17.54,8.73,18.39z" enableBackground="new" opacity=".3"/><path d="M22,3.51V2L4,3.99V12H2c0,3.69,2.47,6.86,6,8.25V22h8v-1.75c3.53-1.39,6-4.56,6-8.25H10.5V8H22V6.5H10.5V4.78L22,3.51z M8,5.06l1-0.11V6.5H8V5.06z M8,8h1v4H8V8z M5.5,5.34l1-0.11V6.5h-1V5.34z M5.5,8h1v4h-1V8z M19.66,14 c-0.66,1.92-2.24,3.54-4.4,4.39L14,18.89V20h-4v-1.11l-1.27-0.5c-2.16-0.85-3.74-2.47-4.4-4.39H19.66z"/></g></g>
    </Icon>
  );
});

IconMaterialRamenDining.displayName = 'OnesyIconMaterialRamenDining';

export default IconMaterialRamenDining;
