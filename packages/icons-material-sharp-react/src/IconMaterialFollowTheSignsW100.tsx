import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFollowTheSignsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FollowTheSignsW100'

      short_name='FollowTheSigns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-756q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19ZM154-66l112-582-132 55v127h-28v-146l177-73q27-11 48.5-6.5T366-666l39 63q26 42 70.5 71.5T574-496v28q-72-6-124.5-47.5T367-611l-39 199 86 84v262h-28v-223L260-410 182-66h-28Zm532 10v-560H536v-248h328v248H714v560h-28Zm35-608 76-76-76-76-20 20 42 42H596v28h147l-42 42 20 20Z"/>
    </Icon>
  );
});

IconMaterialFollowTheSignsW100.displayName = 'OnesyIconMaterialFollowTheSignsW100';

export default IconMaterialFollowTheSignsW100;
