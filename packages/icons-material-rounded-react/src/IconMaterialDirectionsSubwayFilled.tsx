import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsSubwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubwayFilled'

      short_name='DirectionsSubway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-200q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l65 43q12 8 8 22.5T714-120H246q-15 0-19-14.5t8-22.5l65-43Zm-60-360h200v-120H240v120Zm280 0h200v-120H520v120ZM340-320q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubwayFilled.displayName = 'OnesyIconMaterialDirectionsSubwayFilled';

export default IconMaterialDirectionsSubwayFilled;
