import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyLinkW100'

      short_name='FamilyLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-66q-42 0-76.5-25T271-156q-8-31-26.5-55.5T196-236q-19 0-36.5 9T130-204l-21-18q16-20 38.5-31t48.5-11q39 0 65 30.5t37 69.5q9 31 36 50.5T393-94q29 0 50.5-17.5T481-152l2-3-289-423 306-314 306 314-296 433q-25 38-54 58.5T393-66Zm107-114 269-395-269-278-269 278 269 395Zm0-337Z"/>
    </Icon>
  );
});

IconMaterialFamilyLinkW100.displayName = 'OnesyIconMaterialFamilyLinkW100';

export default IconMaterialFamilyLinkW100;
