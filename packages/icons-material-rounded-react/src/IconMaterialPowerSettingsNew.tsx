import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerSettingsNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNew'

      short_name='PowerSettingsNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480v-320q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v320q0 17-11.5 28.5T480-440q-17 0-28.5-11.5T440-480Zm40 360q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-69 25.5-132.5T217-726q11-12 28-12t29 12q11 11 10 27.5T272-669q-34 38-53 86.5T200-480q0 116 82 198t198 82q117 0 198.5-82T760-480q0-54-19-103.5T687-671q-11-12-11.5-28t10.5-27q12-12 29-12t28 12q47 50 72 113.5T840-480q0 74-28.5 139.5t-77 114.5q-48.5 49-114 77.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNew.displayName = 'OnesyIconMaterialPowerSettingsNew';

export default IconMaterialPowerSettingsNew;
