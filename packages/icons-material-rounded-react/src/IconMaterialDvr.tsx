import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDvr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dvr'

      short_name='Dvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm120 160h280q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480H400q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm0-160h280q17 0 28.5-11.5T720-600q0-17-11.5-28.5T680-640H400q-17 0-28.5 11.5T360-600q0 17 11.5 28.5T400-560ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDvr.displayName = 'OnesyIconMaterialDvr';

export default IconMaterialDvr;
