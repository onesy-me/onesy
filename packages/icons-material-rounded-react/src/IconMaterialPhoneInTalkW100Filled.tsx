import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneInTalkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkW100Filled'

      short_name='PhoneInTalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-508q-6 0-10-4t-5-10q-13-103-86.5-176.5T500-785q-6-1-10-5t-4-10q0-6 4-10t10-3q116 12 197.5 93.5T791-522q1 6-3 10t-10 4Zm-163 0q-5 0-8.5-3t-5.5-8q-11-38-38.5-66.5T497-624q-5-2-8-5.5t-3-8.5q0-7 4.5-11t11.5-2q47 11 81 45t46 82q2 7-2.5 11.5T615-508Zm130 336q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkW100Filled.displayName = 'OnesyIconMaterialPhoneInTalkW100Filled';

export default IconMaterialPhoneInTalkW100Filled;
