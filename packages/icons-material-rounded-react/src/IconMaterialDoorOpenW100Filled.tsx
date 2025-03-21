import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenW100Filled'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M210-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h42v-554q0-24.75 17.63-42.38Q287.25-814 312-814h336q24.75 0 42.38 17.62Q708-778.75 708-754v554h42q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H210Zm470-28v-554q0-14-9-23t-23-9H518v-12q35 3 58.5 29.1T600-708v455q0 22.73-16 40.36Q568-195 545-193v-7h135ZM440.5-452q11.5 0 19.5-8.5t8-20q0-11.5-8.05-19.5T440-508q-11 0-19.5 8.05T412-480q0 11 8.5 19.5t20 8.5Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100Filled.displayName = 'OnesyIconMaterialDoorOpenW100Filled';

export default IconMaterialDoorOpenW100Filled;
