import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnarchiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveFilled'

      short_name='Unarchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560 320-400l56 56 64-64v168h80v-168l64 64 56-56-160-160ZM120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveFilled.displayName = 'OnesyIconMaterialUnarchiveFilled';

export default IconMaterialUnarchiveFilled;
