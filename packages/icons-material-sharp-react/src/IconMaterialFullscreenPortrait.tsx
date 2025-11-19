import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullscreenPortrait = (props: IIcon) => {

  return (
    <Icon
      name='FullscreenPortrait'

      short_name='FullscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-480H320v480ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
};

IconMaterialFullscreenPortrait.displayName = 'OnesyIconMaterialFullscreenPortrait';

export default IconMaterialFullscreenPortrait;
