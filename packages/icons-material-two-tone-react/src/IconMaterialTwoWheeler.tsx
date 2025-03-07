import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoWheeler = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheeler'

      short_name='TwoWheeler'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" fillRule="evenodd" height="24" width="24" x="0" y="0"/><path d="M4.17,11L4.17,11C4.12,11,4.06,11,4,11H4.17 M13.41,5H9v2h3.59l2,2H11l-4,2L5,9H0v2h4c-2.21,0-4,1.79-4,4 c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4l2,2h3l3.49-6.1l1.01,1.01C16.59,12.64,16,13.75,16,15c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4 c0-2.21-1.79-4-4-4c-0.18,0-0.36,0.03-0.53,0.05L17.41,9H20V6l-3.72,1.86L13.41,5L13.41,5z M20,17c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C22,16.1,21.1,17,20,17L20,17z M4,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2 C6,16.1,5.1,17,4,17L4,17z"/></g>
    </Icon>
  );
});

IconMaterialTwoWheeler.displayName = 'OnesyIconMaterialTwoWheeler';

export default IconMaterialTwoWheeler;
