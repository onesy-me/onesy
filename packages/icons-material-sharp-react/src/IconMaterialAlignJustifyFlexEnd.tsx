import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEnd'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80v-800h80v800h-80ZM560-280v-400h120v400H560Zm-240 0v-400h120v400H320Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEnd.displayName = 'OnesyIconMaterialAlignJustifyFlexEnd';

export default IconMaterialAlignJustifyFlexEnd;
