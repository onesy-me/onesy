import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Travel'

      short_name='Travel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z"/>
    </Icon>
  );
});

IconMaterialTravel.displayName = 'OnesyIconMaterialTravel';

export default IconMaterialTravel;
