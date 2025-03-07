import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchemaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-86v-148h80v-172h-80v-148h80v-172h-80v-148h188v148h-80v172h80v60h212v-60h188v148H606v-60H394v60h-80v172h80v148H206Zm28-28h132v-92H234v92Zm0-320h132v-92H234v92Zm400 0h132v-92H634v92ZM234-754h132v-92H234v92Zm66-46Zm0 320Zm400 0ZM300-160Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100.displayName = 'OnesyIconMaterialSchemaW100';

export default IconMaterialSchemaW100;
