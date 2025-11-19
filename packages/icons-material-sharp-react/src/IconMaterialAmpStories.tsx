import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmpStories = (props: IIcon) => {

  return (
    <Icon
      name='AmpStories'

      short_name='AmpStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-640h400v640H280Zm-160-80v-480h80v480h-80Zm640 0v-480h80v480h-80Zm-400 0h240v-480H360v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialAmpStories.displayName = 'OnesyIconMaterialAmpStories';

export default IconMaterialAmpStories;
