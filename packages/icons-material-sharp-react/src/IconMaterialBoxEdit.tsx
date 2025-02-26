import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEdit'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-720h528l-34-40H250l-34 40Zm184 270 80-40 80 40v-190H400v190ZM120-120v-608l92-112h536l92 112v93l-80 80v-85H640v205l-77 77-83-42-160 80v-320H200v440h280v80H120Zm520-520h120-120Zm-440 0h363-363Zm360 520v-123l263-262 123 122-263 263H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialBoxEdit.displayName = 'OnesyIconMaterialBoxEdit';

export default IconMaterialBoxEdit;
