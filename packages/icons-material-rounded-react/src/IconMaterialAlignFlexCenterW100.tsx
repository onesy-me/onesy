import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenterW100'

      short_name='AlignFlexCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M489.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-300H176q-12.75 0-21.37-8.63Q146-463.25 146-476v-8q0-12.75 8.63-21.38Q163.25-514 176-514h300v-300q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v300h280q12.75 0 21.38 8.62Q814-496.75 814-484v8q0 12.75-8.62 21.37Q796.75-446 784-446H504v300q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenterW100.displayName = 'OnesyIconMaterialAlignFlexCenterW100';

export default IconMaterialAlignFlexCenterW100;
