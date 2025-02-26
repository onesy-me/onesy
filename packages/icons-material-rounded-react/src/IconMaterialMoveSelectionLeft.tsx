import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeft'

      short_name='MoveSelectionLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h320q33 0 56.5 23.5T560-640v320q0 33-23.5 56.5T480-240H160Zm320-80v-320H160v320h320Zm200 80q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240Zm160 0q-17 0-28.5-11.5T800-280q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240Zm0-200q-17 0-28.5-11.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440Zm0-200q-17 0-28.5-11.5T800-680q0-17 11.5-28.5T840-720q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640Zm-160 0q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM320-480Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeft.displayName = 'OnesyIconMaterialMoveSelectionLeft';

export default IconMaterialMoveSelectionLeft;
