import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGenW100'

      short_name='MicrowaveGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm84-86h248q13 0 21.5-8.5T554-356v-248q0-13-8.5-21.5T524-634H276q-13 0-21.5 8.5T246-604v248q0 13 8.5 21.5T276-326Zm424 0q11 0 19.5-8.5T728-354q0-11-8.5-19.5T700-382q-11 0-19.5 8.5T672-354q0 11 8.5 19.5T700-326Zm-426-28v-252h252v252H274Zm426-98q11 0 19.5-8.5T728-480q0-11-8.5-19.5T700-508q-11 0-19.5 8.5T672-480q0 11 8.5 19.5T700-452Zm0-126q11 0 19.5-8.5T728-606q0-11-8.5-19.5T700-634q-11 0-19.5 8.5T672-606q0 11 8.5 19.5T700-578ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGenW100.displayName = 'OnesyIconMaterialMicrowaveGenW100';

export default IconMaterialMicrowaveGenW100;
