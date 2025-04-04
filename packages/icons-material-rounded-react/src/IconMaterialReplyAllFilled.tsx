import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllFilled'

      short_name='ReplyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m193-520 156 156q12 12 11.5 28T348-308q-12 11-28 11.5T292-308L108-492q-6-6-8.5-13T97-520q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11t28.5 11q12 12 12 28.5T348-675L193-520Zm240 40 116 116q12 12 11.5 28T548-308q-12 11-28 11.5T492-308L308-492q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11t28.5 11q12 12 12 28.5T548-675L433-560h247q83 0 141.5 58.5T880-360v120q0 17-11.5 28.5T840-200q-17 0-28.5-11.5T800-240v-120q0-50-35-85t-85-35H433Z"/>
    </Icon>
  );
});

IconMaterialReplyAllFilled.displayName = 'OnesyIconMaterialReplyAllFilled';

export default IconMaterialReplyAllFilled;
