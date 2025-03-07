import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComedyMaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComedyMaskFilled'

      short_name='ComedyMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q60 0 104.5-39t53.5-97q2-10-4.5-17t-17.5-7H344q-10 0-17 7t-5 17q9 58 53.5 97T480-280Zm0 200q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440v-360q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v360q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-80q116 0 198-82t82-198v-360H200v360q0 116 82 198t198 82Zm0 0q-116 0-198-82t-82-198v-360h560v360q0 116-82 198t-198 82ZM360-680q-27 0-47.5 16T284-624q-3 9 3 16.5t17 7.5h112q10 0 16-7.5t4-16.5q-8-24-28.5-40T360-680Zm240 0q-27 0-47.5 16T524-624q-3 9 3 16.5t17 7.5h112q10 0 16-7.5t4-16.5q-8-24-28.5-40T600-680Z"/>
    </Icon>
  );
});

IconMaterialComedyMaskFilled.displayName = 'OnesyIconMaterialComedyMaskFilled';

export default IconMaterialComedyMaskFilled;
