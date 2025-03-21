import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorSmokeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorSmokeFilled'

      short_name='DetectorSmoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-68-76-24 16-52q6-24 4-46.5T448-236q-25-38-31.5-78.5T424-400l16-52 76 24-16 52q-8 23-5 47.5t17 44.5q23 38 30.5 80t-6.5 84l-16 52Zm-176 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 23-5 48t17 44q24 36 31 79.5t-7 84.5l-16 52Zm348 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 24-5 47.5t17 44.5q24 38 30.5 80t-6.5 84l-16 52ZM324-640l12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Z"/>
    </Icon>
  );
});

IconMaterialDetectorSmokeFilled.displayName = 'OnesyIconMaterialDetectorSmokeFilled';

export default IconMaterialDetectorSmokeFilled;
