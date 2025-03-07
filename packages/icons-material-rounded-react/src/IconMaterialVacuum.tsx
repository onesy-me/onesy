import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVacuum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vacuum'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm360-280v280q0 33-23.5 56.5T440-80h-60q-17 0-28.5-11.5T340-120q0-17 11.5-28.5T380-160h60v-280q0-33-23.5-56.5T360-520H160v80q0 17-11.5 28.5T120-400q-17 0-28.5-11.5T80-440v-80q0-33 23.5-56.5T160-600h40v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h53q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h60L481-776q-12-29-38.5-46.5T384-840q-44 0-74 30t-30 74v136h80q66 0 113 47t47 113ZM300-340Z"/>
    </Icon>
  );
});

IconMaterialVacuum.displayName = 'OnesyIconMaterialVacuum';

export default IconMaterialVacuum;
