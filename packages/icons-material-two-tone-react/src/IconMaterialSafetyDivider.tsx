import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyDivider = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDivider'

      short_name='SafetyDivider'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M11,5h2v14h-2V5z M5,12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C3,11.1,3.9,12,5,12z M7.78,13.58 C6.93,13.21,5.99,13,5,13s-1.93,0.21-2.78,0.58C1.48,13.9,1,14.62,1,15.43L1,16h8l0-0.57C9,14.62,8.52,13.9,7.78,13.58z M19,12 c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C17,11.1,17.9,12,19,12z M21.78,13.58C20.93,13.21,19.99,13,19,13s-1.93,0.21-2.78,0.58 C15.48,13.9,15,14.62,15,15.43L15,16h8l0-0.57C23,14.62,22.52,13.9,21.78,13.58z"/>
    </Icon>
  );
});

IconMaterialSafetyDivider.displayName = 'OnesyIconMaterialSafetyDivider';

export default IconMaterialSafetyDivider;
