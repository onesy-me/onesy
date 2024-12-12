import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pallet'

      short_name='Pallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v50q0 17-11.5 28.5T160-70h-40q-17 0-28.5-11.5T80-110v-90q0-17 11.5-28.5T120-240h720q17 0 28.5 11.5T880-200v90q0 17-11.5 28.5T840-70h-40q-17 0-28.5-11.5T760-110v-50H540v50q0 17-11.5 28.5T500-70h-40q-17 0-28.5-11.5T420-110v-50H200Zm40-160q-17 0-28.5-11.5T200-360v-480q0-17 11.5-28.5T240-880h480q17 0 28.5 11.5T760-840v480q0 17-11.5 28.5T720-320H240Zm40-80h400v-400H280v400Zm280-240q17 0 28.5-11.5T600-680q0-17-11.5-28.5T560-720H400q-17 0-28.5 11.5T360-680q0 17 11.5 28.5T400-640h160ZM280-400v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPallet.displayName = 'OnesyIconMaterialPallet';

export default IconMaterialPallet;
