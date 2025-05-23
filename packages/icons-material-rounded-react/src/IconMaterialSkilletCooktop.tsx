import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkilletCooktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletCooktop'

      short_name='SkilletCooktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360q-50 0-85-35t-35-85v-120q0-17 11.5-28.5T160-640h481q5-33 27-59t54-37l147-49q16-5 31 2t20 23q5 16-2.5 31T894-709l-147 49q-12 4-19.5 14.5T720-622v142q0 50-35 85t-85 35H240Zm0-80h360q17 0 28.5-11.5T640-480v-80H200v80q0 17 11.5 28.5T240-440Zm120 280v-80H120q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h240q33 0 56.5 23.5T440-240v80q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160Zm160 0v-80q0-33 23.5-56.5T600-320h240q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H600v80q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160ZM420-500Z"/>
    </Icon>
  );
});

IconMaterialSkilletCooktop.displayName = 'OnesyIconMaterialSkilletCooktop';

export default IconMaterialSkilletCooktop;
