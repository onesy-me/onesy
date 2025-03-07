import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardVoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardVoiceFilled'

      short_name='KeyboardVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm0 7q-.425 0-.712-.288Q11 20.425 11 20v-2.1q-2.325-.3-3.95-1.925t-1.975-3.9q-.075-.425.225-.75T6.1 11q.35 0 .625.262.275.263.35.638.325 1.75 1.7 2.925Q10.15 16 12 16t3.225-1.175q1.375-1.175 1.7-2.925.075-.375.363-.638.287-.262.637-.262.475 0 .775.325.3.325.225.75-.35 2.275-1.975 3.9T13 17.9V20q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialKeyboardVoiceFilled.displayName = 'OnesyIconMaterialKeyboardVoiceFilled';

export default IconMaterialKeyboardVoiceFilled;
