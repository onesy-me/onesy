import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlus'

      short_name='1kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M10.5,9H12v2.25L13.75,9h1.75l-2.25,3l2.25,3 h-1.75L12,12.75V15h-1.5V9z M6,9h3v6H7.5v-4.5H6V9z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/><polygon points="7.5,15 9,15 9,9 6,9 6,10.5 7.5,10.5"/><polygon points="12,12.75 13.75,15 15.5,15 13.25,12 15.5,9 13.75,9 12,11.25 12,9 10.5,9 10.5,15 12,15"/></g></g>
    </Icon>
  );
});

IconMaterial1kPlus.displayName = 'OnesyIconMaterial1kPlus';

export default IconMaterial1kPlus;
