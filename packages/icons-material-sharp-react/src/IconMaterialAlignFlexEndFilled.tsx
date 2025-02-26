import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndFilled'

      short_name='AlignFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h800v80H80Zm340-160v-560h120v560H420Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndFilled.displayName = 'OnesyIconMaterialAlignFlexEndFilled';

export default IconMaterialAlignFlexEndFilled;
