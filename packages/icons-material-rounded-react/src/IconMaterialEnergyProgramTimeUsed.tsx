import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergyProgramTimeUsed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramTimeUsed'

      short_name='EnergyProgramTimeUsed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-440ZM120-80q-33 0-56.5-23.5T40-160v-560q0-33 23.5-56.5T120-800h280q17 0 28.5 11.5T440-760q0 17-11.5 28.5T400-720H120v560h560v-200q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v200q0 33-23.5 56.5T680-80H120Zm120-440q-17 0-28.5 11.5T200-480v200q0 17 11.5 28.5T240-240q17 0 28.5-11.5T280-280v-200q0-17-11.5-28.5T240-520Zm160-120q-17 0-28.5 11.5T360-600v320q0 17 11.5 28.5T400-240q17 0 28.5-11.5T440-280v-320q0-17-11.5-28.5T400-640Zm160 240q-17 0-28.5 11.5T520-360v80q0 17 11.5 28.5T560-240q17 0 28.5-11.5T600-280v-80q0-17-11.5-28.5T560-400Zm160-80q-30 0-59-9t-54-26l-15 14q-12 11-28.5 11T536-501q-11-11-11-28t11-28l16-16q-16-24-24-51t-8-56q0-83 58.5-141.5T720-880h160q17 0 28.5 11.5T920-840v160q0 83-58.5 141.5T720-480Zm0-80q50 0 85-35t35-85v-120H720q-50 0-85 35t-35 85q0 13 2.5 25t7.5 24l104-104q11-11 28-11t28 11q12 12 12 28.5T770-678L666-574q13 6 26.5 10t27.5 4Zm-6-119Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramTimeUsed.displayName = 'OnesyIconMaterialEnergyProgramTimeUsed';

export default IconMaterialEnergyProgramTimeUsed;
