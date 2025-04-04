import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFinanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceW100'

      short_name='Finance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-172q-26 0-43-17t-17-43v-594q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v594q0 12 10 22t22 10h594q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H206Zm132-146q-11.05 0-18.52-7.48Q312-332.95 312-344v-220q0-11.05 7.48-18.53Q326.95-590 338-590q12.75 0 21.38 8.7 8.62 8.7 8.62 21.57v211.87q0 12.86-8.62 21.36-8.63 8.5-21.38 8.5Zm174 0q-11.05 0-18.52-7.48Q486-332.95 486-344v-416q0-12.75 8.63-21.38Q503.25-790 516-790q11.05 0 18.53 7.47Q542-775.05 542-764v416q0 12.75-8.62 21.37Q524.75-318 512-318Zm174 0q-11.05 0-18.53-7.48Q660-332.95 660-344v-56q0-12.75 8.63-21.38Q677.25-430 690-430q11.05 0 18.53 7.48Q716-415.05 716-404v56q0 12.75-8.62 21.37Q698.75-318 686-318Z"/>
    </Icon>
  );
});

IconMaterialFinanceW100.displayName = 'OnesyIconMaterialFinanceW100';

export default IconMaterialFinanceW100;
