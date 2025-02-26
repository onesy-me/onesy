import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbellChime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellChime'

      short_name='DoorbellChime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m882-292-56-56q26-26 40-60.5t14-71.5q0-37-14-71.5T826-612l56-56q38 38 58 86t20 102q0 54-20 102t-58 86Zm-107-80-57-56q11-11 16.5-24t5.5-28q0-15-5.5-28T718-532l57-56q22 22 33.5 49.5T820-480q0 31-11.5 58.5T775-372ZM480-80q-83 0-141.5-58.5T280-280v-400q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680v400q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85v-400q0-50-35-85t-85-35q-50 0-85 35t-35 85v400q0 50 35 85t85 35Zm0-80q33 0 56.5-23.5T560-320q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320q0 33 23.5 56.5T480-240Zm0-40q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-280q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 80Z"/>
    </Icon>
  );
});

IconMaterialDoorbellChime.displayName = 'OnesyIconMaterialDoorbellChime';

export default IconMaterialDoorbellChime;
