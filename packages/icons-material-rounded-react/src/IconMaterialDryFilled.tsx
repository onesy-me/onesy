import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryFilled'

      short_name='Dry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l306-199q11-7 23-5.5t21 10.5q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H480v60h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480v60h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480v60h240q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm329-678q-24-32-36-61t-12-63q0-16 11-27t27-11q16 0 26.5 11t11.5 27q2 29 14 48t30 45q20 27 29 53t9 57q0 17-11 28t-28 11q-16 0-27-11.5T602-679q-1-22-8.5-39.5T569-758Zm160 0q-24-32-35.5-61T682-882q0-16 11-27t27-11q15 0 25.5 11t11.5 27q2 29 14 48t30 45q20 27 29 53t9 57q0 16-11 27.5T801-640q-16 0-27-11t-11-27q-1-23-9-40.5T729-758Z"/>
    </Icon>
  );
});

IconMaterialDryFilled.displayName = 'OnesyIconMaterialDryFilled';

export default IconMaterialDryFilled;
