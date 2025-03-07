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
      <path d="M210-146q-39.17 0-66.58-27.42Q116-200.83 116-240q0-23 10.5-43t29.5-34v-147q0-12.75 8.63-21.38Q173.25-494 186-494h65v-184q0-12.75 8.63-21.38Q268.25-708 281-708h151q18.38 0 33.69 9.5Q481-689 488-672l154 361q5 12 8.5 24.7T654-260q0 48-33 81t-81 33q-38 0-68-22t-41-58H303q-5 35-31.5 57.5T210-146Zm620-40H724q-12.75 0-21.37-8.63Q694-203.25 694-216v-544q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v546h108q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Zm-620 12q27 0 46.5-19.5T276-240q0-27-19.5-46.5T210-306q-27 0-46.5 19.5T144-240q0 27 19.5 46.5T210-174Zm330 0q35 0 60.5-25.5T626-260q0-35-25.5-60.5T540-346q-35 0-60.5 25.5T454-260q0 35 25.5 60.5T540-174ZM396-374h144q13 0 25.5 3t24.5 9L462-661q-4-9-11.5-14t-17.5-5H279v186l117 120Z"/>
    </Icon>
  );
});

IconMaterialForkliftW100Filled.displayName = 'OnesyIconMaterialForkliftW100Filled';

export default IconMaterialForkliftW100Filled;
