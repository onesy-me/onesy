import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarksFilled = (props: IIcon) => {

  return (
    <Icon
      name='BookmarksFilled'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-720h560v720L400-160 120-40Zm640-120v-680H240v-80h600v760h-80Z"/>
    </Icon>
  );
};

IconMaterialBookmarksFilled.displayName = 'OnesyIconMaterialBookmarksFilled';

export default IconMaterialBookmarksFilled;
