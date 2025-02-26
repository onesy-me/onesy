import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardFilled'

      short_name='Ward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-17 0-28.5-11.5T160-120v-680h-40q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h80q17 0 28.5 11.5T240-840v720q0 17-11.5 28.5T200-80Zm160 0q-33 0-56.5-23.5T280-160v-640q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H360Zm0-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H360v261Zm180-61q-33 0-56.5-23.5T460-680q0-33 23.5-56.5T540-760q33 0 56.5 23.5T620-680q0 33-23.5 56.5T540-600Zm-40 320v40q0 17 11.5 28.5T540-200q17 0 28.5-11.5T580-240v-40h40q17 0 28.5-11.5T660-320q0-17-11.5-28.5T620-360h-40v-40q0-17-11.5-28.5T540-440q-17 0-28.5 11.5T500-400v40h-40q-17 0-28.5 11.5T420-320q0 17 11.5 28.5T460-280h40Z"/>
    </Icon>
  );
});

IconMaterialWardFilled.displayName = 'OnesyIconMaterialWardFilled';

export default IconMaterialWardFilled;
