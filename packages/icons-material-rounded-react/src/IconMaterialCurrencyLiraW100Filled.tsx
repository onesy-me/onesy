import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyLiraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLiraW100Filled'

      short_name='CurrencyLira'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-202v-171l-98 61q-8 5-15 .73t-7-12.81q0-3.92 1.84-7.05T273-336l113-71v-155l-99 62q-7 5-14 .5t-7-12.78q0-3.79 1.67-6.89 1.66-3.11 4.33-4.83l114-72v-178q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v161l139-87q7-5 14-.5t7 12.78q0 3.79-1.84 6.89-1.84 3.11-5.16 4.83l-153 97v155l139-87q7-5 14-.5t7 12.78q0 3.79-1.84 6.89-1.84 3.11-5.16 4.83l-153 97v190h26q80 0 144-50.5T662-386q1-6 5.88-10t11.12-4q5.53 0 9.26 4.5Q692-391 691-385q-14 92-84.02 152.5Q536.95-172 440-172h-24q-12.75 0-21.37-8.63Q386-189.25 386-202Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLiraW100Filled.displayName = 'OnesyIconMaterialCurrencyLiraW100Filled';

export default IconMaterialCurrencyLiraW100Filled;
