import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemove = (props: IIcon) => {

  return (
    <Icon
      name='BookmarkRemove'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-680H600v-80h240v80ZM480-240 200-120v-720h320v80H280v518l200-86 200 86v-278h80v400L480-240ZM280-760h240-240Z"/>
    </Icon>
  );
};

IconMaterialBookmarkRemove.displayName = 'OnesyIconMaterialBookmarkRemove';

export default IconMaterialBookmarkRemove;
