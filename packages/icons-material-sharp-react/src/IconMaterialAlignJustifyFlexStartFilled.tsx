import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStartFilled'

      short_name='AlignJustifyFlexStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h80v800H80Zm440-200v-400h120v400H520Zm-240 0v-400h120v400H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStartFilled.displayName = 'OnesyIconMaterialAlignJustifyFlexStartFilled';

export default IconMaterialAlignJustifyFlexStartFilled;
