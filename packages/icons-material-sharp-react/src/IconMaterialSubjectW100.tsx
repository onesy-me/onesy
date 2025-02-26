import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectW100'

      short_name='Subject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-240v-40h296v28l-296 12Zm0-149v-28h536v28H212Zm0-154v-28h536v28H212Zm0-137v-40h536v40H212Z"/>
    </Icon>
  );
});

IconMaterialSubjectW100.displayName = 'OnesyIconMaterialSubjectW100';

export default IconMaterialSubjectW100;
