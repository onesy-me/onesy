import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSheetsRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlFilled'

      short_name='SheetsRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440v-480h640v480H160Zm80-280h200v-120H240v120Zm280 0h200v-120H520v120ZM240-520h200v-120H240v120Zm280 0h200v-120H520v120ZM280-80 120-240l160-160 56 56-63 64h527v80H273l63 64-56 56Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlFilled.displayName = 'OnesyIconMaterialSheetsRtlFilled';

export default IconMaterialSheetsRtlFilled;
