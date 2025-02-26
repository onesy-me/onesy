import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchemaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100Filled'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-86v-148h80v-172h-80v-148h80v-172h-80v-148h188v148h-80v172h80v60h212v-60h188v148H606v-60H394v60h-80v172h80v148H206Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100Filled.displayName = 'OnesyIconMaterialSchemaW100Filled';

export default IconMaterialSchemaW100Filled;
