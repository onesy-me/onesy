import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyStretchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretchW100Filled'

      short_name='AlignJustifyStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-132v-696h28v696h-28Zm-668 0v-696h28v696h-28Zm362-454v-68h200v68H494Zm-228 0v-68h200v68H266Zm228 280v-68h200v68H494Zm-228 0v-68h200v68H266Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretchW100Filled.displayName = 'OnesyIconMaterialAlignJustifyStretchW100Filled';

export default IconMaterialAlignJustifyStretchW100Filled;
