import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownFilled'

      short_name='MoveSelectionDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-33 0-56.5-23.5T240-160v-320q0-33 23.5-56.5T320-560h320q33 0 56.5 23.5T720-480v320q0 33-23.5 56.5T640-80H320Zm360-560q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640Zm0-160q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840q0 17-11.5 28.5T680-800Zm-200 0q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800Zm-200 0q-17 0-28.5-11.5T240-840q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800Zm0 160q-17 0-28.5-11.5T240-680q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownFilled.displayName = 'OnesyIconMaterialMoveSelectionDownFilled';

export default IconMaterialMoveSelectionDownFilled;
