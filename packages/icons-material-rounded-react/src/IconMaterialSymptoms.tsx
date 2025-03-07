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
      <path d="M479-500Zm-427 0q0-14 3-27.5T65-554q63-113 173.5-179.5T480-800q135 0 248.5 70T902-540q8 15 2.5 31T884-485q-15 8-30.5 2.5T830-503q-25-50-62-90t-82.5-68Q640-689 588-704.5T480-720q-113 0-207.5 59.5T128-500q50 100 146 161t209 59q17 0 28.5 11t11.5 27q0 17-11.5 29.5T483-200q-132-1-243-65.5T65-446q-7-13-10-26.5T52-500Zm428 180q-75 0-127.5-52.5T300-500q0-75 52.5-127.5T480-680q75 0 127.5 52.5T660-500q0 7-.5 13.5T658-473l-62 57q-19 19-34 40.5T537-330q-14 5-28 7.5t-29 2.5Zm0-72q45 0 76.5-31.5T588-500q0-45-31.5-76.5T480-608q-45 0-76.5 31.5T372-500q0 45 31.5 76.5T480-392ZM760-80q-67 0-113.5-47T599-241q0-33 14-63t38-53l54-51q23-22 55-22t55 22l53 51q24 23 37.5 52.5T920-242q0 68-47 115T760-80Zm0-80q33 0 56.5-24t22.5-58q0-17-7.5-32T812-300l-52-50-53 50q-12 11-20 26.5t-7 32.5q0 34 23 57.5t57 23.5Zm0-95Z"/>
    </Icon>
  );
});

IconMaterialSymptoms.displayName = 'OnesyIconMaterialSymptoms';

export default IconMaterialSymptoms;
