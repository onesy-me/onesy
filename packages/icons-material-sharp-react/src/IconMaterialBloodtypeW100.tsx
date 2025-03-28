import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodtypeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeW100'

      short_name='Bloodtype'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-132Q365-132 288.5-211.1T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 117.8-76.68 196.9-76.69 79.1-191.5 79.1Zm.18-28q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm-94-106h188v-28H386v28Zm80-120h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm14-86Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100.displayName = 'OnesyIconMaterialBloodtypeW100';

export default IconMaterialBloodtypeW100;
