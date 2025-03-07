import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastW100Filled'

      short_name='Cast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-272q0 24.75-17.62 42.37Q792.75-212 768-212H597q-10.61 0-17.8-7.5Q572-227 571-238q-4-79-36-149t-84-125q-52-55-120.5-90.5T185-648q-23-3-38-16.5T132-700q0-22 15.5-35t38.53-13H768q24.75 0 42.38 17.62Q828-712.75 828-688v416Zm-518.18 60q-5.82 0-9.82-4.5t-5-10.5q-5-59-47.5-100.5T145-375q-6.09-.7-9.55-5.08-3.45-4.37-3.45-9.97 0-5.95 5-9.95 5-4 11-3 71 6 120.5 55.5T323-227q1 6-3 10.5t-10.18 4.5ZM458-212q-7 0-10.5-6t-4.5-14q-8-119-92-202.5T147-524q-6 0-10.5-4.21t-4.5-9.83q0-5.96 5-9.96 5-4 12-4 132 6 224.5 99T472-228q0 7-4.02 11.5-4.03 4.5-9.98 4.5Zm-300.06 0q-10.94 0-18.44-7.56-7.5-7.55-7.5-18.5 0-10.94 7.56-18.44 7.55-7.5 18.5-7.5 10.94 0 18.44 7.56 7.5 7.55 7.5 18.5 0 10.94-7.56 18.44-7.55 7.5-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialCastW100Filled.displayName = 'OnesyIconMaterialCastW100Filled';

export default IconMaterialCastW100Filled;
