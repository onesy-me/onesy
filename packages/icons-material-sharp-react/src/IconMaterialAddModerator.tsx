import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddModerator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModerator'

      short_name='AddModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Zm180 334h40v-100h100v-40H700v-100h-40v100H560v40h100v100Z"/>
    </Icon>
  );
});

IconMaterialAddModerator.displayName = 'OnesyIconMaterialAddModerator';

export default IconMaterialAddModerator;
