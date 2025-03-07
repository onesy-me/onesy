import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffW100'

      short_name='PillOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-413-19-19 80-80q20-20 31-47t11-56q0-60-42.5-102.5T615-760q-29 0-56 11t-47 31l-80 80-19-19 79-80q25-24 56.54-37.5t66.15-13.5q72.31 0 122.81 50.46T788-614.67q0 34.67-13.5 66.17T737-492l-80 79ZM345-200q29 0 56-11t47-31l113-113-206-206-113 113q-20 20-31 47t-11 56q0 60 42.5 102.5T345-200Zm443 72L580-336 468-223q-24 24-55.96 37.5T345-172q-72.28 0-122.64-50.46T172-345.33Q172-380 185.5-412t37.5-56l113-112-204-204 20-20 656 656-20 20ZM458-458Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialPillOffW100.displayName = 'OnesyIconMaterialPillOffW100';

export default IconMaterialPillOffW100;
