import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoronavirusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoronavirusFilled'

      short_name='Coronavirus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-80v-60h30v-62q-42-5-79-20t-67-40l-43 44 21 21-42 42-85-85 41-41 22 20 44-44q-25-31-40-67t-20-78h-62v30H80v-120h60v30h62q5-42 20.5-78t39.5-67l-44-44-22 20-41-42 85-85 43 43-22 22 43 43q31-25 67-40t78-20v-62h-29v-60h120v60h-30v62q42 5 78 20t67 40l44-44-21-21 43-43 84 86-42 42-22-21-43 43q25 31 40 67.5t20 78.5h62v-30h60v120h-60v-30h-62q-5 42-20 78.5T698-304l43 43 22-22 43 43-85 85-42-41 20-22-44-44q-31 25-67 40.5T510-201v61h30v60H420Zm-10-240q17 0 28.5-11.5T450-360q0-17-11.5-28.5T410-400q-17 0-28.5 11.5T370-360q0 17 11.5 28.5T410-320Zm140 0q17 0 28.5-11.5T590-360q0-17-11.5-28.5T550-400q-17 0-28.5 11.5T510-360q0 17 11.5 28.5T550-320ZM340-440q17 0 28.5-11.5T380-480q0-17-11.5-28.5T340-520q-17 0-28.5 11.5T300-480q0 17 11.5 28.5T340-440Zm140 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm140 0q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440ZM410-560q17 0 28.5-11.5T450-600q0-17-11.5-28.5T410-640q-17 0-28.5 11.5T370-600q0 17 11.5 28.5T410-560Zm140 0q17 0 28.5-11.5T590-600q0-17-11.5-28.5T550-640q-17 0-28.5 11.5T510-600q0 17 11.5 28.5T550-560Z"/>
    </Icon>
  );
});

IconMaterialCoronavirusFilled.displayName = 'OnesyIconMaterialCoronavirusFilled';

export default IconMaterialCoronavirusFilled;
