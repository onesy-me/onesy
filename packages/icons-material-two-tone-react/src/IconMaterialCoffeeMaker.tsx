import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeMaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMaker'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M13,19c1.65,0,3-1.35,3-3v-3h-6v3C10,17.65,11.35,19,13,19z" opacity=".3"/><path d="M9,7h8c0.55,0,1-0.45,1-1V4h2V2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h14v-2h-4.03C17.2,19.09,18,17.64,18,16v-5H8v5 c0,1.64,0.81,3.09,2.03,4H6V4h2v2C8,6.55,8.45,7,9,7z M10,16v-3h6v3c0,1.65-1.35,3-3,3S10,17.65,10,16z"/></g><circle cx="13" cy="9" r="1"/></g></g>
    </Icon>
  );
});

IconMaterialCoffeeMaker.displayName = 'OnesyIconMaterialCoffeeMaker';

export default IconMaterialCoffeeMaker;
