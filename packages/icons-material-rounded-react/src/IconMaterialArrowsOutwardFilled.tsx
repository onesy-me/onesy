import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsOutwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsOutwardFilled'

      short_name='ArrowsOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M727-440H520v-80h207l-75-75q-11-12-11.5-28.5T652-652q12-12 28-12t28 12l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-308q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l75-75Zm-494 0 75 75q11 12 11.5 28.5T308-308q-12 12-28 12t-28-12L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l144-144q12-12 28-12t28 12q12 12 12 28.5T308-595l-75 75h207v80H233Z"/>
    </Icon>
  );
});

IconMaterialArrowsOutwardFilled.displayName = 'OnesyIconMaterialArrowsOutwardFilled';

export default IconMaterialArrowsOutwardFilled;
