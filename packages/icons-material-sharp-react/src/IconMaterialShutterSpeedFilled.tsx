import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedFilled'

      short_name='ShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-80h240v80H360ZM480-80q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l58-58 56 56-56 58q36 47 57 104t21 120q0 74-28 139.5T735-186q-49 49-114.5 77.5T480-80Zm0-80q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Zm0-360h226q-18-51-56-89.5T564-665l-84 145Zm-69 40 113-196q-51-10-102.5 3T327-625l84 145Zm-167 80h167L298-596q-35 39-49 90.5T244-400Zm152 185 84-145H254q17 50 55.5 89t86.5 56Zm40 11q57 11 109-4.5t88-46.5l-84-145-113 196Zm226-80q36-41 49.5-91.5T716-480H549l113 196Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedFilled.displayName = 'OnesyIconMaterialShutterSpeedFilled';

export default IconMaterialShutterSpeedFilled;
