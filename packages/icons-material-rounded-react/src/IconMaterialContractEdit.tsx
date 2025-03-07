import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEdit'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-680h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680Zm0 120h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560Zm80 400H200h280ZM240-80q-50 0-85-35t-35-85v-80q0-17 11.5-28.5T160-320h80v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v240q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-240H320v480h120q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240H200v40q0 17 11.5 28.5T240-160h200q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H240Zm320-40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm300-223-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialContractEdit.displayName = 'OnesyIconMaterialContractEdit';

export default IconMaterialContractEdit;
