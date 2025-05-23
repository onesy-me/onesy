import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychiatry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Psychiatry'

      short_name='Psychiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-17 0-28.5-11.5T440-160v-279q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-40q0-17 11.5-28.5T160-840h40q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h40q17 0 28.5 11.5T840-680v40q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v160q0 17-11.5 28.5T480-120Zm-40-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z"/>
    </Icon>
  );
});

IconMaterialPsychiatry.displayName = 'OnesyIconMaterialPsychiatry';

export default IconMaterialPsychiatry;
