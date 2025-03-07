import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingFilled'

      short_name='Grading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-233 99-99q11-11 28-11t28 11q11 11 11 28t-11 28L685-149q-12 12-28 12t-28-12l-57-57q-11-11-11-28t11-28q11-11 28-11t28 11l29 29ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h280q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H160Zm0-160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h280q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280H160Zm0-160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H160Zm0-160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Z"/>
    </Icon>
  );
});

IconMaterialGradingFilled.displayName = 'OnesyIconMaterialGradingFilled';

export default IconMaterialGradingFilled;
