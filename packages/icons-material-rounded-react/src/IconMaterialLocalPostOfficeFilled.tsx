import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeFilled'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-320q0-17 11.5-28.5T120-480h120v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v520q0 17-11.5 28.5T840-80q-17 0-28.5-11.5T800-120v-80H640v80q0 17-11.5 28.5T600-80H120Zm240-206-155-88q-15-9-30 0t-15 26q0 8 4 15.5t11 11.5l165 94q9 5 20 5t20-5l165-94q7-4 11-11.5t4-15.5q0-17-15-26t-30 0l-155 88Zm280 6h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h280q17 0 28.5 11.5T640-440v160ZM440-560q-17 0-28.5-11.5T400-600q0-17 11.5-28.5T440-640h240q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560H440Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeFilled.displayName = 'OnesyIconMaterialLocalPostOfficeFilled';

export default IconMaterialLocalPostOfficeFilled;
