import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGolfCourseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseFilled'

      short_name='GolfCourse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-120q-25 0-42.5-17.5T720-180q0-25 17.5-42.5T780-240q25 0 42.5 17.5T840-180q0 25-17.5 42.5T780-120ZM400-80q-100 0-170-23.5T160-160q0-23 33-41t87-29v30q0 17 11.5 28.5T320-160q17 0 28.5-11.5T360-200v-616q0-23 19-34.5t39-1.5l190 93q23 11 23 36t-22 36l-169 87v362q86 5 143 26.5t57 51.5q0 33-70 56.5T400-80Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseFilled.displayName = 'OnesyIconMaterialGolfCourseFilled';

export default IconMaterialGolfCourseFilled;
