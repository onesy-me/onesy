import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceAroundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceAroundW100'

      short_name='AlignJustifySpaceAround'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-132v-696h28v696h-28Zm-668 0v-696h28v696h-28Zm494-174v-348h68v348h-68Zm-360 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceAroundW100.displayName = 'OnesyIconMaterialAlignJustifySpaceAroundW100';

export default IconMaterialAlignJustifySpaceAroundW100;
