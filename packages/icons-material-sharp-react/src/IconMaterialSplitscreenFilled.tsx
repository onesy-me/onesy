import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenFilled = (props: IIcon) => {

  return (
    <Icon
      name='SplitscreenFilled'

      short_name='Splitscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h720v320H120Zm0 400v-320h720v320H120Z"/>
    </Icon>
  );
};

IconMaterialSplitscreenFilled.displayName = 'OnesyIconMaterialSplitscreenFilled';

export default IconMaterialSplitscreenFilled;
