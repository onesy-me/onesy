import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignCenterFilled = (props: IIcon) => {

  return (
    <Icon
      name='AlignCenterFilled'

      short_name='AlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-440v-80h800v80H80Zm200-120v-120h400v120H280Zm0 280v-120h400v120H280Z"/>
    </Icon>
  );
};

IconMaterialAlignCenterFilled.displayName = 'OnesyIconMaterialAlignCenterFilled';

export default IconMaterialAlignCenterFilled;
