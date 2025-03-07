import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllW100'

      short_name='ReplyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m172-520 174 174q4 4 4.5 9.5T346-326q-5 5-10 5t-10-5L153-499q-5-5-7-10t-2-11q0-6 2-11t7-10l173-173q4-4 9.5-4.5T346-714q5 5 5 10t-5 10L172-520Zm168 14 160 160q4 4 4.5 9.5T500-326q-5 5-10 5t-10-5L307-499q-5-5-7-10t-2-11q0-6 2-11t7-10l173-173q4-4 9.5-4.5T500-714q5 5 5 10t-5 10L340-534h314q72 0 123 51t51 123v94q0 6-4 10t-10 4q-6 0-10-4t-4-10v-94q0-60-43-103t-103-43H340Z"/>
    </Icon>
  );
});

IconMaterialReplyAllW100.displayName = 'OnesyIconMaterialReplyAllW100';

export default IconMaterialReplyAllW100;
