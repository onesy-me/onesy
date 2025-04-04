import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDataSetting = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSetting'

      short_name='PermDataSetting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-100q-12-5-22.5-10.5T664-124l-29 9q-13 4-25.5-1T590-132l-8-14q-7-12-5-26t13-23l22-19q-2-12-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T708-380l6-29q3-14 13.5-22.5T752-440h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T856-356l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 12 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T812-100l-6 29q-3 14-13.5 22.5T768-40h-16q-14 0-24.5-9T714-72l-6-28Zm52-60q33 0 56.5-23.5T840-240q0-33-23.5-56.5T760-320q-33 0-56.5 23.5T680-240q0 33 23.5 56.5T760-160ZM177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v224q0 17-11.5 28T840-520q-17 0-28.5-11T800-559v-128L273-160h188q17 0 28 11.5t11 28.5q0 17-11 28.5T461-80H177Zm96-80 527-527-263.5 263.5L273-160Z"/>
    </Icon>
  );
});

IconMaterialPermDataSetting.displayName = 'OnesyIconMaterialPermDataSetting';

export default IconMaterialPermDataSetting;
