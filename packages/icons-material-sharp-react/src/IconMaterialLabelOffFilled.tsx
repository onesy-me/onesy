import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffFilled'

      short_name='LabelOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M738-336 314-760h328l198 280-102 144Zm54 280L648-200H120v-528l-64-64 56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialLabelOffFilled.displayName = 'OnesyIconMaterialLabelOffFilled';

export default IconMaterialLabelOffFilled;
