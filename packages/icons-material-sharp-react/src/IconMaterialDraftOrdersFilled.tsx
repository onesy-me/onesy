import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftOrdersFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftOrdersFilled'

      short_name='DraftOrders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM320-320v-123l263-262 123 122-263 263H320Zm263-224 37-39-37-37-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialDraftOrdersFilled.displayName = 'OnesyIconMaterialDraftOrdersFilled';

export default IconMaterialDraftOrdersFilled;
