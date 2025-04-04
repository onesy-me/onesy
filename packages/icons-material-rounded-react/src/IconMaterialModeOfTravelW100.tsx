import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeOfTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravelW100'

      short_name='ModeOfTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-153q-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T186-552q0-138 89-220t205-82q131 0 220 95t74 270l101-101q4-4 9-4t9 4q4 4 4 9.5t-4 9.5L781-458q-9 9-21 9t-21-9L626-571q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l100 101q15-156-61.5-246.5T480-826q-112 0-189 76.5T214-552q0 76 65 176.5T480-151q20-18 50.5-47.5T578-245q-10-13-14-27t-4-28q0-33 23.5-56.5T640-380q33 0 56.5 23.5T720-300q0 33-23.5 56.5T640-220q-10 0-21-2t-19-7q-14 15-35.5 30.5T491-165q-7 6-15.5 9t-16.5 3Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravelW100.displayName = 'OnesyIconMaterialModeOfTravelW100';

export default IconMaterialModeOfTravelW100;
