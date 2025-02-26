import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyFilled'

      short_name='Reply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m273-480 116 116q12 12 11.5 28T388-308q-12 11-28 11.5T332-308L148-492q-12-12-12-28t12-28l184-184q11-11 27.5-11t28.5 11q12 12 12 28.5T388-675L273-560h367q83 0 141.5 58.5T840-360v120q0 17-11.5 28.5T800-200q-17 0-28.5-11.5T760-240v-120q0-50-35-85t-85-35H273Z"/>
    </Icon>
  );
});

IconMaterialReplyFilled.displayName = 'OnesyIconMaterialReplyFilled';

export default IconMaterialReplyFilled;
