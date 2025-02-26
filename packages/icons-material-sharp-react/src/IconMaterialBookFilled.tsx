import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookFilled'

      short_name='Book'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm280-440 100-60 100 60v-280H440v280Z"/>
    </Icon>
  );
});

IconMaterialBookFilled.displayName = 'OnesyIconMaterialBookFilled';

export default IconMaterialBookFilled;
