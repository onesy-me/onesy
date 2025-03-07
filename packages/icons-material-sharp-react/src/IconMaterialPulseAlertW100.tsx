import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPulseAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulseAlertW100'

      short_name='PulseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M471-487Zm-328-67q-5-17-8-32.98-3-15.98-3-33.02 0-71 48.5-119.5T300-788q52 0 98.5 29t81.5 83q35-55 81-83.5t99-28.5q69 0 117.5 47T828-625q-7-4-14-7.5t-15-6.5q-7-52-46-86.5T660-760q-49 0-88.5 27.5T494-646h-28q-37-57-77.5-85.5T300-760q-59 0-99.5 40.5T160-620q0 17.42 3 33.21T173-554h-30Zm337 378-22-20q-42-38-76-70t-63-60h41q26.42 24.24 55.71 52.12T480-214q24-22 45-41.5t40-37.5q4.98 5.25 10.49 9.62Q581-279 586-274q-19 18-40 37.5T502-196l-22 20ZM86-426v-28h166l88-131 88 131h79q0 4-.5 7.24-.5 3.25-.5 7 0 3.76.5 6.76t.5 7h-94l-73-109-73 109H86Zm634.04 122q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5ZM706-418v-156h28v156h-28Z"/>
    </Icon>
  );
});

IconMaterialPulseAlertW100.displayName = 'OnesyIconMaterialPulseAlertW100';

export default IconMaterialPulseAlertW100;
