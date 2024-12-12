import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSheetsRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100'

      short_name='SheetsRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-462v-376h536v376H212Zm28-202h226v-146H240v146Zm254 0h226v-146H494v146ZM240-490h226v-146H240v146Zm254 0h226v-146H494v146ZM280-147 157-270l123-123 20 19-89 90h563v28H211l89 90-20 19Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100.displayName = 'OnesyIconMaterialSheetsRtlW100';

export default IconMaterialSheetsRtlW100;
