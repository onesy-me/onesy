import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVacuumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumFilled'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm215 80q-18 0-27-16t-1-33q7-17 10-35t3-36q0-83-58.5-141.5T160-400q-8 0-16.5.5T127-397q-18 3-32.5-8T80-433v-87q0-33 23.5-56.5T160-600h40v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h53q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h60L481-776q-12-29-38.5-46.5T384-840q-43 0-73.5 30.5T280-736v136h80q66 0 113 47t47 113v280q0 33-23.5 56.5T440-80h-65Z"/>
    </Icon>
  );
});

IconMaterialVacuumFilled.displayName = 'OnesyIconMaterialVacuumFilled';

export default IconMaterialVacuumFilled;
