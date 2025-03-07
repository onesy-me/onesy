import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbellChimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellChimeFilled'

      short_name='DoorbellChime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0 200q-83 0-141.5-58.5T280-280v-400q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680v400q0 83-58.5 141.5T480-80Zm0-160q33 0 56.5-23.5T560-320q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320q0 33 23.5 56.5T480-240Zm0-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm267 200q-17 0-28.5-11.5T707-400q0-8 3-15.5t8-12.5q11-11 16.5-24t5.5-28q0-15-5.5-28T718-532q-5-6-8-13t-3-15q0-17 11.5-28.5T747-600q8 0 15.5 3.5T775-588q22 22 33.5 49.5T820-480q0 31-11.5 58.5T775-372q-5 5-12.5 8.5T747-360Zm107 80q-17 0-28.5-11.5T814-320q0-8 3.5-15.5T826-348q26-26 40-60.5t14-71.5q0-37-14-71.5T826-612q-5-5-8.5-12.5T814-640q0-17 11.5-28.5T854-680q8 0 15.5 3.5T882-668q38 38 58 86t20 102q0 54-20 102t-58 86q-5 5-12.5 8.5T854-280Z"/>
    </Icon>
  );
});

IconMaterialDoorbellChimeFilled.displayName = 'OnesyIconMaterialDoorbellChimeFilled';

export default IconMaterialDoorbellChimeFilled;
