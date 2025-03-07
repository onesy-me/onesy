import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOncologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OncologyW100'

      short_name='Oncology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M171-106v-214q0-39 27.5-66.5T265-414h80q61 0 103.5-42.5T491-560q0-27-19.5-46.5T425-626q-23 0-38.5-15.5T371-680v-174h29v174q0 11 7 18.5t18 7.5q39 0 66.5 27.5T519-560q0 72-51 123t-123 51h-80q-27 0-46.5 19.5T199-320v214h-28Zm229-574v-174 174q0 11 7 18.5t18 7.5q39 0 66.5 27.5T519-560q0 72-51 123t-123 51h-80q-27 0-46.5 19.5T199-320v214-214q0-27 19.5-46.5T265-386h80q72 0 123-51t51-123q0-39-27.5-66.5T425-654q-11 0-18-7.5t-7-18.5Zm388 206q-7-5-13.5-9.5T760-493v-27q0-91-57.5-158.5T557-746q-32 0-54.5-23T480-823v-31h28v31l49 49q100 0 165.5 75.5T788-520v46ZM280-106v-54q0-39 27.5-66.5T374-254h73q2 8 4 14.5t5 13.5h-82q-27 0-46.5 19.5T308-160v54h-28Zm374-115q35 0 60.5-25.5T740-307q0-35-25.5-60.5T654-393q-35 0-60.5 25.5T568-307q0 35 25.5 60.5T654-221Zm162 102-96-95q-14 10-30.5 15.5T654-193q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 21-7.5 40T740-233l95 95-19 19Z"/>
    </Icon>
  );
});

IconMaterialOncologyW100.displayName = 'OnesyIconMaterialOncologyW100';

export default IconMaterialOncologyW100;
