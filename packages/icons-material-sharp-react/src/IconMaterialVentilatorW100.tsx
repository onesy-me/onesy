import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVentilatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VentilatorW100'

      short_name='Ventilator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-648h180v-100H510v100ZM172-288q17 0 28.5-11.5T212-328q0-17-11.5-28.5T172-368q-17 0-28.5 11.5T132-328q0 17 11.5 28.5T172-288Zm308 136q-81 0-151.5-31T204-268q-8 4-15.66 6-7.65 2-15.9 2-29.44 0-48.94-19.5Q104-299 104-328q0-16 6-29t17-22q-12.76-29.3-20.88-59.65Q98-469 94-501l28-3q3 29 11 57t19 54q5-2 10-2.5t10-.5q29 0 48.5 19.5T240-328q0 11.85-4 22.42Q232-295 225-286q47 48 109 75.5T466-180v-198q0-27-19.5-46.5T400-444q-56 0-95-39t-39-95q0-56 39-95t95-39h82v-64h236v64h46v28h-46v64H482v-64h-82q-45 0-75.5 30.5T294-578q0 45 30.5 75.5T400-472q39.17 0 66.58 27.42Q494-417.17 494-378v198q107-4 191.5-64.5T811-400l-46-24 13-24 43 22q6.25-18.6 10.63-38.3Q836-484 838-504l29 3q-1.71 22.92-6.86 44.96Q855-434 847-413l44 22-12 24-42-20q-45 105-141 170t-216 65Zm30-496v-100 100ZM172-328Z"/>
    </Icon>
  );
});

IconMaterialVentilatorW100.displayName = 'OnesyIconMaterialVentilatorW100';

export default IconMaterialVentilatorW100;
