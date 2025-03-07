import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAdd'

      short_name='DomainAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,9v2h2v2h-2v2h2v2h-2v2h4v-4h4V9H12z M18,13h-2v-2h2V13z" opacity=".3"/><path d="M12,7V3H2v18h14v-2h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V7H12z M6,19H4v-2h2V19z M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2 V7z M10,19H8v-2h2V19z M10,15H8v-2h2V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M24,19v2h-2v2h-2v-2h-2v-2h2v-2h2v2H24z M18,11h-2v2h2 V11z M18,15h-2v2h2V15z"/></g>
    </Icon>
  );
});

IconMaterialDomainAdd.displayName = 'OnesyIconMaterialDomainAdd';

export default IconMaterialDomainAdd;
