import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightFilled'

      short_name='MoveSelectionRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-33 0-56.5-23.5T400-320v-320q0-33 23.5-56.5T480-720h320q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H480ZM280-640q-17 0-28.5-11.5T240-680q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640Zm-160 0q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680q0 17-11.5 28.5T120-640Zm0 200q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480q0 17-11.5 28.5T120-440Zm0 200q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280q0 17-11.5 28.5T120-240Zm160 0q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320q17 0 28.5 11.5T320-280q0 17-11.5 28.5T280-240Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightFilled.displayName = 'OnesyIconMaterialMoveSelectionRightFilled';

export default IconMaterialMoveSelectionRightFilled;
