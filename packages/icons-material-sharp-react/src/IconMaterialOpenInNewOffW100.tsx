import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffW100'

      short_name='OpenInNewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m794-126-46-46H172v-576l-46-46 20-20 668 668-20 20Zm-74-74L470-450l-80 80-20-20 80-80-250-250v520h520ZM312-760l-28-28h156v28H312Zm234 234-20-20 214-214H560v-28h228v228h-28v-180L546-526Zm242 242-28-28v-128h28v156Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffW100.displayName = 'OnesyIconMaterialOpenInNewOffW100';

export default IconMaterialOpenInNewOffW100;
