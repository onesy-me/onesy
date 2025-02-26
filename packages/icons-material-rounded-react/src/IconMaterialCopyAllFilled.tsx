import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCopyAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllFilled'

      short_name='CopyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680q0 17-11.5 28.5T160-640Zm0 140q-17 0-28.5-11.5T120-540q0-17 11.5-28.5T160-580q17 0 28.5 11.5T200-540q0 17-11.5 28.5T160-500Zm0 140q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360Zm0 140q-17 0-28.5-11.5T120-260q0-17 11.5-28.5T160-300q17 0 28.5 11.5T200-260q0 17-11.5 28.5T160-220Zm0 140q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160q17 0 28.5 11.5T200-120q0 17-11.5 28.5T160-80Zm140 0q-17 0-28.5-11.5T260-120q0-17 11.5-28.5T300-160q17 0 28.5 11.5T340-120q0 17-11.5 28.5T300-80Zm140 0q-17 0-28.5-11.5T400-120q0-17 11.5-28.5T440-160q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80Zm140 0q-17 0-28.5-11.5T540-120q0-17 11.5-28.5T580-160q17 0 28.5 11.5T620-120q0 17-11.5 28.5T580-80Z"/>
    </Icon>
  );
});

IconMaterialCopyAllFilled.displayName = 'OnesyIconMaterialCopyAllFilled';

export default IconMaterialCopyAllFilled;
