import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkliftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkliftW100Filled'

      short_name='Forklift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M210-146q-39 0-66.5-27.5T116-240q0-23 10.5-43t29.5-34v-177h95v-214h221l170 397q5 12 8.5 24.5T654-260q0 48-33 81t-81 33q-38 0-68-22t-41-58H303q-5 35-31.5 57.5T210-146Zm484-40v-588h28v560h122v28H694Zm-484 12q27 0 46.5-19.5T276-240q0-27-19.5-46.5T210-306q-27 0-46.5 19.5T144-240q0 27 19.5 46.5T210-174Zm330 0q35 0 60.5-25.5T626-260q0-35-25.5-60.5T540-346q-35 0-60.5 25.5T454-260q0 35 25.5 60.5T540-174ZM396-374h144q13 0 25.5 3t24.5 9L454-680H279v186l117 120Z"/>
    </Icon>
  );
});

IconMaterialForkliftW100Filled.displayName = 'OnesyIconMaterialForkliftW100Filled';

export default IconMaterialForkliftW100Filled;
