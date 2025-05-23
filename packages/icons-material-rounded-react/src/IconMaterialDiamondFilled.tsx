import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondFilled'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-630h224L486-840h-12L368-630Zm82 474v-414H105l345 414Zm60 0 345-414H510v414Zm148-474h207l-83-166q-11-20-29.5-32T711-840H554l104 210Zm-563 0h207l104-210H249q-23 0-41.5 12T178-796L95-630Z"/>
    </Icon>
  );
});

IconMaterialDiamondFilled.displayName = 'OnesyIconMaterialDiamondFilled';

export default IconMaterialDiamondFilled;
