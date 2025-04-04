import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialTrackingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTrackingFilled'

      short_name='SpatialTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-232q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v32q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-32Zm-8-575q-22 22-51 34.5T39-760q-17 0-28.5-11.5T-1-800q0-17 11.5-28.5T39-840q17 0 31-6.5T95-864q11-11 17-25t6-31q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 33-12.5 62T152-807Zm114 114q-44 44-102 69T39-599q-17 0-28.5-11.5T-1-639q0-17 11.5-28.5T39-679q51 0 94.5-19t75.5-52q32-33 51-76t19-94q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 66-25 124.5T266-693Zm427 0q-44-44-69-102t-26-125q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 50 19 93.5t52 76.5q33 33 76.5 52t93.5 19q17 0 28.5 11.5T960-639q0 17-11.5 28.5T920-599q-67 0-125-25t-102-69Zm114-114q-22-22-34.5-51T759-920q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 17 6.5 31t17.5 25q11 11 25 17.5t31 6.5q17 0 28.5 11.5T960-800q0 17-11.5 28.5T920-760q-33 0-62-12.5T807-807Z"/>
    </Icon>
  );
});

IconMaterialSpatialTrackingFilled.displayName = 'OnesyIconMaterialSpatialTrackingFilled';

export default IconMaterialSpatialTrackingFilled;
