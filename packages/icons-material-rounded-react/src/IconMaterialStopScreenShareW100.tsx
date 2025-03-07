import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m556-518-50-50h28v-26q0-5 4.5-7t8.5 2l34 34q5 5 5 11t-5 11l-25 25Zm242 242-22-22q11-3 17.5-12t6.5-18v-376q0-14-9-23t-23-9H338l-28-28h458q26 0 43 17t17 43v376q0 14-6.5 28.5T798-276Zm-78 76H94q-6 0-10-4t-4-10q0-6 4-10t10-4h598l-40-40H192q-26 0-43-17t-17-43v-376q0-17 9-30.5t23-21.5l-90-90q-4-4-4.5-9.5T74-866q5-5 10-5t10 5L866-94q4 4 4.5 9.5T866-74q-5 5-10 5t-10-5L720-200ZM404-516q-8 9-12 18.5t-4 23.5v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66q0-21 7.5-37t16.5-25L185-735q-12 5-18.5 12.5T160-704v376q0 14 9 23t23 9h432L404-516Zm153-1Zm-152 1Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100.displayName = 'OnesyIconMaterialStopScreenShareW100';

export default IconMaterialStopScreenShareW100;
