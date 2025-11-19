import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkFilled = (props: IIcon) => {

  return (
    <Icon
      name='BookmarkFilled'

      short_name='Bookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Z"/>
    </Icon>
  );
};

IconMaterialBookmarkFilled.displayName = 'OnesyIconMaterialBookmarkFilled';

export default IconMaterialBookmarkFilled;
