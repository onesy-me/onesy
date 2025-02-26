import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretch'

      short_name='AlignJustifyStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80v-800h80v800h-80ZM80-80v-800h80v800H80Zm440-480v-120h200v120H520Zm-280 0v-120h200v120H240Zm280 280v-120h200v120H520Zm-280 0v-120h200v120H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretch.displayName = 'OnesyIconMaterialAlignJustifyStretch';

export default IconMaterialAlignJustifyStretch;
