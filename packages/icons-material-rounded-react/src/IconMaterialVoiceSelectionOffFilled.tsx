import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceSelectionOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionOffFilled'

      short_name='VoiceSelectionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M733-611q11-12 26.5-13t26.5 11q44 51 69 116t25 139q0 23-3 46.5t-8 46.5q-4 16-18.5 24.5T820-236q-16-4-24.5-18t-4.5-30q17-72 1-142.5T730-554q-11-13-9.5-29t12.5-28ZM342-786q-8-15-2.5-30.5T360-840q15-8 30.5-2.5T414-822l54 109q8 14 2 29t-20 22q-15 8-31 1.5T395-682l-53-104ZM160-349v-51q0-17 11.5-28.5T200-440h120v-80q0-17 11.5-28.5T360-560h41l80 80h-81v40q0 33-23.5 56.5T320-360h-80v11q0 35 21.5 61.5T316-252l12 3q40 10 45 50t-31 60q-51 29-107 42T120-81q-17 1-28.5-10.5T80-120q0-17 11.5-28.5T120-161q36-2 70.5-8.5T259-188q-46-23-72.5-66.5T160-349ZM791-56 56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q11 11 11 27.5T848-56q-12 12-28.5 12T791-56Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionOffFilled.displayName = 'OnesyIconMaterialVoiceSelectionOffFilled';

export default IconMaterialVoiceSelectionOffFilled;
