import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10W100'

      short_name='Timer10'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M499-274h212v-412H499v412Zm-28 28v-468h268v468H471Zm-148 0v-440H222v-28h129v468h-28Z"/>
    </Icon>
  );
});

IconMaterialTimer10W100.displayName = 'OnesyIconMaterialTimer10W100';

export default IconMaterialTimer10W100;
