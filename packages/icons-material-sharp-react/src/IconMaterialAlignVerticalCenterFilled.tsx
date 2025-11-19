import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalCenterFilled = (props: IIcon) => {

  return (
    <Icon
      name='AlignVerticalCenterFilled'

      short_name='AlignVerticalCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-320H80v-80h200v-320h120v320h160v-200h120v200h200v80H680v200H560v-200H400v320H280Z"/>
    </Icon>
  );
};

IconMaterialAlignVerticalCenterFilled.displayName = 'OnesyIconMaterialAlignVerticalCenterFilled';

export default IconMaterialAlignVerticalCenterFilled;
