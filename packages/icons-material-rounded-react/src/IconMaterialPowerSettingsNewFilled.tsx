import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerSettingsNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewFilled'

      short_name='PowerSettingsNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480v-320q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v320q0 17-11.5 28.5T480-440q-17 0-28.5-11.5T440-480Zm40 360q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-69 25-131t70-112q12-14 29.5-14.5T275-725q11 11 10 27.5T273-668q-35 38-54 86t-19 102q0 116 82 198t198 82q117 0 198.5-82T760-480q0-54-18.5-102T688-668q-12-13-13-29.5t10-27.5q13-13 31-12.5t30 14.5q45 50 69.5 112T840-480q0 74-28.5 139.5t-77 114.5q-48.5 49-114 77.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewFilled.displayName = 'OnesyIconMaterialPowerSettingsNewFilled';

export default IconMaterialPowerSettingsNewFilled;
