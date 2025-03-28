import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventList'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160Zm-520-40q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h280q17 0 28.5 11.5T440-280q0 17-11.5 28.5T400-240H120Zm520-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160Zm-520-40q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h280q17 0 28.5 11.5T440-680q0 17-11.5 28.5T400-640H120Zm600 360Zm0-400Z"/>
    </Icon>
  );
});

IconMaterialEventList.displayName = 'OnesyIconMaterialEventList';

export default IconMaterialEventList;
