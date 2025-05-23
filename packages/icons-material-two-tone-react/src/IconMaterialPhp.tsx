import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Php'

      short_name='Php'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M13,9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9z M8,10.5v1C8,12.3,7.3,13,6.5,13h-2v2H3V9h3.5C7.3,9,8,9.7,8,10.5z M6.5,10.5h-2 v1h2V10.5z M21.5,10.5v1c0,0.8-0.7,1.5-1.5,1.5h-2v2h-1.5V9H20C20.8,9,21.5,9.7,21.5,10.5z M20,10.5h-2v1h2V10.5z"/></g>
    </Icon>
  );
});

IconMaterialPhp.displayName = 'OnesyIconMaterialPhp';

export default IconMaterialPhp;
