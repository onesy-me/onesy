import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bathroom'

      short_name='Bathroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm120 0q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm120 0q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240ZM360-360q17 0 28.5-11.5T400-400q0-17-11.5-28.5T360-440q-17 0-28.5 11.5T320-400q0 17 11.5 28.5T360-360Zm120 0q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm120 0q17 0 28.5-11.5T640-400q0-17-11.5-28.5T600-440q-17 0-28.5 11.5T560-400q0 17 11.5 28.5T600-360ZM280-480h400v-40q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520v40Zm62-60q8-51 46.5-85.5T480-660q53 0 91.5 34.5T618-540H342ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialBathroom.displayName = 'OnesyIconMaterialBathroom';

export default IconMaterialBathroom;
