import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingFilled'

      short_name='Downloading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-90q-137-31-224.5-140T80-480q0-141 87.5-250T392-870q19-5 33.5 7t14.5 32q0 14-8 25t-22 14q-110 25-180 112t-70 200q0 113 70 200t180 112q14 3 22 14t8 25q0 20-14.5 32T392-90Zm176 0q-19 5-33.5-7T520-129q0-14 8-25t22-14q27-6 52.5-16.5T651-210q11-8 24.5-6t23.5 12q14 14 12 32.5T693-142q-29 18-60.5 31T568-90Zm188-170q-10-10-12-23.5t6-24.5q15-23 25.5-49t16.5-53q3-14 14-21.5t25-7.5q20 0 32 14.5t7 33.5q-8 33-21 64.5T818-266q-11 16-29.5 18T756-260Zm75-260q-14 0-25-8t-14-22q-6-27-16.5-52.5T750-651q-8-12-6-25.5t12-23.5q14-14 32.5-12t29.5 19q18 29 31 60.5t21 64.5q5 19-7 33.5T831-520ZM651-750q-23-15-48.5-25.5T550-792q-14-3-22-14t-8-25q0-20 14.5-32t33.5-7q33 8 64.5 21t60.5 31q17 11 19 29.5T700-756q-10 10-23.5 12t-25.5-6ZM519-435l74-74q12-12 29-12t29 12q12 12 11.5 29T650-451L507-308q-11 11-28 11t-28-11L306-454q-12-12-11.5-28.5T307-511q12-12 28.5-12t28.5 12l75 76v-205q0-17 11.5-28.5T479-680q17 0 28.5 11.5T519-640v205Z"/>
    </Icon>
  );
});

IconMaterialDownloadingFilled.displayName = 'OnesyIconMaterialDownloadingFilled';

export default IconMaterialDownloadingFilled;
