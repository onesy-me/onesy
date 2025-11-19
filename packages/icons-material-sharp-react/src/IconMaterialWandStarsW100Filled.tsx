import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWandStarsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WandStarsW100Filled'

      short_name='WandStars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-172-20-20 312-312-165-40 158-98-14-186 142 120 172-70-69 172 120 142-186-13-98 158-41-165-311 312Zm23-530-43-43 43-43 43 43-43 43Zm530 530-43-43 43-43 43 43-43 43Z"/>
    </Icon>
  );
});

IconMaterialWandStarsW100Filled.displayName = 'OnesyIconMaterialWandStarsW100Filled';

export default IconMaterialWandStarsW100Filled;
