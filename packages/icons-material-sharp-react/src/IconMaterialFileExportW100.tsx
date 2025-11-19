import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileExportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileExportW100'

      short_name='FileExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM223-102l-19-20 144-144H220v-28h175v175h-28v-127L223-102Zm272-30v-28h225v-492H572v-148H240v406h-28v-434h374l162 162v534H495Z"/>
    </Icon>
  );
});

IconMaterialFileExportW100.displayName = 'OnesyIconMaterialFileExportW100';

export default IconMaterialFileExportW100;
