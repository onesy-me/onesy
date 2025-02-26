import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSsidChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChartW100'

      short_name='SsidChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-155 235-394l-63 45v-34l65-47 246 239 178-143h127v28H671L482-155Zm1-359L308-689l-136 99v-34l138-102 175 175 303-219v35L483-514Z"/>
    </Icon>
  );
});

IconMaterialSsidChartW100.displayName = 'OnesyIconMaterialSsidChartW100';

export default IconMaterialSsidChartW100;
