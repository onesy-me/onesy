import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnDeviceTrainingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnDeviceTrainingFilled'

      short_name='OnDeviceTraining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-280q-8 0-14-6t-6-14q0-8 6-14t14-6h40q8 0 14 6t6 14q0 8-6 14t-14 6h-40Zm0-60q-8 0-14-6t-6-14v-11q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v11q0 8-6 14t-14 6h-40Zm160-100q0-13-2-25t-7-24q-5-11-2-23t14-19q11-7 22.5-4.5T662-522q9 19 13.5 39.5T680-440q0 21-4.5 41.5T662-359q-5 11-16.5 14t-22.5-4q-11-7-14-19t2-24q5-11 7-23t2-25Zm-280 0q0 13 2 25t7 24q5 11 2 23t-14 19q-11 7-22.5 4.5T298-358q-9-19-13.5-39.5T280-440q0-83 58.5-141.5T480-640v-28q0-7 6-9.5t11 2.5l56 50q7 6 7 15t-7 15l-56 50q-5 5-11 2.5t-6-9.5v-28q-58 0-99 41t-41 99ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Z"/>
    </Icon>
  );
});

IconMaterialOnDeviceTrainingFilled.displayName = 'OnesyIconMaterialOnDeviceTrainingFilled';

export default IconMaterialOnDeviceTrainingFilled;
