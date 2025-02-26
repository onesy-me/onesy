import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSymptoms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Symptoms'

      short_name='Symptoms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-500Zm1 300q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-6 15-12.5 29T893-444l-63-59q-51-100-144.5-158.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q11 0 21.5-.5T523-283q-4 20-4 41t4 41q-11 1-21.5 1H480Zm0-120q-75 0-127.5-52.5T300-500q0-75 52.5-127.5T480-680q75 0 127.5 52.5T660-500q0 7-.5 13.5T658-473l-62 57q-19 19-34 40.5T537-330q-14 5-28 7.5t-29 2.5Zm0-72q45 0 76.5-31.5T588-500q0-45-31.5-76.5T480-608q-45 0-76.5 31.5T372-500q0 45 31.5 76.5T480-392ZM760-80q-67 0-113.5-47T599-241q0-33 14-63t38-53l109-103 108 103q24 23 37.5 52.5T920-242q0 68-47 115T760-80Zm0-80q33 0 56.5-24t22.5-58q0-17-7.5-32T812-300l-52-50-53 50q-12 11-20 26.5t-7 32.5q0 34 23 57.5t57 23.5Zm0-95Z"/>
    </Icon>
  );
});

IconMaterialSymptoms.displayName = 'OnesyIconMaterialSymptoms';

export default IconMaterialSymptoms;
