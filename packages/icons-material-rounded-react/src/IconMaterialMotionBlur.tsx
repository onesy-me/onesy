import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionBlur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionBlur'

      short_name='MotionBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h200q-14-17-22.5-37T484-440h-84q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h84q5-23 13.5-43t22.5-37H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h520q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H320Zm360-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-560-80q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H120Zm40 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-40Z"/>
    </Icon>
  );
});

IconMaterialMotionBlur.displayName = 'OnesyIconMaterialMotionBlur';

export default IconMaterialMotionBlur;
