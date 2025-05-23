import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataTableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableFilled'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640h720v-100q0-25-17.5-42.5T780-800H180q-25 0-42.5 17.5T120-740v100Zm0 240h720v-160H120v160Zm60 240h600q25 0 42.5-17.5T840-220v-100H120v100q0 25 17.5 42.5T180-160Zm20-520q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760q17 0 28.5 11.5T240-720q0 17-11.5 28.5T200-680Zm0 240q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520q17 0 28.5 11.5T240-480q0 17-11.5 28.5T200-440Zm0 240q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280q17 0 28.5 11.5T240-240q0 17-11.5 28.5T200-200Z"/>
    </Icon>
  );
});

IconMaterialDataTableFilled.displayName = 'OnesyIconMaterialDataTableFilled';

export default IconMaterialDataTableFilled;
