import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrow'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/>
    </Icon>
  );
});

IconMaterialPlayArrow.displayName = 'OnesyIconMaterialPlayArrow';

export default IconMaterialPlayArrow;
