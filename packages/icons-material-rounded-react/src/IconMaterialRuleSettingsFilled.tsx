import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleSettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleSettingsFilled'

      short_name='RuleSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m230-240-16-14q-52-46-73-105t-21-119q0-94 47.5-170.5T296-766q14-8 30-1t21 23q5 15-.5 30T327-691q-58 32-92.5 88.5T200-478q0 45 17 87.5t53 78.5l10 10v-58q0-17 11.5-28.5T320-400q17 0 28.5 11.5T360-360v160q0 17-11.5 28.5T320-160H160q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h70Zm450-418v58q0 17-11.5 28.5T640-560q-17 0-28.5-11.5T600-600v-160q0-17 11.5-28.5T640-800h160q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720h-70l16 14q41 42 63 89t28 97h-81q-5-35-21.5-67T690-648l-10-10Zm16 618q-8 0-12.5-4.5T677-56l-9-44q-12-5-22.5-10.5T624-124l-43 13q-7 2-13-.5t-10-8.5l-24-40q-4-6-2-13t7-12l33-29q-2-14-2-26t2-26l-33-29q-5-5-7-12t2-13l24-40q4-6 10-8.5t13-.5l43 13q11-8 21.5-13.5T668-380l9-44q2-7 6.5-11.5T696-440h48q8 0 12.5 4.5T763-424l9 44q12 5 22.5 11t21.5 15l42-15q7-2 13.5.5T882-360l24 42q4 6 2.5 13t-6.5 12l-34 29q2 12 2 25t-2 25l33 29q5 5 7 12t-2 13l-24 40q-4 6-10 8.5t-13 .5l-43-13q-11 8-21.5 13.5T772-100l-9 44q-2 7-6.5 11.5T744-40h-48Zm24-120q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160Z"/>
    </Icon>
  );
});

IconMaterialRuleSettingsFilled.displayName = 'OnesyIconMaterialRuleSettingsFilled';

export default IconMaterialRuleSettingsFilled;
