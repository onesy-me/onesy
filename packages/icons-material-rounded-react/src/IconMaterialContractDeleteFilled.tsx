import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteFilled'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-183-57 56q-11 11-27.5 11.5T647-127q-11-11-11-28t11-28l56-57-56-57q-11-11-11.5-27.5T647-353q11-11 28-11t28 11l57 56 57-56q11-11 27.5-11.5T873-353q11 11 11 28t-11 28l-56 57 56 57q11 11 11.5 27.5T873-127q-11 11-28 11t-28-11l-57-56ZM400-600q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400Zm0 120q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400ZM240-80q-50 0-85-35t-35-85v-40q0-33 23.5-56.5T200-320h40v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v320q0 17-11.5 28.5T800-440q-17 0-28.5-11.5T760-480v-320H320v480h166q18 0 29.5 14t7.5 32q-2 8-2.5 17t-.5 17q0 29 7 57.5t21 54.5q9 17 1 32.5T524-80H240Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteFilled.displayName = 'OnesyIconMaterialContractDeleteFilled';

export default IconMaterialContractDeleteFilled;
