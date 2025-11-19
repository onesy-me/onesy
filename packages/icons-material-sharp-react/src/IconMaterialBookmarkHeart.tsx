import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkHeart = (props: IIcon) => {

  return (
    <Icon
      name='BookmarkHeart'

      short_name='BookmarkHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-720h560v720L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
};

IconMaterialBookmarkHeart.displayName = 'OnesyIconMaterialBookmarkHeart';

export default IconMaterialBookmarkHeart;
