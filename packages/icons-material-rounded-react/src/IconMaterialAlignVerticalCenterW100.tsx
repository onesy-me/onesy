import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterW100'

      short_name='AlignVerticalCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-172q-14 0-24.5-10.5T311-207v-259H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h165v-259q0-14 10.5-24.5T346-788q14 0 24.5 10.5T381-753v259h198v-139q0-14 10.5-24.5T614-668q14 0 24.5 10.5T649-633v139h165q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H649v139q0 14-10.5 24.5T614-292q-14 0-24.5-10.5T579-327v-139H381v259q0 14-10.5 24.5T346-172Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterW100.displayName = 'OnesyIconMaterialAlignVerticalCenterW100';

export default IconMaterialAlignVerticalCenterW100;
