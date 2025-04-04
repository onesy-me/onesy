import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Luggage'

      short_name='Luggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g opacity=".3"><path d="M7,8v11h10V8H7z M9.5,18H8V9h1.5V18z M12.75,18h-1.5V9h1.5V18z M16,18h-1.5V9H16V18z"/></g><g><path d="M9.5,18H8V9h1.5V18z M12.75,18h-1.5V9h1.5V18z M16,18h-1.5V9H16V18z M17,6h-2V3c0-0.55-0.45-1-1-1h-4C9.45,2,9,2.45,9,3v3 H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1s1-0.45,1-1h6c0,0.55,0.45,1,1,1s1-0.45,1-1c1.1,0,2-0.9,2-2V8 C19,6.9,18.1,6,17,6z M10.5,3.5h3V6h-3V3.5z M17,19H7V8h10V19z"/></g>
    </Icon>
  );
});

IconMaterialLuggage.displayName = 'OnesyIconMaterialLuggage';

export default IconMaterialLuggage;
