import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsNarrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowFilled'

      short_name='TableRowsNarrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-340q-17 0-28.5-11.5T120-380v-20q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400v20q0 17-11.5 28.5T800-340H160Zm0-180q-17 0-28.5-11.5T120-560v-20q0-17 11.5-28.5T160-620h640q17 0 28.5 11.5T840-580v20q0 17-11.5 28.5T800-520H160Zm0-180q-17 0-28.5-11.5T120-740v-20q0-17 11.5-28.5T160-800h640q17 0 28.5 11.5T840-760v20q0 17-11.5 28.5T800-700H160Zm0 540q-17 0-28.5-11.5T120-200v-20q0-17 11.5-28.5T160-260h640q17 0 28.5 11.5T840-220v20q0 17-11.5 28.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowFilled.displayName = 'OnesyIconMaterialTableRowsNarrowFilled';

export default IconMaterialTableRowsNarrowFilled;
