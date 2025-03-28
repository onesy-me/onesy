import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgW100'

      short_name='Ecg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM132-594v-154h696v268h-28v-240H160v126h-28Zm0 382v-154h28v126h279v28H132Zm588 108-39-33q-82-71-104.5-97.5T554-286.89q0-32.36 22.11-55.74Q598.22-366 630-366q15.67 0 29.84 7Q674-352 690-338l30 27 28-26q16-14 31-21.5t31-7.5q31.09 0 53.55 23.37Q886-319.25 886-286.89q0 25.89-23 52.39T758-137l-38 33Zm0-38 32-27q67-57 86.5-78.5T858-287q0-20.4-14.4-35.7Q829.2-338 810-338q-11.81 0-21.4 4.5Q779-329 768-318l-48 46-49-46q-11-11-20.75-15.5T630-338q-20 0-34 15.3T582-287q0 17.43 22 41.72Q626-221 690-167l30 25ZM132-466v-28h76l72 143 159-320 89 177h126v28H511l-72-142-160 320-88-178h-59Zm588 226Z"/>
    </Icon>
  );
});

IconMaterialEcgW100.displayName = 'OnesyIconMaterialEcgW100';

export default IconMaterialEcgW100;
