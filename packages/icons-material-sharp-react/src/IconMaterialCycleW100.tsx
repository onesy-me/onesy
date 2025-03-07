import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCycleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycleW100'

      short_name='Cycle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M385-147q-109-31-180.5-122.5T133-481q0-33 6-65.5t19-63.5l-99 57-13-24 145-84 84 145-24 15-62-107q-14 30-20.5 62.5T162-480q0 111 67.5 196T400-172l-15 25Zm220-506v-28h122q-45-57-110-87.5T480-799q-66 0-123 24.5T257-707l-15-26q47-44 107.5-69T479-827q78 0 147 32t119 92v-118h28v168H605Zm15 595-145-85 84-144 24 14-64 109q119-15 199-105t80-211q0-24-3.5-47.5T784-573h30q6 22 9 45t3 47q0 129-82.5 225.5T535-139l99 57-14 24Z"/>
    </Icon>
  );
});

IconMaterialCycleW100.displayName = 'OnesyIconMaterialCycleW100';

export default IconMaterialCycleW100;
