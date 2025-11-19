import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenPortrait = (props: IIcon) => {

  return (
    <Icon
      name='SplitscreenPortrait'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200ZM160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm480-640H240h480Z"/>
    </Icon>
  );
};

IconMaterialSplitscreenPortrait.displayName = 'OnesyIconMaterialSplitscreenPortrait';

export default IconMaterialSplitscreenPortrait;
