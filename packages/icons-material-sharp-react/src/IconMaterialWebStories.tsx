import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebStories = (props: IIcon) => {

  return (
    <Icon
      name='WebStories'

      short_name='WebStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160v-640h80v640h-80ZM80-80v-800h520v800H80Zm760-160v-480h60v480h-60Zm-680 80h360v-640H160v640Zm0-640v640-640Z"/>
    </Icon>
  );
};

IconMaterialWebStories.displayName = 'OnesyIconMaterialWebStories';

export default IconMaterialWebStories;
