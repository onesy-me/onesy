import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposurePlus1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1W100'

      short_name='ExposurePlus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-312v-120H146v-28h120v-120h28v120h120v28H294v120h-28Zm394 58v-414l-104 72-16-22 126-88h22v452h-28Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1W100.displayName = 'OnesyIconMaterialExposurePlus1W100';

export default IconMaterialExposurePlus1W100;
