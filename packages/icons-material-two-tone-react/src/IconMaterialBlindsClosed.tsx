import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsClosed'

      short_name='BlindsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="8" x="6" y="5"/><rect height="2" opacity=".3" width="8" x="6" y="9"/><rect height="2" opacity=".3" width="2" x="16" y="17"/><rect height="2" opacity=".3" width="8" x="6" y="13"/><rect height="2" opacity=".3" width="8" x="6" y="17"/><rect height="2" opacity=".3" width="2" x="16" y="13"/><rect height="2" opacity=".3" width="2" x="16" y="5"/><rect height="2" opacity=".3" width="2" x="16" y="9"/><path d="M20,19V3H4v16H2v2h11.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M14,19H6v-2h8V19z M14,15H6v-2h8V15z M14,11H6V9h8V11z M14,7H6V5h8V7z M18,19h-2v-2h2V19z M18,15h-2v-2h2V15z M18,11h-2V9h2V11z M18,7h-2V5h2V7z"/></g></g>
    </Icon>
  );
});

IconMaterialBlindsClosed.displayName = 'OnesyIconMaterialBlindsClosed';

export default IconMaterialBlindsClosed;
