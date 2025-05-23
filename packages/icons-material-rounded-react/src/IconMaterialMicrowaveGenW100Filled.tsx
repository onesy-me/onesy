import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGenW100Filled'

      short_name='MicrowaveGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v416q0 24.75-17.62 42.37Q792.75-212 768-212H192Zm84-114h247.83q13.17 0 21.67-8.63 8.5-8.62 8.5-21.37v-247.83q0-13.17-8.62-21.67-8.63-8.5-21.38-8.5H276.17q-13.17 0-21.67 8.62-8.5 8.63-8.5 21.38v247.83q0 13.17 8.63 21.67 8.62 8.5 21.37 8.5Zm424 0q11 0 19.5-8.5T728-354q0-11-8.5-19.5T700-382q-11 0-19.5 8.5T672-354q0 11 8.5 19.5T700-326Zm-426-28v-252h252v252H274Zm426-98q11 0 19.5-8.5T728-480q0-11-8.5-19.5T700-508q-11 0-19.5 8.5T672-480q0 11 8.5 19.5T700-452Zm0-126q11 0 19.5-8.5T728-606q0-11-8.5-19.5T700-634q-11 0-19.5 8.5T672-606q0 11 8.5 19.5T700-578Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGenW100Filled.displayName = 'OnesyIconMaterialMicrowaveGenW100Filled';

export default IconMaterialMicrowaveGenW100Filled;
