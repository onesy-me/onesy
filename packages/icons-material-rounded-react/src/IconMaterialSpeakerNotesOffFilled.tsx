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
      <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-603h100l260 260H328L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L606-240H240Zm640-560v509q0 14-7 23t-18 14q-11 5-22 3.5T812-262L554-520h126q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H474l-40-40h246q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H440q-17 0-28.5 11.5T400-680v6L262-812q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h509q33 0 56.5 23.5T880-800ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffFilled.displayName = 'OnesyIconMaterialSpeakerNotesOffFilled';

export default IconMaterialSpeakerNotesOffFilled;
