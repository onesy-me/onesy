import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResumeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeW100'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-312v-336h28v336h-28Zm128 0 281-168-281-168v336Zm28-52v-232l194 116-194 116Zm0-116Z"/>
    </Icon>
  );
});

IconMaterialResumeW100.displayName = 'OnesyIconMaterialResumeW100';

export default IconMaterialResumeW100;
