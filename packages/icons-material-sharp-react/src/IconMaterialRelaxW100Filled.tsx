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
      <path d="M479-156 205-432q-17-17-30-35.5T153-506h323q27 0 46 19.5t19 46.5q0 27-19.5 46.5T475-374q-15 0-28.5-6.5T423-399l-29 8q14 21 35 33t46 12q39 0 66.5-27.5T569-440q0-20-7-36.5T542-506h93q39 0 66.5-27.5T729-600q0-39-27.5-66.5T635-694q-25 0-46 12t-35 33l29 8q10-12 23.5-18.5T635-666q27 0 46.5 19.5T701-600q0 27-19.5 46.5T635-534H142q-5-16-7.5-32t-2.5-33q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828-600q0 46-19 89.5T755-432L479-156Z"/>
    </Icon>
  );
});

IconMaterialRelaxW100Filled.displayName = 'OnesyIconMaterialRelaxW100Filled';

export default IconMaterialRelaxW100Filled;
