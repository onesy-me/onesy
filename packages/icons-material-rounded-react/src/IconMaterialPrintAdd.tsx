import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAdd'

      short_name='PrintAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-560h640-640Zm-80 40q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520q0 17-11.5 28.5T840-480q-16 0-28-11.5T800-520q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80q0-33 23.5-56.5T320-440h200q17 0 28.5 11.5T560-400q0 17-11.5 28.5T520-360H320v160h200q17 0 28.5 11.5T560-160q0 17-11.5 28.5T520-120H320q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160Zm160-120v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80v-120H320v120h-80Zm480 400h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-80Z"/>
    </Icon>
  );
});

IconMaterialPrintAdd.displayName = 'OnesyIconMaterialPrintAdd';

export default IconMaterialPrintAdd;
