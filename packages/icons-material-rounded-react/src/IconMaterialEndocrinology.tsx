import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEndocrinology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Endocrinology'

      short_name='Endocrinology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280q17 0 28.5-11.5T440-320q0-45-21.5-82.5T360-462v142q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-142q-37 22-58.5 59.5T520-320q0 17 11.5 28.5T560-280Zm-400-46v-418q-18-20-33.5-42T98-833q-7-14 0-27.5t22-19.5q15-6 30-1t23 19q47 84 128.5 133T480-680q95 0 174.5-47T782-854q10-16 25.5-24.5T840-880q16 7 21 23t-3 31q-12 23-26.5 43T800-744v418q0 35 16.5 64.5T862-213q13 8 18 23t0 30q-5 16-18.5 23.5t-27.5.5q-53-28-83.5-78.5T720-326v-348q-53 35-113.5 54.5T480-600q-66 0-127-19.5T240-674v348q0 61-31 111.5T125-136q-14 7-27-.5T80-160q-5-15 0-30t18-23q29-18 45.5-48t16.5-65Zm240 126q-50 0-85-35t-35-85v-213q0-15 11.5-24t25.5-5l17 4q46 11 83.5 38.5T480-454q25-38 62.5-65.5T626-558l17-4q14-4 25.5 5t11.5 24v213q0 50-35 85t-85 35q-23 0-43.5-8.5T480-231q-16 14-36.5 22.5T400-200Zm160-120Zm-160 0Z"/>
    </Icon>
  );
});

IconMaterialEndocrinology.displayName = 'OnesyIconMaterialEndocrinology';

export default IconMaterialEndocrinology;
