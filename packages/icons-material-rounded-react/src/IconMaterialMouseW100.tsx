import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseW100'

      short_name='Mouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-95 0-161.5-66.5T252-360v-236q0-95 66.5-161.5T480-824q95 0 161.5 66.5T708-596v236q0 95-66.5 161.5T480-132Zm14-464h186q0-81-54.5-138T494-796v200Zm-214 0h186v-200q-77 5-131.5 62T280-596Zm200 436q83 0 141.5-58.5T680-360v-208H280v208q0 83 58.5 141.5T480-160Zm0-408Zm14-28Zm-28 0Zm14 28Z"/>
    </Icon>
  );
});

IconMaterialMouseW100.displayName = 'OnesyIconMaterialMouseW100';

export default IconMaterialMouseW100;
