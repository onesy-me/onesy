import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2'

      short_name='Co2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360q-17 0-28.5-11.5T400-400v-160q0-17 11.5-28.5T440-600h120q17 0 28.5 11.5T600-560v160q0 17-11.5 28.5T560-360H440Zm20-60h80v-120h-80v120Zm220 150v-70q0-17 11.5-28.5T720-380h80v-40h-91q-12 0-20.5-8.5T680-450q0-12 8.5-21t21.5-9h110q17 0 28.5 11.5T860-440v60q0 17-11.5 28.5T820-340h-80v40h90q12 0 21 9t9 21q0 13-9 21.5t-21 8.5H710q-13 0-21.5-8.5T680-270Zm-520-90q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v21q0 12-9 20.5t-21 8.5q-13 0-21.5-8.5T260-540h-80v120h80q0-12 8.5-21t21.5-9q12 0 21 9t9 21v20q0 17-11.5 28.5T280-360H160Z"/>
    </Icon>
  );
});

IconMaterialCo2.displayName = 'OnesyIconMaterialCo2';

export default IconMaterialCo2;
