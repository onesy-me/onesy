import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMilitaryTech = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTech'

      short_name='MilitaryTech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-880h400v362L500-412l28 92h152l-124 88 48 152-124-94-124 94 48-152-124-88h152l28-92-180-106v-362Zm80 80v234l80 48v-282h-80Zm240 0h-80v282l80-48v-234ZM480-647Zm-40-12Zm80 0Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTech.displayName = 'OnesyIconMaterialMilitaryTech';

export default IconMaterialMilitaryTech;
