import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleBuddhistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistFilled'

      short_name='TempleBuddhist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m330-720 86-115q12-16 29-24t35-8q18 0 35 8t29 24l86 115H330Zm-90 160v-46q-52-13-86-55t-34-98q0-17 11.5-28.5T160-799q17 0 28.5 11.5T200-759q0 32 23.5 55.5T279-680h402q32 0 55.5-23.5T760-759q0-17 11.5-28.5T800-799q17 0 28.5 11.5T840-759q0 56-34 98t-86 55v46H240Zm-80 400v-286q-52-13-86-55t-34-98q0-17 11.5-28.5T80-639q17 0 28.5 11.5T120-599q0 32 23.5 55.5T199-520h562q32 0 55.5-23.5T840-599q0-17 11.5-28.5T880-639q17 0 28.5 11.5T920-599q0 56-34 98t-86 55v286q0 33-23.5 56.5T720-80H560q-17 0-28.5-11.5T520-120v-120q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v120q0 17-11.5 28.5T400-80H240q-33 0-56.5-23.5T160-160Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistFilled.displayName = 'OnesyIconMaterialTempleBuddhistFilled';

export default IconMaterialTempleBuddhistFilled;
