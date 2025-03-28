import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumFilled'

      short_name='BlurMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h120q-14-17-22.5-37.5T404-440H220q-17 0-28.5-11.5T180-480q0-17 11.5-28.5T220-520h184q5-22 13.5-42.5T440-600H200q-17 0-28.5-11.5T160-640q0-17 11.5-28.5T200-680h400q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280H320Zm280-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-400 80q-17 0-28.5-11.5T160-320q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumFilled.displayName = 'OnesyIconMaterialBlurMediumFilled';

export default IconMaterialBlurMediumFilled;
