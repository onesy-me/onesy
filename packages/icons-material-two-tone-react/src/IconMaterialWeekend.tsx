import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeekend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Weekend'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11c-.55 0-1 .45-1 1v4H4v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zM6 14h12v-2c0-.88.39-1.67 1-2.22V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22v2z" opacity=".3"/><path d="M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z"/>
    </Icon>
  );
});

IconMaterialWeekend.displayName = 'OnesyIconMaterialWeekend';

export default IconMaterialWeekend;
