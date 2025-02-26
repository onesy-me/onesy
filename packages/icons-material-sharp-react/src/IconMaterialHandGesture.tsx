import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandGesture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGesture'

      short_name='HandGesture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-759q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm99 0L48-465l69-66 163 114v-423h80v577L212-367l169 247h379v-680h80v760H339Zm101-440v-440h80v440h-80Zm160 0v-400h80v400h-80Zm-80 180Z"/>
    </Icon>
  );
});

IconMaterialHandGesture.displayName = 'OnesyIconMaterialHandGesture';

export default IconMaterialHandGesture;
