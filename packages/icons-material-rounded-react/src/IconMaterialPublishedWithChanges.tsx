import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishedWithChanges = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChanges'

      short_name='PublishedWithChanges'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-729q-55 44-87.5 108.5T160-480q0 115 70 200.5T407-169q15 4 24 17.5t9 29.5q0 16-11 27t-25 8q-140-26-232-135.5T80-480q0-91 36.5-168T216-780h-56q-17 0-28.5-11.5T120-820q0-17 11.5-28.5T160-860h160q17 0 28.5 11.5T360-820v160q0 17-11.5 28.5T320-620q-17 0-28.5-11.5T280-660v-69Zm143 320 199-199q12-12 28-11.5t28 12.5q11 12 11.5 28T678-551L451-324q-12 12-28 12t-28-12L282-438q-11-11-11.5-27.5T282-494q11-11 28-11t28 11l85 85Zm321 229h56q17 0 28.5 11.5T840-140q0 17-11.5 28.5T800-100H640q-17 0-28.5-11.5T600-140v-160q0-17 11.5-28.5T640-340q17 0 28.5 11.5T680-300v69q55-45 87.5-109T800-480q0-115-70-200.5T553-791q-15-4-24-17.5t-9-29.5q0-16 11-27t25-8q140 26 232 135.5T880-480q0 91-36.5 168T744-180Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChanges.displayName = 'OnesyIconMaterialPublishedWithChanges';

export default IconMaterialPublishedWithChanges;
