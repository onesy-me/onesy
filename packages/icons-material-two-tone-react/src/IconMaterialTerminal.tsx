import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTerminal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Terminal'

      short_name='Terminal'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,18h16V8H4V18z M12,15h6v2h-6V15z M6.09,10.41L7.5,9l4,4l-4,4l-1.41-1.41L8.67,13L6.09,10.41z" opacity=".3"/><rect height="2" width="6" x="12" y="15"/><path d="M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.11,4,20,4z M20,18H4V8h16V18z"/><polygon points="7.5,17 11.5,13 7.5,9 6.09,10.41 8.67,13 6.09,15.59"/></g></g>
    </Icon>
  );
});

IconMaterialTerminal.displayName = 'OnesyIconMaterialTerminal';

export default IconMaterialTerminal;
