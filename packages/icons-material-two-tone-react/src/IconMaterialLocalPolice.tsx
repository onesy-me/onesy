import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPolice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPolice'

      short_name='LocalPolice'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,3.19L5,6.3V11c0,4.52,2.98,8.69,7,9.93c4.02-1.23,7-5.41,7-9.93V6.3L12,3.19z M14.5,12.59l0.9,3.88 L12,14.42l-3.4,2.05l0.9-3.87l-3-2.59l3.96-0.34L12,6.02l1.54,3.64L17.5,10L14.5,12.59z" opacity=".3"/><path d="M14.5,12.59l0.9,3.88L12,14.42l-3.4,2.05l0.9-3.87l-3-2.59l3.96-0.34L12,6.02l1.54,3.64L17.5,10L14.5,12.59z M12,3.19 l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12 V5L12,1L12,1z"/>
    </Icon>
  );
});

IconMaterialLocalPolice.displayName = 'OnesyIconMaterialLocalPolice';

export default IconMaterialLocalPolice;
