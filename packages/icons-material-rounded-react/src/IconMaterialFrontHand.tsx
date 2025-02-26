import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHand'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-920q17 0 28.5 11.5T560-880v360q0 17-11.5 28.5T520-480q-17 0-28.5-11.5T480-520v-360q0-17 11.5-28.5T520-920Zm-160 40q17 0 28.5 11.5T400-840v320q0 17-11.5 28.5T360-480q-17 0-28.5-11.5T320-520v-320q0-17 11.5-28.5T360-880ZM500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v380q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v120q0 17-11.5 28.5T680-320h-80q-33 0-56.5 23.5T520-240v40q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-40q0-66 47-113t113-47h40v-400q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v207q10-3 19.5-5t20.5-2h40q17 0 28.5 11.5T840-560v180q0 142-99 241T500-40Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialFrontHand.displayName = 'OnesyIconMaterialFrontHand';

export default IconMaterialFrontHand;
