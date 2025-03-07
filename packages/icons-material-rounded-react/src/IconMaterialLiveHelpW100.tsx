import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveHelpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpW100'

      short_name='LiveHelp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-212H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H578l-77 77q-9 9-21 9t-21-9l-77-77Zm-150-28h162l86 86 86-86h162q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm248-280Zm1 199q11 0 18.5-7.5T507-347q0-11-7.5-18.5T481-373q-11 0-18.5 7.5T455-347q0 11 7.5 18.5T481-321Zm77-303q0 20-9.5 38.5T519-549q-15 14-25.5 26.5T477-498q-5 9-7 17.5t-4 18.5q-1 6 3 10.5t10 4.5q6 0 10.5-4t5.5-10q3-16 11.5-30t28.5-34q28-28 40-51t12-48q0-42-29-68.5T483-719q-30 0-58 15t-45 42q-3 5-1 11t8 8q5 2 11 0t10-7q15-21 33.5-31t41.5-10q35 0 55 17.5t20 49.5Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpW100.displayName = 'OnesyIconMaterialLiveHelpW100';

export default IconMaterialLiveHelpW100;
