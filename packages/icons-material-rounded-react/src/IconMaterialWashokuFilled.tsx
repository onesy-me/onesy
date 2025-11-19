import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashokuFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashokuFilled'

      short_name='Washoku'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M338-120q-26 0-47-15t-29-40l-43-129q-36-20-61-53t-36-75l-13-53q-7-29 11-52t47-23h626q29 0 47 23t11 52l-13 53q-11 42-36 75t-61 53l-43 129q-8 25-29 40t-47 15H338Zm462-520H160q0-50 34.5-85t83.5-35q8 0 17 1.5t17 3.5q17-38 51.5-61.5T440-840q48 0 84.5 28.5T574-737q19-20 44-31.5t53-11.5q54 0 91.5 38t37.5 92v10Z"/>
    </Icon>
  );
});

IconMaterialWashokuFilled.displayName = 'OnesyIconMaterialWashokuFilled';

export default IconMaterialWashokuFilled;
