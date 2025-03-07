import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face6'

      short_name='Face6'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.55,7.66C7.06,6.64,8.09,6,9.24,6h5.53c1.14,0,2.17,0.64,2.68,1.66c0.94,1.87,1.66,2.08,2.26,2.24 C18.78,6.51,15.68,4,12,4S5.22,6.51,4.29,9.9C4.97,9.72,5.62,9.52,6.55,7.66z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,4c3.68,0,6.78,2.51,7.71,5.9 c-0.6-0.16-1.33-0.37-2.26-2.24C16.94,6.64,15.91,6,14.76,6H9.24C8.09,6,7.06,6.64,6.55,7.66C5.62,9.52,4.97,9.72,4.29,9.9 C5.22,6.51,8.32,4,12,4z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8 h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/></g></g>
    </Icon>
  );
});

IconMaterialFace6.displayName = 'OnesyIconMaterialFace6';

export default IconMaterialFace6;
