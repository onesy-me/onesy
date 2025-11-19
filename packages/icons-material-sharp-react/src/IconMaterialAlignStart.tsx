import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignStart = (props: IIcon) => {

  return (
    <Icon
      name='AlignStart'

      short_name='AlignStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-800v-80h800v80H80Zm200 240v-120h400v120H280Zm0 240v-120h400v120H280Z"/>
    </Icon>
  );
};

IconMaterialAlignStart.displayName = 'OnesyIconMaterialAlignStart';

export default IconMaterialAlignStart;
