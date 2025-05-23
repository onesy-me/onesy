import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggage'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-475-80-80v-5q0-17 11.5-28.5T560-600q17 0 28.5 11.5T600-560v85ZM320-80q-17 0-28.5-11.5T280-120q-33 0-56.5-23.5T200-200v-440q0-24 12.5-44.5T248-713l73 73h-41v440h400v-80l80 80q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80Zm40-464 80 80v184q0 17-11.5 28.5T400-240q-17 0-28.5-11.5T360-280v-264Zm160 160 80 80v24q0 17-11.5 28.5T560-240q-17 0-28.5-11.5T520-280v-104ZM848-57q-12 12-28.5 12T791-57L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28ZM464-384Zm136-336h80q33 0 56.5 23.5T760-640v240q0 20-12.5 30T720-360q-15 0-27.5-10.5T680-401v-239H440q-33 0-56.5-23.5T360-720v-80q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80Zm-160 0h80v-80h-80v80Zm118 202Z"/>
    </Icon>
  );
});

IconMaterialNoLuggage.displayName = 'OnesyIconMaterialNoLuggage';

export default IconMaterialNoLuggage;
