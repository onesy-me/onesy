import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumW100'

      short_name='Podium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M474-702q0 23-15.5 38.5T420-648q-12 0-22.5-5T379-667q-30 8-52 29t-30 50h452q14 0 22.5 10.5T778-553l-22 142q-2 11-10.5 18t-19.5 7H600v-28h127q6-36 12-73t12-73H209q6 36 12 73t12 73h127v28H234q-11 0-19.5-7T204-411l-22-142q-2-14 6.5-24.5T211-588h58q8-38 34-66t64-38q-1-2-1-5v-5q0-23 15.5-38.5T420-756q23 0 38.5 15.5T474-702Zm-82 502h176l20-205q2-14-8-24.5T556-440H404q-14 0-24 10.5t-8 24.5l20 205Zm174 28H394q-11 0-20-8t-10-19l-19-203q-2-26 15.5-46t43.5-20h152q26 0 43.5 20t15.5 46l-19 203q-1 11-10 19t-20 8Z"/>
    </Icon>
  );
});

IconMaterialPodiumW100.displayName = 'OnesyIconMaterialPodiumW100';

export default IconMaterialPodiumW100;
