import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlus'

      short_name='6kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1.5" opacity=".3" width="1" x="7.5" y="12.5"/><path d="M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M11,9h1.5v2.25L14.25,9H16l-2.25,3L16,15 h-1.75l-1.75-2.25V15H11V9z M6,10c0-0.55,0.45-1,1-1h3v1.5H7.5v1H9c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1 V10z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/><polygon points="12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15"/><path d="M7,15h2c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H7.5v-1H10V9H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z M7.5,12.5h1 V14h-1V12.5z"/></g></g>
    </Icon>
  );
});

IconMaterial6kPlus.displayName = 'OnesyIconMaterial6kPlus';

export default IconMaterial6kPlus;
