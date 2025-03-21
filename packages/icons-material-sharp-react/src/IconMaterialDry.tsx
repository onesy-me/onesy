import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dry'

      short_name='Dry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M599-640q5-41-.5-64.5T569-758q-31-40-41.5-77t-3.5-85h76q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-77Zm161 0q5-41-1-64.5T729-758q-31-40-41-77t-3-85h75q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-76Zm0 560H80v-441l385-250 65 65-78 126h348v80H308l77-124-225 146v318h600v80ZM480-360v-80h400v80H480Zm0 140v-80h360v80H480ZM320-342Z"/>
    </Icon>
  );
});

IconMaterialDry.displayName = 'OnesyIconMaterialDry';

export default IconMaterialDry;
