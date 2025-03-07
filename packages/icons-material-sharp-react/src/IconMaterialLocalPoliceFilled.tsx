import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPoliceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceFilled'

      short_name='LocalPolice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m368-336 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceFilled.displayName = 'OnesyIconMaterialLocalPoliceFilled';

export default IconMaterialLocalPoliceFilled;
