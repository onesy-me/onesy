import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Escalator'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M19,5L19,5l0,14H5V5H19 M17,6h-3.3l-5,9H7c-0.83,0-1.5,0.67-1.5,1.5S6.17,18,7,18h3.3l5-9H17 c0.83,0,1.5-0.67,1.5-1.5S17.83,6,17,6z" opacity=".3"/><path d="M19,5L19,5l0,14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2l0-14C21,3.9,20.1,3,19,3L19,3z M17,6h-3.3l-5,9H7c-0.83,0-1.5,0.67-1.5,1.5S6.17,18,7,18h3.3l5-9H17c0.83,0,1.5-0.67,1.5-1.5S17.83,6,17,6z"/></g>
    </Icon>
  );
});

IconMaterialEscalator.displayName = 'OnesyIconMaterialEscalator';

export default IconMaterialEscalator;
