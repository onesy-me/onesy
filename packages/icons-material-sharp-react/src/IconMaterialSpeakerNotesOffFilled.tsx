import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerNotesOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffFilled'

      short_name='SpeakerNotesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 606-240H240L80-80v-700h100l260 260H328L28-820l56-56L876-84l-56 56Zm8-218L554-520h166v-80H474l-40-40h286v-80H400v46L194-880h686v634h-52ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffFilled.displayName = 'OnesyIconMaterialSpeakerNotesOffFilled';

export default IconMaterialSpeakerNotesOffFilled;
