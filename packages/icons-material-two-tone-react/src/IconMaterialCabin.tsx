import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCabin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cabin'

      short_name='Cabin'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M13.94,7h-3.89L12,5.52L13.94,7z M7.44,9h9.12L18,10.1V11H6v-0.9L7.44,9z M18,13v2H6v-2H18z M6,19v-2h12v2H6z" opacity=".3"/><path d="M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z M12,3L6,7.58V6H4v3.11L1,11.4 l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M13.94,7h-3.89L12,5.52L13.94,7z M7.44,9h9.12L18,10.1V11H6v-0.9L7.44,9z M18,13v2H6v-2H18z M6,19v-2h12v2H6z"/>
    </Icon>
  );
});

IconMaterialCabin.displayName = 'OnesyIconMaterialCabin';

export default IconMaterialCabin;
