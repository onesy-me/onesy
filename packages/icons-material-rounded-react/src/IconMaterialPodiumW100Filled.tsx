import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumW100Filled'

      short_name='Podium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M474-702q0 23-15.5 38.5T420-648q-12 0-22.5-5T379-667q-30 8-52 29t-30 50h452q14 0 22.5 10.5T778-553l-22 142q-2 11-10.5 18t-19.5 7h-98l1-15q3-32-18.5-56.5T556-482H404q-33 0-54.5 24.5T331-401l1 15h-98q-11 0-19.5-7T204-411l-22-142q-2-14 6.5-24.5T211-588h58q8-38 34-66t64-38q-1-2-1-5v-5q0-23 15.5-38.5T420-756q23 0 38.5 15.5T474-702Zm-67 516h146q11 0 20-8t10-19l18-191q2-20-11.5-35T556-454H404q-20 0-33.5 15T359-404l18 191q1 11 10 19t20 8Z"/>
    </Icon>
  );
});

IconMaterialPodiumW100Filled.displayName = 'OnesyIconMaterialPodiumW100Filled';

export default IconMaterialPodiumW100Filled;
