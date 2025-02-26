import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrongLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100Filled'

      short_name='WrongLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-494q25 0 42.5-17.5T540-554q0-25-17.5-42.5T480-614q-25 0-42.5 17.5T420-554q0 25 17.5 42.5T480-494Zm0 363Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q8 0 13.5.5t14.5.5l73 73-84 84 133 133 84-84 39 39v35q0 85-69 190T480-131Zm150-519-20-20 84-84-84-84 20-20 84 84 84-84 20 20-84 84 84 84-20 20-84-84-84 84Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100Filled.displayName = 'OnesyIconMaterialWrongLocationW100Filled';

export default IconMaterialWrongLocationW100Filled;
