import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diamond'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="8.88,5 6.24,5 4.74,8 7.38,8"/><polygon opacity=".3" points="19.26,8 17.76,5 15.12,5 16.62,8"/><polygon opacity=".3" points="11,16.68 11,10 5.44,10"/><polygon opacity=".3" points="13,16.68 18.56,10 13,10"/><polygon opacity=".3" points="12.88,5 11.12,5 9.62,8 14.38,8"/><path d="M19,3H5L2,9l10,12L22,9L19,3z M17.76,5l1.5,3h-2.65l-1.5-3H17.76z M6.24,5h2.65l-1.5,3H4.74L6.24,5z M11,16.68L5.44,10H11 V16.68z M9.62,8l1.5-3h1.76l1.5,3H9.62z M13,16.68V10h5.56L13,16.68z"/></g></g>
    </Icon>
  );
});

IconMaterialDiamond.displayName = 'OnesyIconMaterialDiamond';

export default IconMaterialDiamond;
