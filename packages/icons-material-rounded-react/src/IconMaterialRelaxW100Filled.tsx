import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRelaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RelaxW100Filled'

      short_name='Relax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-171q-7 0-14.5-3t-12.5-9L205-432q-17-17-30-35.5T153-506h323q27 0 46 19.5t19 46.5q0 27-19.5 46.5T475-374q-8 0-15-2t-14-5q-5-4-10.5-3t-9.5 6q-4 5-3 10.5t6 9.5q11 6 22.5 9t23.5 3q39 0 66.5-27.5T569-440q0-20-7-36.5T542-506h93q39 0 66.5-27.5T729-600q0-39-27.5-66.5T635-694q-12 0-23.5 3t-22.5 9q-5 4-6 9.5t3 10.5q4 5 9.5 5.5T606-660q7-3 14-4.5t15-1.5q27 0 46.5 19.5T701-600q0 27-19.5 46.5T635-534H142q-5-16-7.5-32t-2.5-33q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828-600q0 46-19 89.5T755-432L506-183q-6 6-12.5 9t-13.5 3Z"/>
    </Icon>
  );
});

IconMaterialRelaxW100Filled.displayName = 'OnesyIconMaterialRelaxW100Filled';

export default IconMaterialRelaxW100Filled;
