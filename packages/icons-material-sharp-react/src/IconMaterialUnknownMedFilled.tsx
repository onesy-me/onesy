import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknownMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedFilled'

      short_name='UnknownMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-440v-120h360v120H80Zm440 0v-120h360v120H520Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedFilled.displayName = 'OnesyIconMaterialUnknownMedFilled';

export default IconMaterialUnknownMedFilled;
