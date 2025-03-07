import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmbShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareW100'

      short_name='SmbShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M449-456h185q17.19 0 29.1-11.86 11.9-11.87 11.9-29 0-17.14-11.9-29.64Q651.19-539 634-539h-28l-4-25q-3-25-22.29-42.5T533.9-624q-20.9 0-36.9 11t-25 29l-8 16-19 1q-22 2-37 17t-15 38q0 23 16.5 39.5T449-456ZM92-184v-428h28v400h630v28H92Zm108-108v-536h280l40 40h348v496H200Zm28-28h612v-440H508l-40-40H228v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSmbShareW100.displayName = 'OnesyIconMaterialSmbShareW100';

export default IconMaterialSmbShareW100;
