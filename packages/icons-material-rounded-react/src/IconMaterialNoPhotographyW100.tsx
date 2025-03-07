import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoPhotographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyW100'

      short_name='NoPhotography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-648v381q0 7-4.5 10.5T814-253q-5 0-9.5-3.5T800-267v-381q0-14-9-23t-23-9H666q-13 0-24.5-5T622-699l-56-61H394l-29 32q-4 5-9.5 5.5T345-727q-4-4-4.5-9.5T344-747l20-22q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43ZM192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h60l28 28h-88q-14 0-23 9t-9 23v416q0 14 9 23t23 9h568l28 28H192Zm405-191q-19 29-49.5 46T480-300q-59 0-99.5-40.5T340-440q0-37 17-67.5t46-49.5l20 20q-25 14-40 39.5T368-440q0 48 32 80t80 32q32 0 57.5-15t39.5-40l20 20Zm-18-176q17 17 27.5 38.5T619-453L493-579q26 2 47.5 12.5T579-539ZM842-78 100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM480-440Zm97-55Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100.displayName = 'OnesyIconMaterialNoPhotographyW100';

export default IconMaterialNoPhotographyW100;
