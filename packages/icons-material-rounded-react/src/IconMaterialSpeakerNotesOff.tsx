import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerNotesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOff'

      short_name='SpeakerNotesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400Zm600-400v498q0 17-11.5 28.5T840-262q-15 0-27.5-10T800-302v-498H291q-20 0-30-12.5T251-840q0-15 10-27.5t30-12.5h509q33 0 56.5 23.5T880-800ZM680-520H571q-20 0-30-12.5T531-560q0-15 10-27.5t30-12.5h109q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-591l-24-24q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L606-240H240Zm297-297Zm-257 17q-17 0-28.5-11.5T240-560q0-17 11.5-28.5T280-600q17 0 28.5 11.5T320-560q0 17-11.5 28.5T280-520Zm400-120H440q-17 0-28.5-11.5T400-680q0-17 11.5-28.5T440-720h240q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM344-504ZM160-688v413l46-45h322L160-688Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOff.displayName = 'OnesyIconMaterialSpeakerNotesOff';

export default IconMaterialSpeakerNotesOff;
